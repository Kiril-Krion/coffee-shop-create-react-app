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

// export default class CoffeeItems extends Component {
//   render() {
//     const { country } = props;

//     return (
    //   <div>
    //       <div className="container">
    //           <div className="coffee__items">
    //               <div className="coffee__item">
    //                   <img src={coffeeItem} alt="coffeeItem" />
    //                   <p className="coffee__item-title">AROMISTICO Coffee 1 kg</p>
    //                   <p className="coffee__item-country">Brasil</p>
    //                   <p className="coffee__item-price">6.99$</p>
    //               </div>
    //               <div className="coffee__item">
    //                   <img src={coffeeItem} alt="coffeeItem" />
    //                   <p className="coffee__item-title">AROMISTICO Coffee 1 kg</p>
    //                   <p className="coffee__item-country">Kenya</p>
    //                   <p className="coffee__item-price">6.99$</p>
    //               </div>
    //               <div className="coffee__item">
    //                   <img src={coffeeItem} alt="coffeeItem" />
    //                   <p className="coffee__item-title">AROMISTICO Coffee 1 kg</p>
    //                   <p className="coffee__item-country">Columbia</p>
    //                   <p className="coffee__item-price">6.99$</p>
    //               </div>
    //               <div className="coffee__item">
    //                   <img src={coffeeItem} alt="coffeeItem" />
    //                   <p className="coffee__item-title">AROMISTICO Coffee 1 kg</p>
    //                   <p className="coffee__item-country">Brasil</p>
    //                   <p className="coffee__item-price">6.99$</p>
    //               </div>
    //               <div className="coffee__item">
    //                   <img src={coffeeItem} alt="coffeeItem" />
    //                   <p className="coffee__item-title">AROMISTICO Coffee 1 kg</p>
    //                   <p className="coffee__item-country">Brasil</p>
    //                   <p className="coffee__item-price">6.99$</p>
    //               </div>
    //               <div className="coffee__item">
    //                   <img src={coffeeItem} alt="coffeeItem" />
    //                   <p className="coffee__item-title">AROMISTICO Coffee 1 kg</p>
    //                   <p className="coffee__item-country">Brasil</p>
    //                   <p className="coffee__item-price">6.99$</p>
    //               </div>
    //           </div>
    //       </div>
    //   </div>
//     )
//   }
// }
