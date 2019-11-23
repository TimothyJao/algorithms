import React, {useState, useEffect} from "react";

function Task(props){
    return(
        <div className="task">   
            <p> {"<"} </p>
            {props.name}
            <p> {">"} </p>
        </div>
    )
}

export default Task