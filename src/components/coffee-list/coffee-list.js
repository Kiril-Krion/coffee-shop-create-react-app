import React from 'react'
import CoffeeListItem from '../coffee-list-item/coffee-list-item';
import './coffee-list.scss';

const CoffeeItems = ({data}) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <CoffeeListItem key={id} {...itemProps}/>
        )
    })

    return (
        <div>
          <div className="container">
              <div className="coffee__items">
                {elements}
              </div>
          </div>
        </div>
    )
}

export default CoffeeItems;