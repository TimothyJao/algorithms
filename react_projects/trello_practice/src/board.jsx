import React, {useState, useEffect} from "react"
import User from "./user"

function Board(props){

    const [users, setUsers] = useState([])

    function addUser(){
        let newUser = window.prompt("Please enter a new user");
        setUsers([...users, <User name={newUser}></User>]);
    }

    let listedUsers = users.map(user => {
        return <li className="user">{user}</li>
    })

    return (
        <>
            <button onClick={addUser}>Add User</button>
            <ul className="userlist">{listedUsers}</ul>
        </>
    )
}

export default Board