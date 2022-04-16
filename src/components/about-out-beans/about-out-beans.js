import React, { Component } from 'react'

import './about-out-beans.scss'
import firstBeans from '../assets/our-coffee-img.png';
import logoBeans from '../assets/Beans logo.svg'

export default class AboutOutBeans extends Component {
  render() {
    return (
      <div>
          <div className="container">
              <div className="beans__content">
                <img src={firstBeans} alt="firstBeans" />
                <div className="beans__text">
                    <h2 className="beans__title">About our beans</h2>
                    <img src={logoBeans} alt="logoBeans" />
                    <p className="beans__description">
                    Extremity sweetness difficult behaviour he of. On <br /> disposal of as landlord horrible. <br /><br />

                    Afraid at highly months do things on at. Situation <br /> recommend objection do intention <br />
                    so questions.  <br />
                    As greatly removed calling pleased improve an. <br /> Last ask him cold feel <br />
                    met spot shy want. Children me laughing we <br /> prospect answered followed. At it went <br />
                    is song that held help face.
                    </p>
                </div>
              </div>
              <span className="line"></span>
          </div>
          
      </div>
    )
  }
}
