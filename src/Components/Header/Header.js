import React, { useEffect, useState } from 'react';
import logo from '../../assets/streeteatz_logo.png';
import bell from '../../assets/bell.png';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = ({ togView, currentUser }) => {
  return (
    <div className="header-container">
      <NavLink to="/" style={{ textDecoration: 'none', color: "#2f2f2f" }}>
        <div className="logo-container">
          <img src={logo} id="spin-hover" className="logo-img" alt="streeteatz-logo" />
          <p className="logo-name">street eatz</p>
        </div>
      </NavLink>
      <div className="toggle-container">
        <NavLink to="/vendor-view" >
          <button id="vendor" className={ `${currentUser === "vendor" ? "selected-btn" : "btn"}`} onClick={(event) => togView(event.target.id)}>vendors</button>
        </NavLink>
        <NavLink to="/">
          <button id="customer" className={ `${currentUser === "customer" ? "selected-btn" : "btn"}`} onClick={(event) => togView(event.target.id)}>customers</button>
        </NavLink>
      </div>
      <div className="notifications-container">
        <img className="notifications-icon" src={bell}></img>
        <button className="notifications-btn">3</button>
      </div>
    </div>
  )
}

export default Header;