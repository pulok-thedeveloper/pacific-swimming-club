import React from 'react';
import './Activity.css'

const Activity = (props) => {
    const {name, time, about, picture} = props.drill;
    return (
        <div className='activity-container'>
            <img className='activity-img' src={picture} alt="" />
            <h3 className='activity-name'>{name}</h3>
            <p className='activity-details'>{about}</p>
            <p className='activity-time'>Time required: {time}</p>
            <button className='add-btn'>Add to List</button>
        </div>
    );
};

export default Activity;