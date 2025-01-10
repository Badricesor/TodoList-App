import React, { useState } from 'react'

const initialState=[
  {id:1,text:"Write"},
  {id:2,text:"Read"},
  {id:2,text:"Dance"},
]

export const Todos = () => {
 const [user,setUser]=useState(initialState);
 const [data,setData]=useState('');
 
const handleChange= (e)=>{
  setData(e.target.value);
}

const handleButton=()=>{
  if(data.trim()!==''){
    setUser([...user,{id:Date.now(),text:data}]);
    setData('');
  };
  
 
};


const handleDelete=(id)=>{
  setUser(user.filter((task)=>task.id!==id));
  
}

  return (
    <>
    <div className='container'>
      <h1 className='head'>Todo list</h1>
      <label>
        <input type="text"  onChange={handleChange} placeholder='Type here' />
      </label>
      <button className='btn' onClick={handleButton}>Add</button>
      <ul>
        {user.map((list)=>
          (
          <li key={list.id}>{list.text}
          <button className='del' onClick={()=>handleDelete(list.id)}>Del</button> </li>
          )
        )}
      </ul>
    </div>
    </>
  )
}
