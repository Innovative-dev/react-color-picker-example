import React, { useState, useEffect, useRef } from "react";
import './App.scss';
import { SketchPicker } from "react-color";
function App() {
  const [activeColor, setActiveColor] = useState();
  const [colorPickerShow, setColorPickerShow] = useState(false);
  const handleChangeComplete = (color) => {
    setActiveColor(color?.hex);
  };

  return (
    <div className="App" 
    style={{backgroundColor: activeColor}}
    >
       <h1>Welcome to Colmore </h1>
       <div className="picker-wrapper">
       <button className="btn" onClick={() => setColorPickerShow(!colorPickerShow)}>
       {colorPickerShow  ? 'Hide color picker' : 'Change Background color' }
       </button>
       {colorPickerShow  ? 
      <SketchPicker
        color={activeColor}
        onChangeComplete={handleChangeComplete}
      /> : ''}
    </div>
    </div>
  );
}

export default App;
