import React, {useState, useEffect, useReducer} from "react"
import User from "./user"

const initialState = {
    cards: [
        ['Tim 1', 'Tim 2'],
        ['John 1', 'John 2'],
        ['Jack 1', 'Jack 2'],
        ['Steph 1', 'Steph 2']
    ]
}

function reducer(state, action){

}

function Board(){

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <User name="Tim" dispatch={dispatch} cards={state.cards[0]} color="green"></User>
            <User name="John" dispatch={dispatch} cards={state.cards[0]} color="red"></User>
            <User name="Jack" dispatch={dispatch} cards={state.cards[0]} color="pink"></User>
            <User name="Steph" dispatch={dispatch} cards={state.cards[0]} color="skyblue"></User>            
        </>
    )
}

export default Board