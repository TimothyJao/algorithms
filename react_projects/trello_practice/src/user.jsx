import React, {useState, useEffect} from "react"
import Task from "./task"

function User(props){

    const [tasks, setTasks] = useState([]);

    function addTask(){
        let newTask = window.prompt("Enter a new task for this user");
        if (newTask) {
            setTasks([...tasks, newTask])
        }
    }

    let listedTasks = tasks.map(task => {
        return (
            <li className="taskName"> 
                <div className="arrow">{"<"}</div>
                {task} 
                <div className="arrow">{">"}</div>
            </li>
        )
    })

    return(
        <>
            <div className="userName">{props.name}</div>
            <ul>{listedTasks}</ul>
            <button onClick={addTask}>Add Task</button>
        </>
    )
}

export default User



