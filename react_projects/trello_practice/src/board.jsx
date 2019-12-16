import React, {useReducer} from "react"
import User from "./user"

const initialState = {
    tasks: [
        ['Tim 1', 'Tim 2'],
        ['John 1', 'John 2'],
        ['Jack 1', 'Jack 2'],
        ['Steph 1', 'Steph 2']
    ]
};

function reducer(state, action){
    const currState = Object.assign({}, state);
    // debugger
    switch(action.type){
        case "add":
            currState.tasks[action.payload.index].push(action.payload.task);
            return currState;
        default:
            return currState;
    }
}

function Board(){

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="board">
            <User name="Tim" dispatch={dispatch} tasks={state.tasks[0]} color="green" index={0}></User>
            <User name="John" dispatch={dispatch} tasks={state.tasks[1]} color="red" index={1}></User>
            <User name="Jack" dispatch={dispatch} tasks={state.tasks[2]} color="pink" index={2}></User>
            <User name="Steph" dispatch={dispatch} tasks={state.tasks[3]} color="skyblue" index={3}></User>            
        </div>
    )
}

export default Board