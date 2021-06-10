import React, {useState, useEffect} from 'react';
import ProgressBar from './components/ProgressBar';
import './styles/App.css';
var interval;

const App = () => {
  const [progress, setProgress] = useState(0);
  const [load, setLoad] = useState([]);
  const [running, setRunning] = useState(false);
  const MAX_STEPS = 15;

  // Al cambiar el state running:
  // Si es true empieza a correr el setInterval siempre y cuando el progreso no sea igual a los 15 para no pasarse, y cada medio segundo avaza 1 casillero.
  // Si es false finaliza el setInterval.
  useEffect(() => {
    if(running){
      if(progress < MAX_STEPS){
        interval = setInterval(() => {
          setProgress(prev => prev + 1);
        }, 500);
      }else{
        setRunning(false);
      }
    }else{
      clearInterval(interval);
    }
  }, [running]);

  // Al cambiar el state progress:
  // Ejecuta setStepsLoading.
  // Si el progreso es igual a 15, detiene el intervalo.
  useEffect(() => {
    setStepsLoading();
    if (progress === MAX_STEPS) {
      setRunning(false);
    }
  }, [progress]);

  // Esta función se encarga de tomar el progreso y la cantidad maxima de casillas y
  // crear un arreglo para poder renderizar dichas casillas en pantalla con su respectivo avanze.
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
