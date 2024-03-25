import { useState } from 'react'
function Form({ onAddItems }) {

  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(1)

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { quantity, description, packed: false, id: Date.now() };

    onAddItems(newItem)

    setDescription("");
    setQuantity(1);
  }

  return (
    <form
      className="add-form"
      onSubmit={handleSubmit}>
      <h2>What do you need for your 😍 trip</h2>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({ length: 10 },
          (_, i) => i + 1).map((num) => (
            <option
              value={num} key={num}>
              {num}
            </option>
          ))}
      </select>
      <input
        type='text'
        value={description}
        onChange={(e) => setDescription(e.target.value)} placeholder="item..."></input>
      <button>Add</button>
    </form>
  )
}
export default Form