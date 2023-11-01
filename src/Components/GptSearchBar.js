import React from 'react';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {


const language = useSelector((store) => store.config.lang)
console.log(language);
// console.log(lang.[language]);    
  return (
    <div className='pt-[8%] flex justify-center '>
        <form className=' w-1/2 bg-black grid grid-cols-12 rounded-md'>
            <input type='text'className='p-4 m-4 col-span-9 rounded-lg' placeholder={lang[language].searchPlaceholder}></input>
            <button className='col-span-3 py-2 px-4 m-4 rounded-lg bg-red-600 text-white'>{lang[language].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar;