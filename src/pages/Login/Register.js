import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    // const [successMessage, setSuccess] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const [
        createUserWithEmailAndPassword,
        createUser,
        loading,
        createError,
    ] = useCreateUserWithEmailAndPassword(auth);
    // if(createError){
    //     setErrorMessage(createError.message)
    // }
    if (createUser) {
        toast('Congratulations ! Registration successfully complete.')
    }
    
    const handleRgister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        if (password !== confirmPassword) {
            setErrorMessage('Password can not matched !');
            toast('Password can not matched !');
            return;
        }
        setErrorMessage('')
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='position-relative min-vh-100 w-50 d-flex justify-content-center mx-auto my-5'>
            <form onSubmit={handleRgister}>
                <h3>Please Register</h3>
                {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                <div className="mb-4">
                    <div className="form-outline">
                        <label className="form-label" htmlFor="form3Example1">Your Name</label>
                        <input name='name' type="text" id="name" className="form-control" placeholder='Name' />
                    </div>
                </div>

                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example2">Email address</label>
                    <input name='email' type="email" id="email" className="form-control" placeholder='Email' />
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example3">Password</label>
                    <input name='password' type="password" id="password" className="form-control" placeholder='Password' />
                </div>
                {/* <!-- Confirm Password input --> */}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example4">Confirm Password</label>
                    <input name='confirmPassword' type="password" id="confirmPassword" className="form-control" placeholder='Confirm Password' />
                </div>
                <p className='text-danger'>{errorMessage}</p>

                {/* <!-- Checkbox --> */}
                {/* <div className="form-check d-flex justify-content-center mb-4">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                    <label className="form-check-label" htmlFor="form2Example33">
                        Subscribe to our newsletter
                    </label>
                </div> */}

                {/* <!-- Submit button --> */}
                <button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>
                <p>Already have an account ? <Link to="/login" className="text-decoration-none">Please Login</Link></p>

                {/* <!-- Register buttons --> */}
                <div className="text-center">
                    <p>or sign up with:</p>
                    <button type="button" className="btn btn-primary btn-floating mx-1">facebook
                    </button>

                    <button type="button" className="btn btn-primary btn-floating mx-1">Google
                    </button>

                    <button type="button" className="btn btn-primary btn-floating mx-1">Github
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Register;