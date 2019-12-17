import React, {useState, useEffect} from 'react';

function Stopwatch(){

  const [time, setTime] = useState(0);
  const [shouldStart, setShouldStart] = useState(false);

  let timeout;

  useEffect( () => {

  })

  function startStop(){
    if(!shouldStart){
      timeout = setTimeout(() => { setTime(time + 1); }, 1000);
      setShouldStart(true);
    } else{
      clearTimeout(timeout);
      setShouldStart(false);
    }  
  }

  function reset(){
    clearTimeout(timeout);
    setTime(0);
    setShouldStart(false);
  }

  useEffect(() => {
    if (shouldStart) {
      timeout = setTimeout(() => { setTime(time + 1) }, 1000);
    }

    return () => {return clearTimeout(timeout);};
  });

  return(
    <>
      <div>{time}</div>
      <button onClick={startStop}>{shouldStart ? "Stop" : "Start"}</button>
      <button onClick={reset}>{"Reset"}</button>
    </>
  )
}

export default Stopwatch
