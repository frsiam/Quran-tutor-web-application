import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='position-relative min-vh-100'>
            <Banner />
            <div className='container bg-dark mb-4 mt-4' style={{height: '2px'}}><hr /></div>
            <div className='text-center my-2'>
                <h1 className='' style={{color: 'tomato'}}>My Services</h1>
            </div>
            <div className='container bg-dark mb-4 mt-4' style={{height: '2px'}}><hr /></div>
            <Services />
        </div>
    );
};

export default Home;