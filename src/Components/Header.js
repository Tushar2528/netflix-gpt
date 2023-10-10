import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const handleSignout =() => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  };
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
        <img className='w-48' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt='logo'/>
       {user && <> <div className='flex p-2'>
          <img className='w-14 h-14 ' alt="userIcon" src={user.photoURL}
          />
          {/* <img className='w-14 h-14 ' alt="userIcon" src={user?.photoURL ? user.photoURL : "https://occ-0-6246-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"}
          /> */}
          <button onClick={handleSignout} className='m-4 font-bold text-white rounded-md shadow-lg bg-red-500 px-4'>Sign Out</button>
        </div></> }
    </div>
  )
}

export default Header;