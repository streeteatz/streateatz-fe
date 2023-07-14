import React, { useState } from 'react'
import pin from '../../assets/pin.png'
import './Status.css'

const Status = ({ toggle, vendor, getAddress }) => {
  const [location, setLocation] = useState('')

  return (
    <div className="status-container">
      <p className="status-header">welcome back!</p>
      <p className="vendor-name">Vendor Name</p>
      <div className="status-toggle-container">
        <p className="closed">closed</p>
        <div className="toggle-switch">
          <input type="checkbox" className="checkbox" 
            name="live-switch" id="live-switch" onChange={() => toggle(vendor)}/>
          <label className="label" htmlFor={"live-switch"}>
            <span className="inner" />
            <span className="switch" />
          </label>
        </div>
        <p className="open">open</p>
      </div>
      <div className="location-container">
        <img className="status-pin" src={pin}></img>
        <form className="search-bar" onSubmit={e => { e.preventDefault(); }}>
      <input 
        type="text" 
        placeholder='Location' 
        name='statusLocation' 
        id='statusLocation'
        className='status-location'
        value={location}
        onChange={event => setLocation(event.target.value)}
      />
    </form>
      </div>
      <button className="broadcast-btn" onClick={() => getAddress(location, vendor)}>Broadcast Location</button>
    </div>
  )
}

export default Status;