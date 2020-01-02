import React, {useReducer, useEffect} from "react";
import User from "./user";

let initialState = JSON.parse(window.localStorage.getItem('tasks'));
if(!initialState){
    initialState = {
        tasks: [
            ['Tim 1', 'Tim 2'],
            ['John 1', 'John 2'],
            ['Jack 1', 'Jack 2'],
            ['Steph 1', 'Steph 2']
        ]
    };
}


function reducer(state, action){
    const currState = Object.assign({}, state);
    let userIndex, taskIndex;
    switch(action.type){
        case "add":
            currState.tasks[action.payload.index].push(action.payload.task);
            return currState;
        case "move left":
            userIndex = action.payload.userIndex;
            taskIndex = action.payload.taskIndex;
            currState.tasks[userIndex - 1].push(currState.tasks[userIndex][taskIndex]);
            currState.tasks[userIndex].splice(taskIndex, 1);
            return currState;
        case "move right":
            userIndex = action.payload.userIndex;
            taskIndex = action.payload.taskIndex;
            currState.tasks[userIndex + 1].push(currState.tasks[userIndex][taskIndex]);
            currState.tasks[userIndex].splice(taskIndex, 1);
            return currState;
        default:
            return currState;
    }
}

function Board(){

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect( () => {
        window.localStorage.setItem('tasks', JSON.stringify(state));
    });

    return (
        <div className="board">
            <User name="Tim" dispatch={dispatch} tasks={state.tasks[0]} userColor="green" index={0}></User>
            <User name="John" dispatch={dispatch} tasks={state.tasks[1]} userColor="red" index={1}></User>
            <User name="Jack" dispatch={dispatch} tasks={state.tasks[2]} userColor="pink" index={2}></User>
            <User name="Steph" dispatch={dispatch} tasks={state.tasks[3]} userColor="skyblue" index={3}></User>            
        </div>
    )
}

export default Board