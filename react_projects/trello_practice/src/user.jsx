import React, {useState} from "react";

function User(props){

    const [tasks, setTasks] = useState(props.cards);
    let leftArrow;
    let rightArrow;

    function addTask(){
        let newTask = window.prompt("Enter a new task for this user");
        if (newTask) {
            props.dispatch({
                type: "add", 
                payload: {
                    task: newTask,
                    index: props.index
                }
            });
        }
    }

    function clickLeft(index){
        props.dispatch({
            type: "move left",
            payload: {
                userIndex: props.index,
                taskIndex: index
            }
        });
    }

    function clickRight(index) {
        setTasks(tasks.slice(0, index).concat(tasks.slice(index + 1)));
    }    

    let listedTasks = props.tasks.map((task, index) => {
        if (props.index === 0) { leftArrow = <div></div>} 
        else{leftArrow = <div className="arrow" onClick={() => clickLeft(index)}>{"<"}</div>}
        if (props.index === 3) { rightArrow = <div></div>}
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
        <div>
            <div className="userName" style={{ background: props.color }}>{props.name}</div>
            <ul>{listedTasks}</ul>
            <button onClick={addTask}>Add Task</button>
        </div>
    )
}

export default User



