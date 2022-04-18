import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useServices from '../hooks/useServices';
import Loading from '../Shared/Loading/Loading';

const CheckOut = () => {
    const [user, loading] = useAuthState(auth)
    const { serviceId } = useParams()
    const allData = useServices()
    const singleData = allData?.find(x => x.id === parseInt(serviceId))
    // if(!user){
    //     return <Loading/>
    // }
    const {name, img, benifits} = singleData;
    return (
        <div className='container my-5 position-relative min-vh-100'>
            <div className="card">
                <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img width={'100%'} style={{height:'400px'}} src={img[1]} className="img-fluid" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#!" className="btn btn-primary">Button</a>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;