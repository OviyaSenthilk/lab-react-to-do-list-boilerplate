import { useState } from 'react'
import './App.css'

function App() {
  const [list,setlist]=useState([]);
  const [task,setTask]=useState("");

  const handleTask=(e)=>{
    setTask(e.target.value);
  }

  const handleCreate=()=>{
    list.push(task);
    let newList=[...list,task];
    setlist(newList);
    setTask("")
  }

  const deleteItem=(index)=>{
    let newList=list.filter((ele,i)=>{
      if(index!=i){
        return ele;
      }
    });
    setlist(newList);

  }

  const handleUpdate=(newTask,index)=>{
    let newtask=list.map((ele,i)=>{
      if(index==i){
        return newTask;
      }
      else{
        return ele;
      }
    });
    setlist(newtask);
  }

  return (
    <>
      <input type="text" value={task} onChange={(event)=>handleTask(event)} placeholder="Type Here"></input>
      <button onClick={handleCreate}>Add Item</button>
      <h2>{task}</h2>
      <div className='container'>
        {list&&list.map((task,index)=>{
        return <div key={index} className='task-div'>
          <input onChange={(e)=>handleUpdate(e.target.value,index)}value={task}></input>
          <button onClick={()=>deleteItem(index)}>Delete Item</button>
        </div>})}
      </div>
    </>
  )
}

export default App