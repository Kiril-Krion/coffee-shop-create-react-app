import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './footer.scss';
import logo from '../assets/black-logo.svg';
import logoBeans from '../assets/Beans logo.svg';

export default class Footer extends Component {
  render() {
    return (
      <div>
          <footer className="footer__container">
              <div className="container">
                <div className="footer__item">
                    <Link to="/"><img className="logo__img" src={logo} alt="logo"/></Link>
                    <Link to="/our-coffee" className="footer__link">Our coffee</Link>
                    <Link to="/pleasure" className="footer__link">For pleasure</Link>
                </div>
                
                <img className="footer__beans" src={logoBeans} alt="logoBeans" />
              </div>
              
          </footer>
      </div>
    )
  }
}
