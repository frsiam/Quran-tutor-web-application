import React from 'react';

const Loading = () => {
    return (
        <div class="d-flex align-items-center container mx-auto justify-content-evenly position-relative min-vh-100 text-primary">
            <strong>Loading...</strong>
            <div class="spinner-border" role="status" aria-hidden="true"></div>
        </div>
    );
};

export default Loading;