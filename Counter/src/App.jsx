import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

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
    if (counter == -10){
      setCounter(counter);
    }
  }

  return (
    <>
     <h1>Counter</h1>
     <h2>Current value: {counter}</h2>
     <button onClick={addValue}>Add value</button>
     <br />
     <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
