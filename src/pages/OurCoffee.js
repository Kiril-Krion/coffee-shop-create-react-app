import React, { Component } from 'react';
import MiniHeader from '../components/mini-header/miniHeader';
import AboutOutBeans from '../components/about-out-beans/about-out-beans';
import SearchPanel from '../components/seach-panel/search-panel';
import CoffeeItems from '../components/coffee-list/coffee-list';
import Footer from '../components/footer/footer';

export default class OurCoffee extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [
            {country: 'Brasil' },
            {country: 'Kenya' },
            {country: 'Columbia' },
            {country: 'Brasil' },
            {country: 'Brasil' },
            {country: 'Brasil' },
        ],
        term: '', 
    }
}

  searchEmp = (items, term) => {
    if (term.length === 0) {
        return items;
    }

    return items.filter(item => {
        return item.country.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term) => {
    this.setState({term});
  }


  render() {
    const { data, term } = this.state;
    const visibleData = this.searchEmp(data, term);

    return (
      <>
        <MiniHeader />
        <AboutOutBeans />
        <SearchPanel onUpdateSearch={this.onUpdateSearch} />
        <CoffeeItems data={visibleData}/>
        <Footer />
      </>
    )
  }
}
