import React from 'react';
import Banner from './Banner/Banner';
import Review from './Review/Review';
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='position-relative min-vh-100'>
            <Banner />
            <div className='mt-5'>
                <div className='container bg-dark mb-4 mt-4' style={{ height: '2px' }}><hr /></div>
                <div className='text-center my-2'>
                    <h1 className='' style={{ color: '#143F6B' }}>My Services</h1>
                </div>
                <div className='container bg-dark mb-4 mt-4' style={{ height: '2px' }}><hr /></div>
            </div>
            <Services />
            <div className='mt-5'>
                <div className='text-center my-2'>
                    <h1 className='' style={{ color: '#001E6C' }}>Reviews</h1>
                </div>
                <div className='container bg-primary mb-4 mt-4 w-25' style={{ height: '2px' }}><hr /></div>
            </div>
            <Review />
        </div>
    );
};

export default Home;