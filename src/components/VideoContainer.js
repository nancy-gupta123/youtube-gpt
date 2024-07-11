import React, { useEffect, useState } from 'react'
import { Youtube_Video_API } from '../utils/constant'
import VideoCard from './VideoCard';

const VideoContainer = () => {
const [videos,setvideos]=useState([]);

useEffect(()=>{
    getVideos();
},[])
const getVideos=async()=>{
  const data=await fetch(Youtube_Video_API);
  const json=await data.json();
  console.log(json);
  setvideos(json.items);
}
 
  return (
    <div className='flex flex-wrap'>
      {videos.map((videos)=>(
        <VideoCard key={videos.id}info={videos}/>
      ))}
    </div>
  )
}

export default VideoContainer