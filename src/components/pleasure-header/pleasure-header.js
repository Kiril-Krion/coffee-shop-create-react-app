import React, { Component } from 'react'
import Header from '../header/header'

import './pleasure-header.scss';

export default class PleasureHeader extends Component {
  render() {
    return (
      <div>
          <div className="header__container">
            <Header />
            <h1 className="header__title">For your pleasure</h1>
          </div>
      </div>
    )
  }
}
