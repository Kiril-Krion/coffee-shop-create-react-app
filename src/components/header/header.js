import React, { Component } from 'react'

import logo from '../assets/Logo.svg';

import './header.scss';

export default class Header extends Component {
  render() {
    return (
      <div>
          <header className="header">
              <nav className="header__nav">
                <a href="/"><img src={logo} alt="logo"/></a>
                <a className="header__link" href="/our-coffee">Our coffee</a>
                <a className="header__link" href="/pleasure">For your pleasure</a>
              </nav>
          </header>
      </div>
    )
  }
}
