import React, { Component } from 'react'
import AboutCoffeeItem from '../components/about-coffee/about-coffee';
import MiniHeader from '../components/mini-header/miniHeader';
import Footer from '../components/footer/footer';

export default class AboutCoffee extends Component {
    render() {
        return (
            <>
                <MiniHeader />
                <AboutCoffeeItem />
                <Footer />
            </>
        )
    }
}
