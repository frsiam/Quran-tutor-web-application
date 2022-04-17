import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='position-relative min-vh-100'>
            <Banner />
            <Services />
        </div>
    );
};

export default Home;