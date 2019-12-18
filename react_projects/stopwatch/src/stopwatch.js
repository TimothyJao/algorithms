import React, {useState, useEffect} from 'react';

function Stopwatch(){

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);

  function resetLap(){
    if(isRunning){
      const prevTotal = laps.length > 0 ? laps.reduce((acc, curr) => acc + curr, 0) : 0;
      const currentLap = laps.length > 0 ? time - prevTotal : time;
      isRunning && setLaps([...laps, currentLap]);
    } else{
      setTime(0);
      setIsRunning(false);
      setLaps([]);
    }
  }

  useEffect(() => {
    let timeout;
    if (isRunning) {
      timeout = setTimeout(() => {setTime(currTime => currTime + 1);}, 100);
    }

    return () => {
      clearTimeout(timeout);
    };
  });

  return(
    <>
      <div>{time}</div>
      <button onClick={() => setIsRunning(currisRunning => !currisRunning)}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={resetLap}>{isRunning ? "Lap" : "Reset"}</button>
      {laps.map(lap => {
        return <li>{lap}</li>
      })}
    </>
  )
}

export default Stopwatch
