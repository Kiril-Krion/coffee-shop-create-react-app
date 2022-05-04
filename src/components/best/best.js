import React, { Component } from 'react'

import './best.scss';
import solimoCoffee from '../../assets/coffee-item-image.png';
import firstItemImage from '../../assets/first-image-item.png';
import secondItemImage from '../../assets/second-image-item.png';

export default class Best extends Component {
  render() {
    return (
      <div>
          <div className="best__container">
              <div className="container">
                <h2 className="best__title">Our best</h2>
                <div className="best__items">
                    <div className="best__item">
                        <img src={firstItemImage} alt="solimoCoffee" />
                        <p className="best__item-title">Solimo Coffee Beans 2 kg</p>
                        <p className="best__price">10.73$</p>
                    </div>
                    <div className="best__item">
                        <img src={secondItemImage} alt="solimoCoffee" />
                        <p className="best__item-title">Solimo Coffee Beans 2 kg</p>
                        <p className="best__price">10.73$</p>
                    </div>
                    <div className="best__item">
                        <img src={solimoCoffee} alt="solimoCoffee" />
                        <p className="best__item-title">Solimo Coffee Beans 2 kg</p>
                        <p className="best__price">10.73$</p>
                    </div>
                </div>
              </div>
              
          </div>
      </div>
    )
  }
}
