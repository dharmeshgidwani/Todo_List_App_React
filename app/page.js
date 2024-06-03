"use client"
import React, { useState } from "react"

const page = () => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const [task, setTask] = useState([])  //task naam ki array bana di..jisme pura title,desc dono hogaa

    const submitHandler = (e) => {
        e.preventDefault() //form submit and page reload hone se rokega
        // console.log(title);
        // console.log(desc);
        setTask([...task, { title, desc }])  // ... is spread operator
        setTitle("")
        setDesc("")
        console.log(task);
    }

    const deleteHandler = (index) => {
        let copytask = [...task] // pure task array ko copy krdia
        copytask.splice(index, 1) // i index pe 1 element delete krdia
        setTask(copytask) //task waale array me yeh copytask array daal diya spliced waala
    }
    
    let AllTasks = <h2>No Tasks Available</h2>

    if(task.length>0){
        AllTasks = task.map((t,index)=>{
            return (
                //key is unique identification
                <li key={index} className="flex items-center justify-between  mb-3 ">     
                    <div className=" flex justify-between w-2/3">
                    <h5 className=" font-semibold">{t.title}</h5>
                    <h5>{t.desc}</h5>
                    </div>
                    <button onClick={()=>{
                        deleteHandler(index)
                    }} className="bg-red-400 rounded px-5 py-2 hover:bg-red-500">Delete</button>
                </li>
            );
        })
    }

    return(
        <>
            <h1 className=" bg-black text-white font-bold text-5xl text-center p-5">Dharmesh's Todo List</h1>
            <form onSubmit={submitHandler}>
                <input type="text" className=" border-4 m-5 p-5 border-zinc-500 rounded-xl text-xl" placeholder="Enter Title here" value={title} onChange={(e)=>{
                setTitle(e.target.value)    //yeh sab krke react ko bata rhe h ki form input me kya likha hai (Two way binding)
            }}/>
                <input type="text" className=" border-4 m-5 p-5 border-zinc-500 rounded-xl text-xl" placeholder="Enter Description here" value={desc} onChange={(e)=>{
                    setDesc(e.target.value)
                }}/>
            <button className=" bg-slate-400 m-5 p-5 rounded-lg text-white font-bold hover:text-red-400">Add Task</button>
            </form>
            <hr />
            <div className=" bg-slate-200 p-8 my-5">
                <ul>
                    {AllTasks}
                </ul>
            </div>
        </>
    )
}

export default page