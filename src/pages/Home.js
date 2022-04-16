import React, { Component } from 'react';
import MainHeader from '../components/main-header/main-header';
import About from '../components/about/about';
import Best from '../components/best/best';
import Footer from '../components/footer/footer';

export default class Home extends Component {
  render() {
    return (
      <div>
        <MainHeader />
        <About />
        <Best />
        <Footer />
      </div>
    )
  }
}
