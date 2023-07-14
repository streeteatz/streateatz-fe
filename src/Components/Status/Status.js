import React, { useEffect, useState } from 'react'
import pin from '../../assets/pin.png'
import './Status.css'

const Status = ({ toggle, vendor, getAddress }) => {
  const [location, setLocation] = useState('')

  const saveStatus = () => {
    if (vendor.status) {
      sessionStorage.setItem('SEvendorStatus', JSON.stringify(false))
    } else {
      sessionStorage.setItem('SEvendorStatus', JSON.stringify(true))
    }
  }

  const checked = JSON.parse(sessionStorage.getItem('SEvendorStatus')) || false

  return (
    <div className="status-container">
      <p className="status-header">welcome back!</p>
      <p className="vendor-name">Vendor Name</p>
      <div className="status-toggle-container">
        <p className="closed">closed</p>
        <div className="toggle-switch">
          <input type="checkbox" checked={checked} className="checkbox" 
            name="live-switch" id="live-switch" onChange={() => {
              toggle(vendor)
              // saveStatus()
            }}/>
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
      <button className="broadcast-btn" onClick={(event) => {
        event.preventDefault()
        getAddress(location, vendor)
        console.log(vendor)
      }}>Broadcast Location</button>
    </div>
  )
}

export default Status;