import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    let errorElement;
    if (error) {
        errorElement =<p className='text-danger'>Error: {error.message}</p>;
      }

      if(user){
        navigate('/home')
      }
    return (
        <div className='container'>
            <p>or sign up with:</p>
            {errorElement}
            <div className='my-2'>
                <button onClick={() => signInWithGoogle()} type="button" className="btn btn-outline-dark w-25">Google
                </button>
            </div>
            <div className='my-2'>
                <button type="button" className="btn btn-dark w-25">Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;