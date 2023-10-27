import React from 'react';
import { Link } from 'react-router-dom';
import '../components/App.css';

const ShoppingScreen = () => {
    return (
        <div className='shopping-screen'>
            <Link to="/code" className='circle image1'>
                <p>Add Points</p>
            </Link>
            <Link to="/camera" className='circle image2'>
                <p>Scan</p>
            </Link>
        </div>
    );
};

export default ShoppingScreen;
