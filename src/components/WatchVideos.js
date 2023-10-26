import React from "react";
import { useSearchParams } from "react-router-dom";

const WatchVideos = () => {

    const [videoID] = useSearchParams();

    return (
        <div className="mx-3 my-3">
           <iframe width="560" height="315" 
           src={"https://www.youtube.com/embed/" + videoID.get("v")} 
           title="YouTube video player" frameBorder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           autoPlay allowFullScreen></iframe>
        </div>
    )
}

export default WatchVideos;