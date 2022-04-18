import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gitUser, gitLoading, gitError] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    let errorElement;
    if(loading || gitLoading){
        return <Loading/>
    }

    if (error || gitError) {
        errorElement =<p className='text-danger'>Error: {error?.message} {gitError?.message}</p>;
      }

      if(user || gitUser){
        navigate('/home')
      }
    return (
        <div>
            <p>or sign up with:</p>
            {errorElement}
            <div className='my-2'>
                <button onClick={() => signInWithGoogle()} type="button" className="btn btn-outline-dark w-25">Google
                </button>
            </div>
            <div className='my-2'>
                <button onClick={() => signInWithGithub()} type="button" className="btn btn-dark w-25">Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;