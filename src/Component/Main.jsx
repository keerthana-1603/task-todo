// eslint-disable-next-line react/prop-types
import { useState } from "react";
import AddData from "./AddData";
import EditData from "./EditData";

export default function Main() {
  const data=[
    {
      Name:"office Task1",
      Description:"This is My descripstion of first task",
      status:"Not Complited"
    },
    {
      Name:"office Task2",
      Description:"This is My descripstion of second task",
      status:"Complited"
    },
    {
      Name:"office Task3",
      Description:"This is My descripstion of Thired task",
      status:"Not Complited"
    }
  ];
  const[taskdata,setTaskdata]=useState(data);
  const[showForm,setShowForm]=useState(true);
  const[editId,setEditId]=useState("");

  // delete the data
  const deldata=(id)=>{
    const newdata=taskdata.filter((todo,idx)=>idx !=id);
    setTaskdata(newdata);
  };

  const handleEdit=(id)=>{
    setShowForm(false);
  setEditId(id);
  };
   
  const handleStatusChange=(id,event)=>{
    taskdata[id].status = event.target.value;
    setTaskdata([...taskdata]);
  }

  return(
     <div className="main">
      {showForm==true ?
      (<AddData taskdata={taskdata} setTaskdata={setTaskdata}/>):
      ( <EditData taskdata={taskdata} setTaskdata={setTaskdata}
        showForm={showForm} setShowForm={setShowForm} editId={editId}/>)
      }
      <div className="flex">
      <div className="Right_side">
      <p className="Right_side"><b>My Todos</b></p></div>
        <div className="Left_side flex">
      <p className="Left_side"><b>Status Filter:</b></p>
      <select className="select select-bordered select-sm w-36 max-w-xs flex-row">
                  <option>Complited</option>
                  <option>Not Complited</option>
                  </select></div></div>

     <div className="flex flex-wrap"> 
      {taskdata &&(
        <>
        {taskdata?.map((todo,idx)=>(
              <div className="card card-compact w-96 bg-base-100 shadow-xl gap-5 m-5 ">
              <div className="card-body">
                <p>Name : {todo.Name}</p>
                <p>Descripstion:{todo.Description}</p>
                <p>status:</p>
                <select className="select select-bordered select-sm w-36 max-w-xs flex-row"
                onChange={(e)=>handleStatusChange(idx,e)}>
                {todo.status=="Complited " ?(
                  <option>Complited</option>):(
                  <option>Not Complited</option>
             ) }  
              {todo.status=="Not Complited" ?(
                  <option>Complited</option>):(
                  <option>Not Complited</option>
             ) }  
            </select>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary"
                  onClick={()=>handleEdit(idx)}>Edit</button>
                  <button className="btn btn-error"
                   onClick={()=>deldata(idx)}>Delete</button>
                </div>
              </div>
            </div>

        ))}
        </>

      )}
      </div>
  </div>
  );
}