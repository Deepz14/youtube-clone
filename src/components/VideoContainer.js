import React, {useState, useEffect} from "react";
import { YOUTUBE_VIDEO_API } from "../utils/Constants";
import { VideoCards } from "./VideoCards";

const VideoContainer = () => {

    const [videoInfo, setVideoInfo] = useState([])

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async() => {
        const response = await fetch(YOUTUBE_VIDEO_API);
        const getVideos = await response.json();
        setVideoInfo(getVideos.items);
        console.log("response ", getVideos);
    }
    return (
        <div className="grid grid-cols-10 mt-10 pt-10">
            {
                videoInfo.length > 0 && videoInfo.map((video) => <VideoCards key={video.id} info={video} />)
            }
        </div>
    )
}


export default VideoContainer;