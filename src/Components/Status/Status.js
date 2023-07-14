import React, { useEffect, useState } from 'react'
import pin from '../../assets/pin.png'
import './Status.css'

const Status = ({ toggle, vendor, getAddress }) => {
  const [location, setLocation] = useState('')

  // We need to pass the location to the other users
  // make a function in app.js that will handle the logic
  // pass that function in here and add it to the callback function

  return(
    <div className="status-container">
      <p className="status-header">welcome back!</p>
      <p className="vendor-name">Vendor Name</p>
      <div className="status-toggle-container">
        <p className="closed">closed</p>
        <div className="toggle-switch">
          <input type="checkbox" className="checkbox" 
            name="live-switch" id="live-switch" onClick={() => toggle(vendor)}/>
          <label className="label" htmlFor={"live-switch"}>
            <span className="inner" />
            <span className="switch" />
          </label>
        </div>
        <p className="open">open</p>
      </div>
      <div className="location-container">
        <img className="status-pin" src={pin}></img>
        <form className="search-bar">
      <input 
        type="text" 
        placeholder='Location' 
        name='statusLocation' 
        id='statusLocation'
        className='status-location'
        value={location}
        onChange={event => setLocation(event.target.value)}
      />
      <button className="broadcast-btn clear-btn" onClick={() => getAddress(location)}>Broadcast Location</button>
    </form>
      </div>
    </div>
  )
}

export default Status;