

import React from 'react';
import Logo from "../assets/images/logo-hei.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="HEI Logo" />
      </div>
      <ul>
        <li><a href="#accueil">ACCUEIL</a></li>
        <li><a href="#actualite">ACTUALITES</a></li>
        <li><a href="#bourse">BOURSE D'ETUDES</a></li>
        <li><a href="#inscription">INSCRIPTION</a></li>
        <li><button className="intranet-btn">INTRANET</button></li>
      </ul>
    </nav>
  );
}