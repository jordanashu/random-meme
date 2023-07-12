import React, { useEffect, useState } from 'react'

import axios from 'axios';
import Spinner from './Spinner';

import useGif from '../hooks/useGif';

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {


 
// const [gif,setGif] =useState('');
// const [loading ,setLoading]=useState('false');




// async function fetchData(){

//   setLoading(true);
//     const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
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

const {gif,loading,fetchData} =useGif();//fetch data from useGif 


function clickHandler(){

  fetchData();


}



  return (
    <div className='w-1/2   bg-green-500 rounded-lg border border-black flex flex-col items-center
    gap-y-5 mt-[15px]'>


        <h1 className='mt-[15px] font-bold text-3xl underline uppercase'>A Random gif</h1>
        


           {
            loading ?(<Spinner/>):(<img src={gif} width="450" />)
           } 

        <button onClick={clickHandler}
        
        className='w-10/12 bg-amber-300 rounded-lg text-lg p-y-2 mb-[20px] '>Generate</button>


    </div>
  )
}

export default Random