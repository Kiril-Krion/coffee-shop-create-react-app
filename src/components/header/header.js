import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import logo from '../../assets/Logo.svg';

import './header.scss';

export default class Header extends Component {
  render() {
    return (
      <div>
          <header className="header"> 
              <nav className="header__nav">
                <Link to="/"><img src={logo} alt="logo"/></Link>
                <Link to="/our-coffee" className="header__link">Our coffee</Link>
                <Link to="/pleasure" className="header__link">For pleasure</Link>
              </nav>
          </header>
      </div>
    )
  }
}
