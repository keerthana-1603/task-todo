import React, { useState } from 'react'

const AddData = ({taskdata,setTaskdata}) => {
const[task,setTask]=useState("");
const[description,setDescription]=useState("");

    const addNewData=()=>{
        const addTaskData={
            Name : task,
            Description:description,
            status:"Complited",
        };
        setTaskdata([...taskdata,addTaskData]);
    };
  return (
    <div className='flex gap-3 justify-center m-5 p-5'>
        <input type="text" placeholder="Enter the Task Name" className="input input-bordered w-60"
         value={task} onChange={(e)=>setTask(e.target.value)} />
        
        <input type="text" placeholder="Enter the Description" className="input input-bordered w-60"
         value={description} onChange={(e)=>setDescription(e.target.value)}  />

        <button className="btn btn-accent"
        onClick={addNewData}>Add todo</button>
    </div>
  )
}
// value={description} onClick={(e)=>setDescription(e.target.value)} 
export default AddData