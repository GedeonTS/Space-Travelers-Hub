import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

function Navbar() {
  return (
    <header>
      <div className="title">
        <img className="logo" src="https://cdn-icons-png.flaticon.com/512/3212/3212567.png" alt="logo" />
        <h2>Space Traveler&apos;s Hub</h2>
      </div>
      <nav>
        <NavLink to="/" className="menu-item1">Rockets</NavLink>
        <NavLink to="/missions" className="menu-item2">Missions</NavLink>
        <NavLink to="/myprofile" className="menu-item3">My profile</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
