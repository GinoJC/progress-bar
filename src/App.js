import React, {useState, useEffect} from 'react';
import ProgressBar from './components/ProgressBar';
import './styles/App.css';
let interval = undefined;

const App = () => {
  const [progress, setProgress] = useState(0);
  const [load, setLoad] = useState([]);
  const [running, setRunning] = useState(false);
  const MAX_STEPS = 15;

  useEffect(() => {
    if(running){
      if(progress < MAX_STEPS){
        interval = setInterval(() => {
          setProgress(prev => prev + 1);
        }, 500);
      }
    }else{
      clearInterval(interval);
    }
  }, [running]);

  useEffect(() => {
    setStepsLoading();
    if (progress === MAX_STEPS) {
      setRunning(false);
      clearInterval(interval);
    }
  }, [progress]);

  const setStepsLoading = () => {
    var arrayAux = [];
    for (let i = 0; i < MAX_STEPS; i++) {
      i < progress ? arrayAux.push(true) : arrayAux.push(false);
    }
    setLoad(arrayAux);
  }

  const resetProgress = () => {
    setRunning(false);
    setProgress(0);
  }

  return (
    <div className='app'>
      <h1>Progress Bar</h1>
      <ProgressBar progress={load}/>
      <div>
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={() => resetProgress()}>Reset</button>
      </div>
    </div>
  );
}

export default App;
