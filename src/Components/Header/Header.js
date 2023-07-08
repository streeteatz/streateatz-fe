import React, { useEffect, useState } from 'react';
import logo from '../../assets/streeteatz_logo.png';
import './Header.css';

const Header = ({ togView }) => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} className="logo" alt="map pin logo"/>
        <p>StreetEatz</p>
      </div>
      <div className="toggle-container">
        <button id="vendor" className="vendor-btn" onClick={(event) => togView(event.target.id)}>Vendor</button>
        <button id="customer" className="customer-btn" onClick={(event) => togView(event.target.id)}>Customer</button>
      </div>
    </div>
  )
}

export default Header;