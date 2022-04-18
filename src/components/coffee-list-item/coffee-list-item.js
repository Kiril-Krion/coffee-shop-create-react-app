import { Link } from 'react-router-dom';
import coffeeItem from '../assets/coffee-item-image.png';

import '../coffee-list/coffee-list.scss';

const CoffeeListItem = (props) => {
    const { country } = props;

    return (
        <Link to="/about-coffee" className="about-coffee-link">
            <div className="coffee__item">
                <img src={coffeeItem} alt="coffeeItem" />
                <p className="coffee__item-title">AROMISTICO Coffee 1 kg</p>
                <p className="coffee__item-country">{country}</p>
                <p className="coffee__item-price">6.99$</p>
            </div>
        </Link>
        
    )
}
export default CoffeeListItem;