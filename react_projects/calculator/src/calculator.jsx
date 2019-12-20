import React, {useState, useEffect} from 'react';

function Calculator(){

    const [value, setValue] = useState("0");
    const [prevValue, setPrevValue] = useState("0");
    const [operator, setOperator] = useState("");

    function changeValue(num){
        if (value.length < 13) {
            value === '0' ? setValue(num) : setValue(value + num)
        }
    }

    function clearValue(num){
        setValue("0")
    }



    return(
        <div>
            <div className="display"> {value} </div>
            <div className="buttons">
                <div className="numbers">
                    <div className="row">
                        <div className="button" onClick={() => changeValue('1')}> 1 </div>
                        <div className="button" onClick={() => changeValue('2')}> 2 </div>
                        <div className="button" onClick={() => changeValue('3')}> 3 </div>
                    </div>
                    <div className="row">
                        <div className="button" onClick={() => changeValue('4')}> 4 </div>
                        <div className="button" onClick={() => changeValue('5')}> 5 </div>
                        <div className="button" onClick={() => changeValue('6')}> 6 </div>
                    </div>
                    <div className="row">
                        <div className="button" onClick={() => changeValue('7')}> 7 </div>
                        <div className="button" onClick={() => changeValue('8')}> 8 </div>
                        <div className="button" onClick={() => changeValue('9')}> 9 </div>
                    </div>
                    <div className="row">
                        <div className="button" onClick={clearValue}> Clear </div>
                        <div className="button" onClick={() => changeValue('0')}> 0 </div>
                        <div className="button" onClick={() => changeValue('1')}> = </div>
                    </div>
                </div>
                <div className="operatoins">
                    <div className="button"> + </div>
                    <div className="button"> - </div>
                    <div className="button"> * </div>
                    <div className="button"> = </div>
                </div>
            </div>
            
        </div>
    )
}

export default Calculator;