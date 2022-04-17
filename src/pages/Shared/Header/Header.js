import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-light" style={{backgroundColor: '#e3f2fd'}}>
            <div className="container-fluid py-2">
                <Link className="navbar-brand" to="/"><span className='fs-4 fw-bolder text-uppercase bg-dark p-2 text-info rounded'>Quran <span className='border-right border me-2 border-primary'></span><span className='text-white'>Tutor</span></span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="blogs">Blogs</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <Link to='login' className='nav-link'>Login</Link>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;