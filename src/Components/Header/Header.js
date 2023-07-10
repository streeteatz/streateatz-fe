import React, { useEffect, useState } from 'react';
import logo from '../../assets/streeteatz_logo.png';
import './Header.css';
import { Routes, Route, NavLink } from 'react-router-dom';

const Header = ({ togView }) => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} id="spin-hover" className="logo-img" alt="streeteatz-logo"/>
        <p className="logo-name">street eatz</p>
      </div>
      <div className="toggle-container">
        <button id="vendor" className="vendor-btn btn" onClick={(event) => togView(event.target.id)}>vendors</button>
        <button id="customer" className="customer-btn selected-btn" onClick={(event) => togView(event.target.id)}>customers</button>
      </div>
    </div>
  )
}

export default Header;