import { useState } from 'react'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyinfo.js'
import InputBox from './components/InputBox'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl bg-blue-500">Currency Convertor</h1>
      <useCurrencyInfo />
      <InputBox />
    </>
  )
}

export default App
