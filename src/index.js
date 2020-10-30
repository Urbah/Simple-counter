import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let segs = 0;
let mins = 0;
let hours = 0;
let runTime = true;
function tick() {
  segs++
  function reset(){
    segs = -1;
    mins = 0;
    hours = 0;
    tick()
 }
    if(segs===60){
      segs=0;
      mins++
      if(mins===60){
        mins=0;
        hours++;
      }
    }
  function stop(e){
    if(runTime){
      runTime=false;
      clearInterval(myTime)
      segs-=1
      tick()
    }
    else{
      runTime=true;
      myTime = setInterval(tick, 1000)
      tick()
    }
  }
  
  const element = (
    <div className='container'>
      <App 
      runTime={runTime}
      segs={segs} mins={mins} hours={hours} 
      fnReset={reset} fnStop={stop}
      ></App>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

let myTime = setInterval(tick, 1000);