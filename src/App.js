import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import './App.css';

function App(props) {
  return (
    <>
      <h1>Counter!</h1>
      <h3>Hour - Minutes - Seconds</h3>
      <p className='time'>
        <FontAwesomeIcon className='icon' icon={faClock} size="lg"/>   
        {(props.hours>=10)?'':'0'}{props.hours} : 
        {(props.mins>=10)?'':'0'}{props.mins} : 
        {(props.segs>=10)?'':'0'}{props.segs}
      </p>
      <div className='btns'>
        <button onClick={(e)=>{props.fnStop(e)}}>{props.runTime?'Stop':'Continue'}</button>
        <button onClick={()=>{props.fnReset()}}>Reset</button>
      </div>
    </>
  );
}

export default App;
