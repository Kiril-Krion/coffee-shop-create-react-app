import coffeeItem from '../assets/our-coffee-item-image.jpg';
import logoBeans from '../assets/Beans logo.svg'

import './about-coffee.scss';

const AboutCoffeeItem = () => {
    return (
        <div className="container">
            <div className="about__coffee-items">
                <img src={coffeeItem} alt="coffeeItem" />
                <div className="about__coffee-text">
                    <h2 className="about__coffee-title">About it</h2>
                    <img className="logo-beans" src={logoBeans} alt="logoBeans" />
                    <p className="about__coffee-country">Country: Brasil</p>
                    <p className="about__coffee-desc"><span>Description:</span> Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor incididunt ut labore <br /> et dolore magna aliqua. Ut enim ad minim veniam, quis <br /> nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br /> commodo consequat.</p>
                    <p className="about__coffee-price">Price: <span className="price">16.99$</span></p>
                </div>
            </div>
        </div>
    )
}
export default AboutCoffeeItem;
