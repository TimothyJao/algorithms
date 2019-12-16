import React, {useReducer} from "react"
import User from "./user"

const initialState = {
    cards: [
        ['Tim 1', 'Tim 2'],
        ['John 1', 'John 2'],
        ['Jack 1', 'Jack 2'],
        ['Steph 1', 'Steph 2']
    ]
};

function reducer(state, action){
    
}

function Board(){

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="board">
            <User name="Tim" dispatch={dispatch} cards={state.cards[0]} color="green" index={0}></User>
            <User name="John" dispatch={dispatch} cards={state.cards[1]} color="red" index={1}></User>
            <User name="Jack" dispatch={dispatch} cards={state.cards[2]} color="pink" index={2}></User>
            <User name="Steph" dispatch={dispatch} cards={state.cards[3]} color="skyblue" index={3}></User>            
        </div>
    )
}

export default Board