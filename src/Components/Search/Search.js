import React, { useEffect, useState } from 'react';
import './Search.css'

const Search = (props) => {
const [query, setQuery] = useState('')
const handleSubmit = (query, event) => {
  event.preventDefault()
  // we want upon click of the submit button to take whatever was in the search bar
  // this will be signified as query
  //so 
  props.search(query)
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
      <button className="searchQuerySubmit" id="spin-active" onClick={(event) => handleSubmit(query, event)}>🔎</button>
    </form>
    <div className="filter-btn-container">
      {/* eventually I want to change the styling of the filter buttons on click. The easiest way to do that will be to add  setStyle(".selected-filter.btn") to the onClick function we set up for filtering  */}
      <button className="filter-btn">closest</button>
      <button className="filter-btn">open now</button>
      <button className="filter-btn">favorites</button>
      <button className="filter-btn">type </button>
      <button className="clear-btn" onClick={(event) => props.reset(event)}>clear</button>
    </div>
  </div>
  )
}

export default Search;