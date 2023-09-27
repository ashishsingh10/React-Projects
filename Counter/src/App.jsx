import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  function maxNum(){
    return "you got max";
  }

  const addValue = () => {
  console.log("add val", counter);
  setCounter(counter +1)
  if (counter == 10){
    setCounter(counter);
  }
  }

  const removeValue = () => {
    console.log("Remove val", counter);
    setCounter(counter - 1);
    if (counter == -1){
      setCounter(counter);
    }
  }

  const resetValue = () => {
    setCounter(0);
  }

  return (
    <>
     <h1>Counter</h1>
     <h2>Current value: {counter}</h2>
     <div className="counter-container ">
      <button onClick={addValue}>Add value</button>
      <button onClick={removeValue}>Remove value</button>
     </div>
     <button onClick={resetValue}>Reset</button>
     
    </>
  )
}

export default App
