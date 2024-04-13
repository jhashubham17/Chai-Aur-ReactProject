import { useState } from "react"

function NavBar({movies}) {
    return (
      <div className='nav-bar'>
        <Logo />
        <Search />
        <NumResults movies={movies} />
      </div>
    )
  }
  
  function Logo() {
    return (
      <div className='logo'>
        <span role='img'>🍿</span>
        <h1>usePopcorn</h1>
      </div>
    )
  }
  
  function Search() {
  
    const [query, setQuery] = useState("")
  
    return (
      <input
        className='search'
        type='text'
        placeholder='Search movies...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}>
      </input>
    )
  }
  
  function NumResults({movies}) {
    return (
      <p className='num-results'>
      found <strong>{movies.length}</strong> results
      </p>
    )
  }

  export default NavBar