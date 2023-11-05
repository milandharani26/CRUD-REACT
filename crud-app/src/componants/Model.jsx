import React, { useState } from 'react'
import "./Model.css"

const Model = ({closeModel, onSubmit, defaultValue}) => {
    const [formState, setformState] = useState(
        defaultValue ||
        {
        page:"",
        description:"",
        status:"Live",
    })


    const [errors, setErrors] = useState("")


    const validateForm=()=>{
        if(formState.page && formState.description && formState.status){
            setErrors("")
            return true;
        }

    else{
        let errorFields = [];
        for(const [key, value] of Object.entries(formState))
        if(!value){
            errorFields.push(key);
        }

        setErrors(errorFields.join(", "));
        return false;
      }    
    };

    const handleChange= (e)=>{
        setformState({
            ...formState,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if (!validateForm()) return;

        onSubmit(formState);
        
        closeModel();
    }


    

  return (
    <div className='modal-container' onClick={(e)=>{
        if(e.target.className=== "modal-container") closeModel();
        
    }}>
        <div className='modal'>
            <form>
                <div className='form-group'>
                    <label htmlFor="page">
                        Page
                    </label>
                    <input type="text" name='page' value={formState.page} onChange={handleChange}/>
                </div>

                <div className='form-group'>
                    <label htmlFor="description">
                        Description
                    </label>
                    <textarea type="text" name='description' value={formState.description} onChange={handleChange}/>
                </div>

                <div className='form-group'>
                    <label htmlFor="status">
                        status
                    </label>
                    <select name="status" value={formState.status}  onChange={handleChange}>
                        <option value="live">Live</option>
                        <option value="draft">Draft</option>
                        <option value="error">Error</option>
                    </select>
                </div>
                {errors && <div className='error'> {`please include :${errors}`}</div>}
                <button type='submit' className='btn' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
      
    </div>
  )
}

export default Model
