import React from "react";
import '../styles/ProgressBar.css';

const ProgressBar = props => {
  const { progress } = props;

  // Obtengo el arreglo de casilleros y los renderizo con un map, donde si el valor es true lo pinto de verde, sino lo pinto de blanco.
  return (
    <div className='containerStyle'>
      <div className='barStyle'>
        {progress.map((value, index) => 
          <div key={index}>
            {value ? <div className='loadStyle'> </div> : <div className='unloadStyle'> </div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;