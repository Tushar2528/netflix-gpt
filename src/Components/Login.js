import React from 'react'
import Header from './Header';
import { useState } from 'react';

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);

    const toggleSignInForm =() => {
        setIsSignIn(!isSignIn);
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt='logo'/>
        </div>
        <form className='absolute p-14 bg-black w-3/12 mx-auto my-48 right-0 left-0  text-white rounded-md bg-opacity-80'>
            <h1 className='font-bold text-4xl py-8 px-2'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
            {
                !isSignIn ? 
                <input type='text' placeholder="Name" className='p-4 my-6 w-full rounded-lg bg-gray-600'></input>
                :
                null
            }
            
            <input type='text' placeholder="Email Address" className='p-4 my-6 w-full rounded-lg bg-gray-600'></input>
            <input type='passowrd' placeholder='Password' className='p-4 my-6 w-full rounded-lg bg-gray-600'></input>
            <button className='py-4 my-4 bg-red-600 w-full rounded-lg'>{isSignIn ? "Sign In" : "Sign Up"}</button>
            <p 
                onClick={toggleSignInForm}
                className='p-4 text-gray-500 text-xl'>
                    {
                    isSignIn ? 
                    <p>New to Netflix? <span className=' text-white cursor-pointer'>Sign Up now</span></p>
                     : 
                    <p>Already a user? <span className=' text-white cursor-pointer'>Sign In now</span></p> }
            </p>
        </form>
        
    </div>
  )
}

export default Login;