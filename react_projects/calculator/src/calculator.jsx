import React, {useState, useEffect} from 'react';

function Calculator(){

    const [value, setValue] = useState(0);
    const [prevValue, setPrevValue] = useState(0);
    const [operator, setOperator] = useState("");

    return(
        <div>
            <div className="row">
                <div className="number"> 1 </div>
                <div className="number"> 2 </div>
                <div className="number"> 3 </div>
            </div>
            <div className="row">
                <div className="number"> 4 </div>
                <div className="number"> 5 </div>
                <div className="number"> 6 </div>
            </div>
            <div className="row">
                <div className="number"> 7 </div>
                <div className="number"> 8 </div>
                <div className="number"> 9 </div>
            </div>
        </div>
    )
}

export default Calculator;