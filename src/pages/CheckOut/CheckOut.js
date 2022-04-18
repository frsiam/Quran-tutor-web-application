import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useServices from '../hooks/useServices';
import Loading from '../Shared/Loading/Loading';

const CheckOut = () => {
    const [user,loading] = useAuthState(auth)
    const { serviceId } = useParams()
    const allData = useServices()
    const singleData = allData?.find(x => x.id === parseInt(serviceId))
    // if(!user){
    //     return <Loading/>
    // }
    return (
        <div className='position-relative min-vh-100'>
            <h3>Here checkout our services of id is {serviceId}</h3>
            <h4>Name of Course: {singleData.name}</h4>
        </div>
    );
};

export default CheckOut;