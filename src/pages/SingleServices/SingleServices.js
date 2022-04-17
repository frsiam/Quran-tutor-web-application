import React from 'react';

const SingleServices = ({ service }) => {
    const { name, price, description, img } = service;
    return (
        <div className="col-12 col-md-6 col-lg-4 g-4">
            <div className="card h-100 shadow rounded">
                <img src={img[0]} className="img-fluid rounded" alt="..." />
                <div className="card-body border border-1 border-info shadow rounded">
                    <h5 className="card-title">{name}</h5>
                    <p>Price: $ <span>{price}</span></p>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleServices;