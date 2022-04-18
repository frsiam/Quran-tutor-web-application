import React from 'react';

const Loading = () => {
    return (
        <div className="d-flex align-items-center container mx-auto justify-content-evenly text-primary">
            <strong>Loading...</strong>
            <div className="spinner-border" role="status" aria-hidden="true"></div>
        </div>
    );
};

export default Loading;