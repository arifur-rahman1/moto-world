import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';
import './Bikes.css'

const Bikes = () => {


    const [bikes, setbikes] = useState([])
    const [cart, setCart] = useState([])


    const handleAddToCart = (bike) => {
        const newCart = [...cart, bike]
        setCart(newCart);
    };
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setbikes(data))
    }, [])
    return (
        <div className='bike-container'>
            <div className='bikes'>
                {
                    bikes.map(bike => <Bike key={bike.id} bike={bike} handleAddToCart={handleAddToCart} />)
                }
            </div>
            <div className='cart-container'>
                <div className='cart'>
                    <h3>Your Choosen Ride</h3>
                    <div>
                        {
                            cart.map((item) => (<h3 key={item.id}>{item.name}</h3>
                            ))
                        }
                    </div>
                    <div>
                        <button className='btn-cart1'><p className='btn-text'>Best For You</p><FontAwesomeIcon icon={faMotorcycle}></FontAwesomeIcon></button>
                    </div>
                    <div>
                        <button className='btn-cart2'><p className='btn-text'>Choose Again</p><FontAwesomeIcon icon={faMotorcycle}></FontAwesomeIcon></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bikes;