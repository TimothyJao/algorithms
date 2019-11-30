import React, {useState, useEffect} from "react"
import User from "./user"

function Board(props){

    const [users, setUsers] = useState([<User name="Tim" index={0} color="blue"></User>, 
                                        <User name="John" index={1} color="green"></User>, 
                                        <User name="Jack" index={2} color="pink"></User>, 
                                        <User name="Steph" index={3} color = "red"></User>])

    let listedUsers = users.map((user, index) => {
        return <li className="user" key={index}>{user}</li>
    })

    function shiftRight(index, task){
        
    }

    return (
        <>
            <ul className="userlist">{listedUsers}</ul>
        </>
    )
}

export default Board