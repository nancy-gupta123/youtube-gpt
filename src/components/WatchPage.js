import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

const WatchPage = ({info}) => {
    const dispatch=useDispatch();
    const [searchparams]=useSearchParams();
    
    useEffect(()=>{
      dispatch(closeMenu());
  },[]);

      console.log({info})
   
    

  return (
    <div className='flex flex-col'>
    <div className='px-5'>
        <iframe width="950" height="500" src={"https://www.youtube.com/embed/"+searchparams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        
    </div>
    
    <CommentsContainer/>
    </div>
  );
};

 

export default WatchPage