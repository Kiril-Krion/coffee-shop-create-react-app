import React, { Component } from 'react'
import Header from '../header/header'

import './mini-header.scss';

export default class MiniHeader extends Component {
  render() {
    return (
      <div>
          <div className="header__container">
            <Header />
            <h1 className="header__title">Our Coffee</h1>
          </div>
      </div>
    )
  }
}
