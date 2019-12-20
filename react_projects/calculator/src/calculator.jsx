import React, {useState, useEffect} from 'react';

function Calculator(){

    const [value, setValue] = useState("0");
    const [prevValue, setPrevValue] = useState("0");
    const [operator, setOperator] = useState("");

    function changeValue(num){
        value === '0' ? setValue(num) : setValue(value+num)
    }

    function clearValue(num){
        setValue("0")
    }



    return(
        <div>
            <div className="display"> {value} </div>
            
            <div className="row">
                <div className="number" onClick={() => changeValue('1')}> 1 </div>
                <div className="number" onClick={() => changeValue('2')}> 2 </div>
                <div className="number" onClick={() => changeValue('3')}> 3 </div>
            </div>
            <div className="row">
                <div className="number" onClick={() => changeValue('4')}> 4 </div>
                <div className="number" onClick={() => changeValue('5')}> 5 </div>
                <div className="number" onClick={() => changeValue('6')}> 6 </div>
            </div>
            <div className="row">
                <div className="number" onClick={() => changeValue('7')}> 7 </div>
                <div className="number" onClick={() => changeValue('8')}> 8 </div>
                <div className="number" onClick={() => changeValue('9')}> 9 </div>
            </div>
            <div className="row">
                <div className="number" onClick={clearValue}> Clear </div>
                <div className="number" onClick={() => changeValue('0')}> 0 </div>
                <div className="number" onClick={() => changeValue('1')}> = </div>
            </div>
        </div>
    )
}

export default Calculator;