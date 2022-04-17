import React from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../hooks/useServices';

const CheckOut = () => {
    const { serviceId } = useParams()
    // console.log(typeof serviceId)
    const allData = useServices()
    const singleData = allData?.find(x => x.id == serviceId)
    console.log(singleData)
    return (
        <div className='position-relative min-vh-100'>
            <h3>Here checkout our services of id is {serviceId}</h3>
        </div>
    );
};

export default CheckOut;