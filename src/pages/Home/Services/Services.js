import React from 'react';
import useServices from '../../hooks/useServices';
import SingleServices from '../../SingleServices/SingleServices';

const Services = () => {
    const homeServices = useServices()
    return (
        <div className='container'>
            <div className='row'>
                {
                    homeServices.map(service => <SingleServices key={service.id} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;