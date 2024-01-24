import React from 'react'
import { useState } from 'react'
import './App.css'

function App() {
  
 let [counter, setCounter] = useState(0)

  const addValue = () => {
    counter = counter + 1
    setCounter(counter)
    
  }
  
  const removeValue = () => {
    if(counter>0){
      counter = counter - 1
      setCounter(counter)
    }
    
  }
  return (
    <>
<h1 className=' font-extrabold text-5xl text-red-600'>Counter App</h1>

<div className='  h-36 w-36  flex justify-center items-center bg-amber-50  text-black text-7xl mt-6 relative left-20 font-bold '>
<p>{counter}</p>
</div>

<button className=' text-black mt-5 mr-5 bg-green-500 hover:bg-black hover:text-slate-200'
onClick={addValue}
>Add Value</button>

<button className='bg-red-500  text-black hover:bg-black hover:text-slate-200'
onClick={removeValue}
>Remove Value</button>

    </>
      )
}

export default App
