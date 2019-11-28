import React, {useState, useEffect} from "react"
import User from "./user"

function Board(props){

    const [users, setUsers] = useState([])

    function addUser(){
        let newUser = window.prompt("Please enter a new user");
        if (newUser) {
            setUsers([...users, <User name={newUser} index={users.length} getLength={getLength}></User>]);
        }
    }

    let listedUsers = users.map(user => {
        return <li className="user">{user}</li>
    })

    function getLength(){
        console.log(users)
        return users.length;
    }

    return (
        <>
            <button onClick={addUser}>Add User</button>
            <ul className="userlist">{listedUsers}</ul>
        </>
    )
}

export default Board