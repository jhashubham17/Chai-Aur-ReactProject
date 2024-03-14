import React, { useState } from 'react'
import './index.css'
import Logo from './components/Logo'
import Form from './components/Form'
import PackingList from './components/PackingList'
import Stats from './components/Stats'

const [items, setItems] = useState("")

function handleAddItems(item) {
  setItems((items) => [...items, item]);
}

function App() {
  return (
    <>
      <Logo/>
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items}/>
      <Stats/>
    </>
  )
}


export default App
