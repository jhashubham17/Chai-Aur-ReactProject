import React, { useState } from 'react'
import Item from './Item';

const [items, setItems] = useState("");

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



export default PackingList