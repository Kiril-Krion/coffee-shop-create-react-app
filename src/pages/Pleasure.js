import React, { Component } from 'react'
import AboutOutBeans from '../components/about-out-beans/about-out-beans'
import CoffeeItems from '../components/coffee-list/coffee-list'
import Footer from '../components/footer/footer'
import MiniHeader from '../components/mini-header/miniHeader'

export default class Pleasure extends Component {
  render() {
    return (
      <div>
        <MiniHeader />
        <AboutOutBeans />
        <CoffeeItems />
        <Footer />
      </div>
    )
  }
}
