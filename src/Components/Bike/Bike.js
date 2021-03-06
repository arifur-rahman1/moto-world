import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Bike.css'

const Bike = ({ bike, handleAddToCart }) => {
    const { name, img, price } = bike;
    return (
        // bike info 
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => handleAddToCart(bike)} className='btn-cart'><p className='btn-text'>Want To Ride</p><FontAwesomeIcon icon={faMotorcycle}></FontAwesomeIcon></button>
        </div>
    );
};

export default Bike;