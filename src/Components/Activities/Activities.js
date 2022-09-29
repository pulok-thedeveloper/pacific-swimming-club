import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css'

const Activities = () => {
    const [drills, setDrills] = useState([]);

    useEffect(()=>{
      fetch ('swim.json')
      .then(res => res.json())
      .then(data => setDrills(data))
    },[])

    return (
        <div>
            <h3 className='title'>Select today's drills</h3>
            <div className='activities-container'>
            {
                drills.map(drill => <Activity key={drill.id} drill={drill}></Activity>)
            }
            </div>
        </div>
    );
};

export default Activities;