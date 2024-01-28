import React, { useCallback, useEffect, useRef, useState } from 'react';
import './App.css'

function App() {

  const [length, setlength] = useState(4)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook

  const passwordRef = useRef(null)
  const passwordGenerator = useCallback (() => {
    let pass = ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!`~@#$%^&_-<>,.?;:|"

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random()* str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  

  return (
    <>
      <div className=' bg-slate-400 w-96 h-96 rounded-md '>
        <div>
          <h1 className=' text-red-700 text-4xl font-bold pt-4 tracking-wide shadow-2xl'>Password Generator</h1>
          
          {/* input box */}
          <input 
          type='text' 
          readOnly 
          value={password} 
          placeholder='Password' 
          className=' h-12 w-64 mt-5 rounded-l-lg bg-white shadow-2xl text-black pl-4 font-semibold border-none outline-none tracking-wider'></input>
          
          {/* copy button */}
          <button 
          onClick={copyPasswordToClipboard} 
          className='h-12 rounded-l-sm border-none focus:outline-none tracking-wider bg-red-600 hover:bg-red-500'>Copy</button>
          <p className='text-black tracking-wider font-bold mt-4 absolute ml-5 text-lg'>Password Most Be Contains:</p>
        
        </div>
        <div className=' flex flex-col mt-16 justify-center items-start ml-4 font-semibold'>

          {/* Range */}

          <div className='flex justify-center items-center'>
            <input 
            type='range' 
            min={4} 
            max={12} 
            value={length} 
            onChange={(e) => { setlength(e.target.value) }} 

            className=' cursor-pointer' ></input>
            <label className='ml-3'>Length: {length}</label>
          </div>

          {/* Number */}

          <div className='flex justify-center items-center'>
            <input 
            type='checkbox' 
            defaultChecked={numberAllowed} 
            id='numberAllowed' onChange={() => {
              setNumberAllowed((prev) => !prev);

            }}></input>
            <lebel htmlFor="numberAllowed" className='ml-3'>Number </lebel>
          </div>

          {/*  character */}

          <div className='flex justify-center items-center'>
            <input 
            type='checkbox' 
            defaultChecked={charAllowed} 
            id='charAllowed' onChange={() => {
              setCharAllowed((prev) => !prev);
            }}></input>
            <lebel htmlFor="charAllowed" className='ml-3'>
              Character</lebel>
          </div>

        </div>
      </div>

    </>

  )


}



export default App;