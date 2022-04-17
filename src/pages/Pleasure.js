import React, { Component } from 'react'
import PleasureHeader from '../components/pleasure-header/pleasure-header';
import AboutOurGoods from '../components/about-our-goods/about-our-goods';
import SimpleItems from '../components/simple-items/simple-items';
import Footer from '../components/footer/footer'

export default class Pleasure extends Component {
  render() {
    return (
      <div>
        <PleasureHeader />
        <AboutOurGoods />
        <SimpleItems />
        <Footer />
      </div>
    )
  }
}
