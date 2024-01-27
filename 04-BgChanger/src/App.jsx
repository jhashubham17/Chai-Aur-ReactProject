import React from 'react';
import { useState } from 'react';

function App (){
  const [color, setColor] = useState("red")


  return (
<div className='w-screen h-screen duration-300' 
style={{backgroundColor: color}}>
  <div className=' fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0'>
<div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
  <button className='bg-red-500 rounded-full focus:outline-none'
  onClick={()=> setColor("red")}>Red</button>
  <button className='bg-black rounded-full focus:outline-none'
   onClick={()=> setColor("black")}>BlacK</button>
  <button className='bg-green-500 rounded-full focus:outline-none'
  onClick={()=> setColor("green")}>Green</button>
  <button className='bg-yellow-500 rounded-full focus:outline-none'
  onClick={()=> setColor("yellow")}>Yellow</button>
  <button className=' bg-gray-500 rounded-full focus:outline-none'
  onClick={()=> setColor("gray")}>Gray</button>
  <button className=' bg-lime-500 rounded-full focus:outline-none'
  onClick={()=> setColor("lime")}>lime</button>
  <button className='  bg-orange-700 rounded-full focus:outline-none'
  onClick={()=> setColor("orange")}>Orange</button>
  <button className=' bg-teal-600 rounded-full focus:outline-none'
  onClick={()=> setColor("teal")}>Teal</button>
  <button className=' bg-blue-300 rounded-full focus:outline-none'
  onClick={()=> setColor("blue")}>Blue</button>
  <button className=' bg-indigo-800 rounded-full focus:outline-none'
  onClick={()=> setColor("indigo")}>Indigo</button>
</div>
  </div>
</div>
  
    )
}



export default App;