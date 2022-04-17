import React from 'react';
import './Login.css'
import loginimg from '../../images/others/signin.png'

const Login = () => {
    return (
        <section className="intro">
            <div className="mask d-flex align-items-center h-100 gradient-custom">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-xl-10">
                            <div className="card">
                                <div className="card-body p-5">

                                    <div className="row d-flex align-items-center">
                                        <div className="col-md-6 col-xl-7">

                                            <div className="text-center pt-md-5 pb-5 my-md-5" style={{paddingRight:'24px'}}>
                                                <img className='img-fluid' src={loginimg} alt="" />
                                                {/* <i className="fas fa-laptop" style={{color: '#D6D6D6'}}></i> */}
                                            </div>

                                        </div>
                                        <div className="col-md-6 col-xl-4 text-center">

                                            <h2 className="fw-bold mb-4 pb-2">Member Login</h2>

                                            <div className="form-outline mb-3">
                                                {/* <label className="form-label" htmlFor="typeEmail">Email</label> */}
                                                <input type="email" id="typeEmail" className="form-control form-control-lg" placeholder='Email' />
                                            </div>

                                            <div className="form-outline mb-4">
                                                {/* <label className="form-label" htmlFor="typePassword">Password</label> */}
                                                <input type="password" id="typePassword" className="form-control form-control-lg" placeholder='Password' />
                                            </div>

                                            <div className="text-center">
                                                <button className="btn btn-info btn-block btn-lg" type="submit">Login</button>
                                                <p className="small mt-3 mb-4 text-muted">Forgot <span className="fw-bold"><a href="#!" className="text-muted">Username</a> / <a href="#!" className="text-muted">Password</a>?</span></p>
                                                <a href="#!" className="link-info">Create your Account <i className="fas fa-long-arrow-alt-right"></i></a>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;