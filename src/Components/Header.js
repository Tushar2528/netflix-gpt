import React from 'react';
import { useEffect } from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid, email, displayName, photoURL} = user;
          dispatch(addUser({uid : uid, email : email, displayName : displayName, photoURL : photoURL}));
          navigate("/browse");
          // ...
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/");
          // ...
        }
      });

      // Unsubscribe when component unmounts

      return () =>{
        unsubscribe();

      }
}, []);


  const handleSignout =() => {
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  };
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-50 w-screen flex justify-between '>
        <img className='w-48' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt='logo'/>
       {user && <> <div className='flex p-2'>
          <img className='w-14 h-14 ' alt="userIcon" src={user.photoURL}
          />
          {/* <img className='w-14 h-14 ' alt="userIcon" src={user?.photoURL ? user.photoURL : }
          /> */}
          <button onClick={handleSignout} className='m-4 font-bold text-white rounded-md shadow-lg bg-red-500 px-4'>Sign Out</button>
        </div></> }
    </div>
  )
}

export default Header;