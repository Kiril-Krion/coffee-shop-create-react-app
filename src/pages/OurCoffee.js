import React, { Component } from 'react';
import MiniHeader from '../components/mini-header/miniHeader';
import AboutOutBeans from '../components/about-out-beans/about-out-beans';
import SearchPanel from '../components/seach-panel/search-panel';
import CoffeeItems from '../components/coffee-list/coffee-list';
import Footer from '../components/footer/footer';
import CoffeeFilter from '../components/coffee-filter/coffee-filter';

export default class OurCoffee extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [
            {country: 'Brasil', riseBrasil: true },
            {country: 'Kenya', riseKenya: true },
            {country: 'Columbia', riseColumbia: true },
            {country: 'Brasil', riseBrasil: true },
            {country: 'Brasil', riseBrasil: true },
            {country: 'Kenya', riseKenya: true } 
        ],
        term: '',
        filter: ''
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

  filterPost = (items, filter) => {
    switch (filter) {
        case 'brasil':
            return items.filter(item => item.riseBrasil);
        case 'kenya':
            return items.filter(item => item.riseKenya);
        case 'columbia':
            return items.filter(item => item.riseColumbia);
        default:
            return items
    }
  }

  onFilterSelect = (filter) => {
      this.setState({filter});
  }


  render() {
    const { data, term, filter } = this.state;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <>
        <MiniHeader />
        <AboutOutBeans /> 
          <div className="search-panel">
            <SearchPanel onUpdateSearch={this.onUpdateSearch}/>   
            <CoffeeFilter filter={filter} onFilterSelect={this.onFilterSelect} />
          </div>
        
        <CoffeeItems data={visibleData} />
        <Footer />
      </>
    )
  }
}
