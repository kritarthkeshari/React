/*
export default function EventToDo(){
       /* function handleClick(Name){
            alert("How dare you to touch me"+Name);
        }*/
       /* 
        function handleSubmit(e){
            e.preventDefault();//stops page from reloading
            const input=e.target.Task;
            const inputValue=input.value.trim();
            if(inputValue===""){
                alert("Task can't be empty");
                return;
            }
            const li=document.createElement("li");
            li.innerHTML=`<span>${inputValue}</span>
            <button class="DeleteBtn">Delete</button>`;
            document.getElementById("TaskList").appendChild(li);

        }
        function handleClickList(e){
            if(e.target.className==="DeleteBtn"){
                    e.target.parentElement.remove();
            }
        }
    return(
        <>
        <h1>TO DO APP</h1>
       <form onSubmit={handleSubmit}>
            <input type="text" name="Task" placeholder="Add Your TASK Here."/>
            <button type="submit">Add Task</button>
        
            
</form>
<ul id="TaskList" onClick={handleClickList} >
    
            </ul>
        </>
    )
}*/
import { useState } from "react";

export default function EventToDo()
{  
/*    function handleSubmit(e)
    {
        e.preventDefault();
        //console.log("Event Happen");
        const input=e.target.task;
        const taskValue=input.value.trim();
        if(taskValue==="")
        {
            alert("Can not add empty task"); 
            return;
        }
        const li=document.createElement("li");
        li.innerHTML=`<span>${taskValue}</span>
        <button class="deleteBtn">Delete</button>`;
        document.getElementById("taskList").appendChild(li);

    }

    function handleListClick(e)
    {
        if(e.target.className==="deleteBtn")
        {
            e.target.parentElement.remove();
        }
    }

    return(
    <>
    <h1> To Do List</h1>
    <form onSubmit={handleSubmit}>
    <input type="text" name="task" placeholder="Enter Task"/>
    <button type="submit">Add Task</button>

    </form>
    <ul id="taskList" onClick={handleListClick}></ul>
    </>);*/

   const[task,setTask]=useState("");
   const[tasks,setTasks]=useState([]);


 function handleSubmit(e) {
    e.preventDefault();

    const taskValue = task.trim();

    if (taskValue === "") {
      alert("Cannot add empty task");
      return;
    }

    setTasks((prevTasks) => [...prevTasks, taskValue]);
    setTask("");
  }

  function handleDelete(index) {
    setTasks((prevTasks) =>
      prevTasks.filter((_, i) => i !== index)
    );
  }


    return(
        <>
      <h1>To Do List</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button
              className="deleteBtn"
              onClick={() => handleDelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
);
}