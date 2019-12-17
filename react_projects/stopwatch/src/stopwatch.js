import React, {useState, useEffect} from 'react';

function Stopwatch(){

  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  let timeout;

  function startStop(){
    if(!start){
      timeout = setTimeout(() => { setTime(time + 1); }, 100);
      setStart(true);
    } else{
      clearTimeout(timeout);
      setStart(false);
    }  
  }

  function reset(){
    clearTimeout(timeout);
    setTime(0);
    setStart(false);
  }

  useEffect(() => {
    if (start) {
      timeout = setTimeout(() => {setTime( currTime => currTime + 1)}, 100);
    }

    return () => clearTimeout(timeout);
  });

  return(
    <>
      <div>{time}</div>
      <button onClick={startStop}>{start ? "Stop" : "Start"}</button>
      <button onClick={reset}>{"Reset"}</button>
    </>
  )
}

export default Stopwatch
