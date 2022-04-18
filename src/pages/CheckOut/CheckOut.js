import React from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../hooks/useServices';

const CheckOut = () => {
    const { serviceId } = useParams()
    const allData = useServices()
    const singleData = allData?.find(x => x.id === parseInt(serviceId))
    return (
        <div className='position-relative min-vh-100'>
            <h3>Here checkout our services of id is {serviceId}</h3>
            <h4>Name of Course: {singleData.name}</h4>
        </div>
    );
};

export default CheckOut;