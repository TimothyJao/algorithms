import React, {useState, useEffect} from "react"
import User from "./user"

function Board(props){

    const [users, setUsers] = useState([<User name="Tim" index={0}></User>, <User name="John" index={1}></User>, <User name="Jack" index={2}></User>, <User name="Steph" index={3}></User>])

    // useEffect(() => {
    //     let oldData = localStorage.getItem('Users');
    //     debugger
    //     if(oldData){
    //         console.log(JSON.parse(oldData))
    //     }
    // }, [])

    // useEffect(()=>{
    //     localStorage.setItem('Users', users);
    // })

    // function addUser(){
    //     let newUser = window.prompt("Please enter a new user");
    //     if (newUser) {
    //         setUsers([...users, <User name={newUser} index={users.length}></User>]);
    //     }
    // }

    let listedUsers = users.map(user => {
        return <li className="user">{user}</li>
    })

    return (
        <>
            <ul className="userlist">{listedUsers}</ul>
        </>
    )
}

export default Board