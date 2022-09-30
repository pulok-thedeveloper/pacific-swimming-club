import React from 'react';
import './Cart.css'
import dp from '../../Dp.jpg'
import Break from '../Break/Break';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({cart}) => {

    const notify = () => toast("Wow so easy!");

    let totalTime = 0;
    for(const drill of cart){
        totalTime = totalTime + parseInt(drill.time);
    }

    const breakTime = localStorage.getItem('break-time');
    return (
        <div className='cart-container'>
            <div>
                <div className="profile-details">
                    <div>
                    <img className='dp' src={dp} alt="" />
                    </div>
                    <div className='profile-info'>
                        <h3 className='my-name'>Md. Golam Mehedi</h3>
                        <p className='address'>Dhaka, Bangladesh</p>
                    </div>
                </div>
            </div>
            <div className='profile-variables'>
                <p><span>60</span>Kg <br /> Weight</p>
                <p><span>5.5</span> <br /> Height</p>
                <p><span>21</span>yrs <br /> Age</p>
            </div>

            <div className='break-container'>
                <h3>Add a Break</h3>
                {
                    
                }
                <div>
                    <Break></Break>
                </div>
            </div>

            <div className="exercise-container">
                <h3>Exercise Details</h3>
                <div className='exercise-time'>
                    <p>Exercise Time</p>
                    <p>{totalTime}min</p>
                </div>
                <div className='break-time'>
                    <p>Break Time</p>
                    <p id='break'>{breakTime}min</p>
                </div>
                <button onClick={notify} className='complete-btn'>Activity Completed</button>

            </div>
        </div>
    );
};

export default Cart;