import React from 'react';

const Register = () => {
    return (
        <div className='position-relative min-vh-100 w-50 d-flex justify-content-center mx-auto my-5'>
            <form>
            <h3>Please Register</h3>
                {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form3Example1" className="form-control" />
                            <label className="form-label" htmlFor="form3Example1">First name</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form3Example2" className="form-control" />
                            <label className="form-label" htmlFor="form3Example2">Last name</label>
                        </div>
                    </div>
                </div>

                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                    <input type="email" id="form3Example3" className="form-control" />
                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                    <input type="password" id="form3Example4" className="form-control" />
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                </div>

                {/* <!-- Checkbox --> */}
                <div className="form-check d-flex justify-content-center mb-4">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                    <label className="form-check-label" htmlFor="form2Example33">
                        Subscribe to our newsletter
                    </label>
                </div>

                {/* <!-- Submit button --> */}
                <button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>

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
        </div>
    );
};

export default Register;