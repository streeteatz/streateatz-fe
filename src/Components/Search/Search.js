import React, { useEffect, useState } from 'react';

const Search = ({vendors, searchResults}) => {
const [query, setQuery] = useState('')
  
const handleSubmit = () => {
  // we want upon click of the submit button to take whatever was in the search bar
  // this will be signified as query
  //so 
  searchResults(query)
  clearInputs()
}
const clearInputs = () => {
  setQuery('')
}
return(
  <div className="search-container">
    <h2>hungry?</h2>
    <form>
      <input 
        type="text" 
        placeholder='Search for Trucks' 
        name='query' 
        className='search-field'
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button className="search-button" onClick={handleSubmit}>Find me Food</button>
    </form>
  </div>
  )
}

export default Search;