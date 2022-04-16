import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from '../../pages/Home';
import OurCoffee from '../../pages/OurCoffee';
import Pleasure from '../../pages/Pleasure';

import './app.scss';


export default class app extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-coffee" element={<OurCoffee />} />
          <Route path="/pleasure" element={<Pleasure />} />
        </Routes>
      </>
    )
  }
}
