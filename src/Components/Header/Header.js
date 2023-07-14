import React, { useEffect, useState } from 'react';
import logo from '../../assets/streeteatz_logo.png';
import bell from '../../assets/bell.png';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = ({ togView, currentUser, notifs }) => {
  const [showNotifs, setShowNotifs] = useState(false)
  const [selectedUser, setSelectedUser] = useState('')

  const seeNotifs = (event) => {
    event.preventDefault()
    if (!showNotifs)  {
      setShowNotifs(true)
    } else {
      setShowNotifs(false)
    }
  }

  const setSelectedBtn = (target) => {
      setSelectedUser(target.id)
      sessionStorage.setItem('SEuserBtnStatus', JSON.stringify(target.id))
  }
  
  const selUser = JSON.parse(sessionStorage.getItem('SEuserBtnStatus')) || 'customer'

  const notification = () => {
    console.log('peter')
    if (notifs.length) {
      console.log('youre doing it peter')
      return `${notifs[0].vendorName} has gone live`
    } else {
      return ''
    }
  }

  return (
    <div className="header-container">
      <div className="dropdown">
          <p className={`${showNotifs === false ? "dropdown-hide" : "dropdown-show"}`}>{notification()}</p>
      </div>
      <NavLink to="/" style={{ textDecoration: 'none', color: "#2f2f2f" }}>
        <div className="left-container">
          <img src={logo} id="spin-hover" className="logo-img" alt="streeteatz-logo" />
          <p className="logo-name">street eatz</p>
        </div>
      </NavLink>
      <div className="right-container">
        <div className="toggle-container">
          <NavLink to="/vendor-view" >
          {/* these lines are where the vendor or user state is being declared */}
            <button id="vendor" className={`${selUser === "vendor" ? "selected-btn" : "btn"}`} onClick={(event) => {
              togView(event.target.id)
              setSelectedBtn(event.target)
            }}>vendors</button>
          </NavLink>
          <NavLink to="/">
            <button id="customer" className={`${selUser === "customer" ? "selected-btn" : "btn"}`} onClick={(event) => {
              togView(event.target.id)
              setSelectedBtn(event.target)
            }}>customers</button>
          </NavLink>
        </div>
        <div className="notifications-container">
          <img className="notifications-icon" onClick={(event) => seeNotifs(event)}src={bell}></img>
          {/* lets checkout the seeNotifs function */}
          <button className="notifications-btn">{notifs.length}</button>
          {/* conditional rendering for className here and for the number inside of button */}
        </div>
      </div>
    </div>
  )
}

export default Header;
