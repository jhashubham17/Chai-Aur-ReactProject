import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function App(){

const [advice, setAdvice] = useState("")
const [count, setCount] = useState(0)

async function getAdvice(){
  const res = await fetch("https://api.adviceslip.com/advice")
  const data = await res.json()
  setAdvice(data.slip.advice)
  setCount((c) => c + 1)

}

useEffect(function(){
  getAdvice()

}, [])

return (
  <>
  <div>
  <h1 className=" font-bold font-mono text-base text-black pl-6">{advice}</h1>
  </div>
  
  <div className=" fixed top-98 left-1/3 mt-5">
  <button on onClick={getAdvice}
  className=" ml-16 hover:bg-red-500">
  Get Advice</button>
  <Message count={count}/>
  </div>
  </>
  
)

}

function Message(props){
  return (
  <p>
    You have read <strong>{props.count} pieces of advice</strong>
  </p>
  )
}

export default App