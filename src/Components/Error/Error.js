import React from 'react';
import './Error.css';
import { NavLink } from 'react-router-dom';

const Error = ({ message }) => {
  if (message === "url") {
    return(
      <div className='error-url-container'>
        <p className='error-url'>You have reached a bad link. Check the URL and try again, or head back to the home page!</p>
        <NavLink to="/"><button className='home-button'>home</button></NavLink>
      </div>
    )
  } if (message === "fetch") {
    return (
      <div className='error-fetch-container'>
        <p className='error-fetch'>Oops, something has gone wrong on our end, try again!</p>
        <NavLink to="/"><button className='home-button'>refresh</button></NavLink>
      </div>
    )
  } if (message === "search") {
    return(
      <p className='search-error'>No results for that search, try again!</p>
    )
  }
}

export default Error;