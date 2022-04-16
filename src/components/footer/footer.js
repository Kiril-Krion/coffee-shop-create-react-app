import React, { Component } from 'react'
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
                    <a href="/"><img className="logo__img" src={logo} alt="logo"/></a>
                    <a className="footer__link" href="/our-coffee">Our coffee</a>
                    <a className="footer__link" href="/pleasure">For your pleasure</a>
                </div>
                
                <img className="footer__beans" src={logoBeans} alt="logoBeans" />
              </div>
              
          </footer>
      </div>
    )
  }
}
