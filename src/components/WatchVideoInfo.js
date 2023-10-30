import React,  { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_BY_ID_API } from "../utils/Constants";
import CommentContainer from "./CommentContainer";

const WatchVideoInfo = ({vId}) => {
    const [videoData, setVideoData] = useState('');

    useEffect(() => {
        fetchVideoInfo();
    }, []);

    const fetchVideoInfo = async() => {
        const response = await fetch(YOUTUBE_VIDEO_BY_ID_API + "&id=" + vId);
        const result = await response.json();
        setVideoData(result.items[0]);
    }

    if (!videoData){
        return
    }

    return (
        <div className="mt-2">
            <h1 className="font-bold text-xl">{videoData.snippet.localized.title}</h1>
            <h3 className="font-bold text-md mr-5">{videoData.snippet.channelTitle}</h3>
            <h4 className="font-semibold text-md">{videoData.statistics.viewCount} views</h4>
            <div>
               <CommentContainer vId={vId} />
            </div>
        </div> 
    )
}

export default WatchVideoInfo;