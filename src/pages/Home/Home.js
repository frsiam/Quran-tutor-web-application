import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <h3>This is Home</h3>
            <Services/>
        </div>
    );
};

export default Home;