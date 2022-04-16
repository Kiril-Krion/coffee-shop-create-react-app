import React, { Component } from 'react'

import './search-panel.scss';


export default class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
        term: ''
    }
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({term});
    this.props.onUpdateSearch(term)
}




  render() {
    return (
      <div>
          <div className="container">
              <div className="search__content">
                  <label className="simple-text">Looking for</label>

                  <input className="search__input" 
                  type="text" 
                  placeholder="start typing here..."
                  value={this.state.term}
                  onChange={this.onUpdateSearch}/>

                  <label className="second-simple-text">Or filter</label>
                  <button className="btn-filter btn">Brazil</button>
                  <button className="btn-filter btn">Kenya</button>
                  <button className="btn-filter btn">Columbia</button>
              </div>
          </div>
          
      </div>
    )
  }
}
