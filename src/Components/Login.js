import React from 'react'
import Header from './Header';
import { useState, useRef } from 'react';
import { checkValidation } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/userSlice';


const Login = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [isSignIn, setIsSignIn] = useState(true);

    const [errorMessage, setErrorMessage] = useState(null);

    const name = useRef(null);

    const email = useRef(null);

    const password = useRef(null);


    const toggleSignInForm =() => {
        setIsSignIn(!isSignIn);
    }

    const handleButtonClick =() => {

        const message= checkValidation(email.current.value, password.current.value);
        setErrorMessage(message);
        console.log(message);

        if (message){
            return;
        }

        //Sign up logic
        if(!isSignIn){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;

                updateProfile(user, {
                    displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/34788679?v=4"
                  }).then(() => {

                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({uid : uid, email : email, displayName : displayName, photoURL : photoURL}))
                    navigate("/browse");
                    // Profile updated!
                    // ...
                  }).catch((error) => {
                    setErrorMessage(error.message);
                    // An error occurred
                    // ...
                  });
                // console.log("User ID",user);
                
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage);
                // ..
            });
        }
        //Sign in logic
        else{
            signInWithEmailAndPassword(auth,  email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate("/browse");
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " " + errorMessage);
            });


        }

    }


  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt='logo'/>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='absolute p-14 bg-black w-3/12 mx-auto my-48 right-0 left-0  text-white rounded-md bg-opacity-80'>
            <h1 className='font-bold text-4xl py-8 px-2'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
            {
                !isSignIn ? 
                <input ref={name} type='text' placeholder="Name" className='p-4 my-6 w-full rounded-lg bg-gray-600'></input>
                :
                null
            }
            
            <input ref={email} type='text' placeholder="Email Address" className='p-4 my-6 w-full rounded-lg bg-gray-600'></input>
            <input ref={password} type='password' placeholder='Password' className='p-4 my-6 w-full rounded-lg bg-gray-600'></input>
            <p className='text-red-600 font-bold text-lg p-2'>{errorMessage}</p>
            <button 
                onClick={handleButtonClick}
                className='py-4 my-4 bg-red-600 w-full rounded-lg'>{isSignIn ? "Sign In" : "Sign Up"}
            </button>
            <p 
                onClick={toggleSignInForm}
                className='p-4 text-gray-500 text-xl'>
                    {
                    isSignIn ? 
                    <span>New to Netflix? <span className=' text-white cursor-pointer'>Sign Up now</span></span>
                     : 
                    <span>Already a user? <span className=' text-white cursor-pointer'>Sign In now</span></span> }
            </p>
        </form>
        
    </div>
  )
}

export default Login;