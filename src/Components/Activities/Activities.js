import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../Utilities/localstorage';
import Activity from '../Activity/Activity';
import Cart from '../Cart/Cart';
import './Activities.css'
import logo from '../../logo.png';

const Activities = () => {
    const [drills, setDrills] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
      fetch ('swim.json')
      .then(res => res.json())
      .then(data => setDrills(data))
    },[])

    useEffect(()=>{
        const storedCart = getStoredCart();
        for(const id in storedCart){
            const addedDrills = drills.find(drill => drill.id === id)
        }
    },[drills])

    const handleAddToCart =(drill) =>{
        const newCart = [...cart, drill];
        setCart(newCart);
        addToDb(drill)
    }

    return (
        <div>
            <div className='main-container'>
                <div>
                    <div className='header-container'>
                        <img className='logo' src={logo} alt="" />
                        <h1>PACIFIC SWIMMING CLUB</h1>
                    </div>
                    <h3 className='title'>Select today's drills</h3>
                    <div  className='activities-container'>
                        {
                            drills.map(drill => <Activity 
                            key={drill.id} 
                            drill={drill}
                            handleAddToCart = {handleAddToCart}
                            ></Activity>)
                        }
                    </div>
                </div>
                <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Activities;