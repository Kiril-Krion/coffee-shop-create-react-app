import React, { Component } from 'react'

import beansLogo from '../assets/Beans logo.svg'

import './about.scss';

export default class About extends Component {
  render() {
    return (
      <div>
          <div className="container">
            <div className="about">
                <h2 className="about__title">About</h2>
                <img src={beansLogo} alt="beans logo" />
                <p className="about__sub">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br />
                    Afraid at highly months do things on at. Situation recommend objection do intention <br />
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel <br />
                    met spot shy want. Children me laughing we prospect answered followed. At it went <br />
                    is song that held help face.</p>
                <p className="about__sub">
                    Now residence dashwoods she excellent you. Shade being under his bed her, Much <br />
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant <br />
                    horrible but confined day end marriage. Eagerness furniture set preserved far <br />
                    recommend. Did even but nor are most gave hope. Secure active living depend son <br />
                    repair day ladies now.
                </p>
            </div>
          </div>
          
      </div>
    )
  }
}
