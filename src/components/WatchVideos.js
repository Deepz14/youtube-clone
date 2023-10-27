import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { open, close } from "../store/appSlice";

const WatchVideos = () => {

    const [videoID] = useSearchParams();
    const dispatch = useDispatch();
   
    useEffect(() => {
        dispatch(close())
        
        // call when component unmount
        return () => {
            dispatch(open())
        }
    }, []);

    return (
        <div className="ml-8 pl-8 my-3">
           <iframe width="1120" height="560" 
           className="rounded-md shadow"
           src={"https://www.youtube.com/embed/" + videoID.get("v")} 
           title="YouTube video player" frameBorder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           autoPlay allowFullScreen></iframe>
        </div>
    )
}

export default WatchVideos;