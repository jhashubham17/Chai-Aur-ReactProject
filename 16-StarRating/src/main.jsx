import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import StarRating from './StarRating.jsx'


function Test(){
  const [movieRating, setMovieRating] = useState(0)
  return(
    <div>
      <StarRating  color='blue' maxRating={10} on onSetRating={setMovieRating}/>
      <p> This movie was rated {movieRating} stars</p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StarRating 
    maxRating={5}
    messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
    />
    <StarRating size={29} color="red" className="test" defaultRating={3} />
    <Test/>
  </React.StrictMode>,
)
