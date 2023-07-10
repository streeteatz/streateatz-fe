import React, { useEffect, useState } from 'react';
import './Search.css'

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
    <h2 className="search-header">hungry?</h2>
    <form className="search-bar">
      <input 
        type="text" 
        placeholder='Search for Trucks' 
        name='query' 
        id='searchQueryInput'
        className='search-field'
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button className="searchQuerySubmit" id="spin-active" onClick={handleSubmit}>🔎</button>
    </form>
    <div className="filter-btn-container">
      <button className="filter-btn">closest</button>
      <button className="filter-btn">open now</button>
      <button className="filter-btn">favorites</button>
      <button className="filter-btn">type </button>
    </div>
  </div>
  )
}

export default Search;