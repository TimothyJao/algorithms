import React, {useState, useEffect} from 'react';

function Stopwatch(){

  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);

  function resetLap(){
    if(start){

    } else{
      setTime(0);
      setStart(false);
    }
    
  }

  useEffect(() => {
    let timeout;
    if (start) {
      timeout = setTimeout(() => {setTime(currTime => currTime + 1); console.log("test")}, 1000);
    }

    return () => {
      clearTimeout(timeout);
    }
  });

  return(
    <>
      <div>{time}</div>
      <button onClick={() => setStart(currStart => !currStart)}>{start ? "Stop" : "Start"}</button>
      <button onClick={resetLap}>{start ? "Lap" : "Reset"}</button>
    </>
  )
}

export default Stopwatch
