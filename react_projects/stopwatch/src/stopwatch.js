import React, {useState, useEffect} from 'react';

function Stopwatch(){

  const [time, setTime] = useState(0);
  const [shouldStart, setShouldStart] = useState(false);

  let timeout;

  useEffect( () => {

  })

  function start(){
    timeout = setTimeout(()=>{setTime(time+1);}, 1000);
    setShouldStart(true);
  }

  useEffect(() => {
    if (shouldStart) {
      timeout = setTimeout(() => { setTime(time + 1) }, 1000);
    }
  });

  return(
    <>
      <div>{time}</div>
      <button onClick={start}>{shouldStart ? "Stop" : "Start"}</button>
    </>
  )
}

export default Stopwatch
