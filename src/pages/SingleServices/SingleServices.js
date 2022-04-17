import React from 'react';
import { Link } from 'react-router-dom';

const SingleServices = ({ service }) => {
    const { name, price, description, img, id } = service;
    return (
        <div className="col-12 col-md-6 col-lg-4 g-5 d-flex justify-content-center">
            <div className="card h-100 shadow rounded">
                <img src={img[0]} className="img-fluid p-1" alt="..." />
                <div className="card-body shadow rounded">
                    <h5 className="card-title">{name}</h5>
                    <p>Price: $ <span>{price}</span></p>
                    <p className="card-text">{description}</p>
                <div className="card-footer d-flex flex-column align-items-center">
                <Link className='text-decoration-none w-75' to={`checkout/${id}`}><button className='btn w-100' style={{backgroundColor:'#035397'}}><span className='h5 text-uppercase text-light'>CheckOut</span></button></Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default SingleServices;