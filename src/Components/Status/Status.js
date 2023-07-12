import React, { useEffect, useState } from 'react'
import './Status.css'

const Status = () => {
  return(
    <div className="status-container">
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" 
          name="live-switch" id="live-switch"/>
        <label className="label" htmlFor={"live-switch"}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  )
}

export default Status;