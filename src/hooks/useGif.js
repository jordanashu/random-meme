import React from 'react'

import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
//const tagMemeUrl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;


const useGif = (tag) => {
 

   
    const [gif,setGif] =useState('');
    const [loading ,setLoading]=useState('false');
    
    
    
    
    async function fetchData(){
    
      setLoading(true);//before api call loader run 
       
       const {data}= await axios.get(tag?`${url}&tag=${tag}`:url);
       const imageSource=data.data.images.downsized_large.url;//path of api  to fetch 
       
       setGif(imageSource);
    
       setLoading(false);//loader close
    }
    
    //api call using useeffect hook
    useEffect(()=>
    {
        fetchData();
    },[])



    return{gif,loading,fetchData}
}

export default useGif