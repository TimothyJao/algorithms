import React, {useState, useEffect} from "react"

function User(props){

    const [tasks, setTasks] = useState([]);
    let leftArrow;
    let rightArrow;

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

    useEffect(()=>{
        console.log(props.index)
        console.log(props.getLength())
        if(props.index !== props.getLength()){
            rightArrow = index => (<div className="arrow" onClick={() => clickRight(index)}>{">"}</div>)
        }
    })

    

    let listedTasks = tasks.map((task, index) => {
        if (props.index === 0) { leftArrow = <div></div>} 
        else{leftArrow = <div className="arrow" onClick={() => clickLeft(index)}>{"<"}</div>}
        if (props.index === props.getLength()) { rightArrow = <div></div>}
        else (rightArrow = <div className="arrow" onClick={() => clickRight(index)}>{">"}</div>)

        return (
            <li className="taskName"> 
                {leftArrow}
                {task} 
                {rightArrow}
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



