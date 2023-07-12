import React, { useEffect, useState } from 'react'

import axios from 'axios';
import Spinner from './Spinner';

import useGif from '../hooks/useGif';


const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

const [tag,setTag]=useState('');
 
// const [gif,setGif] =useState('');
// const [loading ,setLoading]=useState('false');




// async function fetchData(){

//   setLoading(true);
//     const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
//    const {data}= await axios.get(url);
//    const imageSource=data.data.images.downsized_large.url;//path of api  to fetch 
   
//    setGif(imageSource);

//    setLoading(false);
// }

// //api call using useeffect hook
// useEffect(()=>
// {
//     fetchData();
// },[])


const {gif,loading,fetchData}=useGif(tag);//fetch data from useGif hook


function clickHandler(){

  fetchData(tag);


}



function changeHandler(event){

  setTag(event.target.value);
}







  return (
    <div className='w-1/2   bg-sky-500 rounded-lg border border-black flex flex-col items-center
    gap-y-5 mt-[15px]'>


        <h1 className='mt-[15px] font-bold text-3xl underline uppercase'>Random {tag}</h1>
        


           {
            loading ?(<Spinner/>):(<img src={gif} width="450" />)
           }

     
          <input
          className='w-10/12 bg-white rounded-lg text-lg p-y-2 mb-[3px] text-center'
          onChange={changeHandler} value={tag}
          />


        <button onClick={clickHandler}
        
        className='w-10/12 bg-amber-300 rounded-lg text-lg p-y-2 mb-[20px] '>Generate</button>


    </div>
  )
}

export default Tag