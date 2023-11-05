import { useState } from 'react'
import './App.css'
import Table from './componants/Table'
import Model from './componants/Model'

function App() {
  const [modalopen, setmodalopen] = useState(false);

  const [rows, setRows] = useState([
    { page: "page 1", description: "this is first page", status: "live" },
    { page: "page 2", description: "this is second page", status: "draft" },
    { page: "page 3", description: "this is third page", status: "error" },
  ]);


  const [rowToEdit, setRowToEdit] = useState(null)


  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };


  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setmodalopen(true);
  }

  const handleSubmit = (newRow) => {
    rowToEdit === null ?
      setRows([...rows, newRow]) :
      setRows(rows.map((currRow, idx) => {
        if (idx !== rowToEdit) return currRow;

        return newRow;
      })
      );
  };

  return (
    <>
      <div className='App-hight'>
        <div className="App">
          <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
          <button className='btn' onClick={() => setmodalopen(true)}>Add</button>
          {modalopen && <Model closeModel={() => {
            setmodalopen(false);
            setRowToEdit(null);
          }}

            onSubmit={handleSubmit}
            defaultValue={rowToEdit !== null && rows[rowToEdit]}

          />}
        </div>
      </div>
    </>
  )
}

export default App
