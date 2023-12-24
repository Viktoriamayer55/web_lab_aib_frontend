import './App.css';
import React, {useState} from "react"

const App = () => {
  const [click, setClick] = useState (0)
  const Plus = () =>{setClick(click + 1)}; //прибавляет 1, когда клик по кнопка
  const Minus = () => {setClick(click - 1)}; //отнимает 1
  return (
    <div className="App">
      <h1>{click}</h1> 
      <button onClick = {Plus}>+1</button>
      <button onClick = {Minus}>-1</button>
    </div>
  );
}

export default App;
