import React, { useState } from 'react'
import './index.css'
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
function Form({ onAddItems }) {

  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1)


  function handleSubmit(e) {
    e.preventDefault()

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem)

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }
  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map
          ((num) => (
            <option value={num} key={num} >
              {num}
            </option>
          ))}
      </select>
      <input
        type='text'
        placeholder='item...'
        value={description}
        onChange={(e) => setDescription(e.target.value)}>
      </input>
      <button>Add</button>
    </form>
  )
}

function PackingList({ items }) {
  return (
    <div className='list'>
      <ul>
        {items.map((item) => (
          <Item 
          item={item} 
          key={item.description} 
          />
        ))}
      </ul>
    </div>
  )
}

function Stats(){
  return(
      <footer className='stats'>
      <em>👜 You have X items on your list, and you already packed X (X%)</em>
      </footer>
  )
}
function Logo(){
  return(
    <>
      <h1>🌴 Far Away 👜</h1>
    </>
  )
}
function Item({ item }) {
  return (
    <li>
      <span>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  )
}


export default App
