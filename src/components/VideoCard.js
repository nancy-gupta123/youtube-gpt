import React from "react";

const VideoCard = ({ info }) => {
  
  if (!info) {
    return null;
  }

  const { snippet, statistics } = info;

  if (!snippet || !statistics) {
    return null;
  }
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 shadow-lg w-72">
      <img className="rounded-lg" alt="video" src={thumbnails.medium.url} />
      <ul>
        <li className="py-2 font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard=({info})=>{
  return (
    <div className="p-1 m-1 border border-red-900 ">
      <VideoCard info={info}/>
    </div>
  )
}

export default VideoCard;
