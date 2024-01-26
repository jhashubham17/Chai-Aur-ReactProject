import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0);

  const addValue = () =>{
    setCounter(PrevCounter => PrevCounter + 1)
    setCounter(PrevCounter => PrevCounter + 1)
    setCounter(PrevCounter => PrevCounter + 1)
    setCounter(PrevCounter => PrevCounter + 1)
  }
  
   const removeValue = () =>{
    if(counter > 0){
      counter = counter - 1
      setCounter(counter)
    }
   }

  return (
    <>
      <div>
        <h1>
          Counter App
        </h1>
        <h2 >{counter}</h2>
        <button 
        onClick={addValue} 
        >Add Value</button>
        <button
        onClick={removeValue} >Remove Value</button>
      </div>
      
    </>
  )
}

export default App
