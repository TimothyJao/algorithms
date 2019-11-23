import React, {useState, useEffect} from "react"

function User(props){

    const [tasks, setTasks] = useState([]);

    function addTask(){
        let newTask = window.prompt("Enter a new task for this user");
        setTasks([...tasks, <task name={newTask}></task>])
    }

    return(
        <>
            <div>{props.name}</div>
            <button onClick={addTask}>Add Task</button>
        </>
    )
}

export default User



