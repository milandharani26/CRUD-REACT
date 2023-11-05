import React from 'react'
import { BsFillPencilFill, BsFillTrashFill} from "react-icons/bs"
import './Table.css'

const Table = ({rows, deleteRow, editRow}) => {
  return (
    <div className="table-wrapper">
      <table className='table'>
        <thead>
            <tr>
                <th>page</th>
                <th className='expand'>description</th>
                <th>status</th>
                <th>action</th>
            </tr>
        </thead>
        <tbody>

            {
                rows.map((row, idx)=>{

                    const statusText = row.status.charAt(0).toUpperCase() + row.status.slice(1)
                    return <tr key={idx}>
                        <td>{row.page}</td>
                        <td className='expand'>{row.description}</td>
                        <td>
                        <span className={`label label-${row.status}`}>{statusText}</span>
                       </td>
                       <td>
                    <span className='actions'>
                        <BsFillTrashFill className='delete-btn' onClick={()=>deleteRow(idx)}/>
                        <BsFillPencilFill onClick={()=>editRow(idx)}/>
                    </span>
                </td>
                    </tr>
                })
            }
        </tbody>
      </table>
    </div>
  )
}

export default Table
