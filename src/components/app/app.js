import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../../pages/Home';
import OurCoffee from '../../pages/OurCoffee';
import AboutCoffee from '../../pages/AboutCoffee';
import Pleasure from '../../pages/Pleasure';

import './app.scss';


export default class app extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-coffee" element={<OurCoffee />} />
          <Route path="/about-coffee" element={<AboutCoffee />} />
          <Route path="/pleasure" element={<Pleasure />} />
        </Routes>
      </>
    )
  }
}
