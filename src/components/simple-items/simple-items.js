import React, { Component } from 'react';

import coffeeItem from '../../assets/coffee-item-image.png';
import './simple-items.scss';

export default class SimpleItems extends Component {
  render() {
    return (
      <div>
          <div className="container">
              <div className="coffee__items">
                  <div className="coffee__item">
                      <img src={coffeeItem} alt="coffeeItem" />
                      <p className="coffee__item-title">AROMISTICO Coffee 1 kg</p>
                      <p className="coffee__item-country">Brasil</p>
                      <p className="coffee__item-price">6.99$</p>
                  </div>
                  <div className="coffee__item">
                      <img src={coffeeItem} alt="coffeeItem" />
                      <p className="coffee__item-title">AROMISTICO Coffee 1 kg</p>
                      <p className="coffee__item-country">Kenya</p>
                      <p className="coffee__item-price">6.99$</p>
                  </div>
                  <div className="coffee__item">
                      <img src={coffeeItem} alt="coffeeItem" />
                      <p className="coffee__item-title">AROMISTICO Coffee 1 kg</p>
                      <p className="coffee__item-country">Columbia</p>
                      <p className="coffee__item-price">6.99$</p>
                  </div>
                  <div className="coffee__item">
                      <img src={coffeeItem} alt="coffeeItem" />
                      <p className="coffee__item-title">AROMISTICO Coffee 1 kg</p>
                      <p className="coffee__item-country">Brasil</p>
                      <p className="coffee__item-price">6.99$</p>
                  </div>
                  <div className="coffee__item">
                      <img src={coffeeItem} alt="coffeeItem" />
                      <p className="coffee__item-title">AROMISTICO Coffee 1 kg</p>
                      <p className="coffee__item-country">Brasil</p>
                      <p className="coffee__item-price">6.99$</p>
                  </div>
                  <div className="coffee__item">
                      <img src={coffeeItem} alt="coffeeItem" />
                      <p className="coffee__item-title">AROMISTICO Coffee 1 kg</p>
                      <p className="coffee__item-country">Brasil</p>
                      <p className="coffee__item-price">6.99$</p>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
