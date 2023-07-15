import React, { useState } from 'react';
import './Search.css'

const Search = (props) => {
const [query, setQuery] = useState('')
const handleSubmit = (query, event) => {
  event.preventDefault()
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
      <button className="filter-btn" value="openNow" onClick={(event) => props.allSearch(event, event.target.value)}>open now</button>
      <button className="filter-btn" value="favorites" onClick={(event) => props.allSearch(event, event.target.value)}>favorites</button>
      <button className="clear-btn" onClick={(event) => props.reset(event)}>clear</button>
    </div>
  </div>
  )
}

export default Search;