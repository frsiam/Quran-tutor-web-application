import React, { useRef } from 'react';
import './Login.css'
import loginimg from '../../images/others/signin.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from './SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Shared/Loading/Loading';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate()
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth)

    if (loading || sending) {
        return <Loading />
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>;
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('Please enter your email address')
        }
    }
    return (
        <section className="intro position-relative min-vh-100">
            <div className="mask d-flex align-items-center h-100 gradient-custom">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-xl-10">
                            <div className="card">
                                <div className="card-body p-5">

                                    <div className="row d-flex align-items-center">
                                        <div className="col-md-6 col-xl-7">

                                            <div className="text-center pt-md-5 pb-5 my-md-5" style={{ paddingRight: '24px' }}>
                                                <img className='img-fluid' src={loginimg} alt="" />
                                                {/* <i className="fas fa-laptop" style={{color: '#D6D6D6'}}></i> */}
                                            </div>

                                        </div>
                                        <form onSubmit={handleSubmit} className="col-md-6 col-xl-4 text-center">

                                            <h2 className="fw-bold mb-4 pb-2">Member Login</h2>
                                            <span>
                                                {errorElement}</span>

                                            <div className="form-outline mb-3">
                                                {/* <label className="form-label" htmlFor="typeEmail">Email</label> */}
                                                <input ref={emailRef} type="email" id="typeEmail" className="form-control form-control-lg" placeholder='Email' required />
                                            </div>

                                            <div className="form-outline mb-4">
                                                {/* <label className="form-label" htmlFor="typePassword">Password</label> */}
                                                <input ref={passwordRef} type="password" id="typePassword" className="form-control form-control-lg" placeholder='Password' required />
                                            </div>

                                            <div className="text-center">
                                                <button className="btn btn-info btn-block btn-lg w-100" type="submit">Login</button>
                                                <p className="mt-3 mb-4 text-muted">Forgot <span className="fw-bold"><Link onClick={resetPassword} to="/login" className="text-decoration-none">Password</Link>?</span></p>
                                                <Link to="/register" className="text-decoration-none">Create your Account</Link>
                                                <div className='w-100'>
                                                    <SocialLogin />
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default Login;