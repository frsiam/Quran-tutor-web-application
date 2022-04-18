import React from 'react';
import { useNavigate } from 'react-router-dom';
import notFound from '../../images/others/notfound.png';
const NotFound = () => {
    const navigate = useNavigate();
    const handleToHome = () => {
        navigate('/home')
    }
    return (
        <div className='container position-relative min-vh-100'>
            <div className='row'>
                <h1 className='col-12 col-md-6 text-danger text-center mt-5 p-5'>404 Page not found!</h1>
                <div className='col-12 col-md-6'>
                    <img className='img-fluid w-100' src={notFound} alt="" />
                </div>
            </div>
            <div className='text-center'>
                <button onClick={handleToHome} className='btn btn-outline-dark w-50'>Back to Home</button>
            </div>
        </div>
    );
};

export default NotFound;