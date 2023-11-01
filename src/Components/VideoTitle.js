import React from 'react';

const VideoTitle = ({title, overview}) => {


  return (


    <div className='w-screen aspect-video pt-[15%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold '>{title}</h1>
        <p className='py-6 text-lg w-1/3'>{overview}</p>
        <div className=''>
            <button className=' p-4 px-12 text-xl  rounded-md bg-white text-black transition-all hover:bg-opacity-80'>
                ▶️  Play</button>
            <button className='bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-md mx-2 '> More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle