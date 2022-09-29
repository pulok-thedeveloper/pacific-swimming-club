import React from 'react';
import './Main.css'
import Activities from '../Activities/Activities';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div className='main-container'>
            <Header></Header>
            <Activities></Activities>
        </div>
    );
};

export default Main;