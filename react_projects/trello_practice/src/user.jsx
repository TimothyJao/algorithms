import React, {useState, useEffect} from "react"

function User(props){

    const [tasks, setTasks] = useState([]);

    function addTask(){
        let newTask = window.prompt("Enter a new task for this user");
        if (newTask) {
            setTasks([...tasks, newTask])
        }
    }

    function clickLeft(index){
        setTasks(tasks.slice(0, index).concat(tasks.slice(index+1)));
    }

    function clickRight(index) {
        setTasks(tasks.slice(0, index).concat(tasks.slice(index + 1)));
    }

    let listedTasks = tasks.map((task, index) => {
        return (
            <li className="taskName"> 
                <div className="arrow" onClick={() => clickLeft(index)}>{"<"}</div>
                {task} 
                <div className="arrow" onClick={() => clickRight(index)}>{">"}</div>
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



