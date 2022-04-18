import React from 'react';

const SingleReview = ({ review }) => {
    const { name, comment, rating } = review;
    return (
        <div className="col-12 col-md-6 col-lg-4 g-5 d-flex justify-content-center">
            <div className="card h-100 border-0 shadow rounded">
                <div className="card-body shadow rounded">
                    <h5 className="card-title text-primary">{name}</h5>
                    <p className='fw-bold'>Rating: <span className='text-danger fw-bold'> {rating}</span></p>
                    <p className="card-text">{comment}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;