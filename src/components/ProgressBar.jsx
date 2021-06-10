import React from "react";
import '../styles/ProgressBar.css';

const ProgressBar = props => {
  const { progress } = props;

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