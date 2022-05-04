import React, { Component } from 'react'
import Header from '../header/header';
import './main-header.scss';

import beansWhiteLogo from '../../assets/Beans-white.svg';


export default class MainHeader extends Component {
  render() {
    return (
      <div className="main-header">
          <Header />
          <div className="header__content">
            <h1 className="header__content-title">Everything You Love About Coffee</h1>
            <img className="header__content-img" src={beansWhiteLogo} alt="beans logo" />
            <h2 className="header__content-sub">We makes every day full of energy and taste</h2>
            <h2 className="header__content-qa">Want to try our beans?</h2>

            <a className="btn" href="#About">More</a>
          </div>
      </div>
    )
  }
}
