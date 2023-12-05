import React, { useEffect, useState } from 'react'

const EditData = ({taskdata,setTaskData,showForm,setShowForm,editId}) => {
        const[task,setTask]=useState("");
        const[description,setDescription]=useState("");
        const[taskStatus,setTaskStatus]=useState("");

        useEffect(()=>{
          const selectedData = taskdata.filter((doc,idx)=> idx == editId);
          console.log(selectedData);
          setTask(selectedData[0].Name);
          setDescription(selectedData[0].Description)
          setTaskStatus(selectedData[0].status)
      },[editId]);

        const updateData=()=>{
            const updateTaskData={
              Name : task,
              Description:description,
              status:taskStatus
            };
            taskdata[editId]=updateTaskData;
            // setTaskData([...taskdata]);
            // console.log(taskdata[editId]); 

            setShowForm(!showForm);
        };
  return (
    <div>
        <div className='flex gap-3 justify-center m-5 p-5'>
        <input type="text" placeholder="Enter the Task Name" className="input input-bordered w-60"
         value={task} onChange={(e)=>setTask(e.target.value)} />
        
        <input type="text" placeholder="Enter the Description" className="input input-bordered w-60"
         value={description} onChange={(e)=>setDescription(e.target.value)}  />

        <button className="btn btn-secondary"onClick={updateData}>Update</button>
    </div>
    </div>
  );
};

export default EditData