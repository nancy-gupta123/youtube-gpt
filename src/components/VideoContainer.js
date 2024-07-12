import React, { useEffect, useState } from 'react'
import { Youtube_Video_API } from '../utils/constant'
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';
import WatchPage from './WatchPage';



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
      {videos[0] && <AdVideoCard info={videos[0]}/>}
      {videos.map((videos)=>(
        <Link key={videos.id} to={"/watch?v="+videos.id}>
        <VideoCard key={videos.id} info={videos}/></Link>
      ))}
      
      <Link to={"/watch"}><WatchPage info={videos}/></Link>
     

    </div>
  )
}

export default VideoContainer