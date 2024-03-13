import React from 'react'

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Charger", quantity: 1, packed: false },
]

function PackingList() {
  return (
    <div className='list'>
      <ul>
        {initialItems.map((item) => (
          <Item item={item}  key={item.description}/>
        ))}
      </ul>
    </div>
  )
}
function Item({ item }) {
  return (
    <li>
      <span>
        {item.description} {item.quantity}
      </span>
    </li>
  )
}


export default PackingList