import React from "react";

export const VideoCards = ({info}) => {
    const { snippet, statistics} = info;
    const { thumbnails, title, channelTitle} = snippet
    return (
        <div className="col-span-2 mr-4 mb-5 cursor-pointer">
            <img alt="thumbnail-img" className="w-full rounded-lg" src={thumbnails.medium.url} />
            <div className="mt-2">
                <h3 className="font-bold">{title}</h3>
                <h4 className="font-semibold text-stone-800">{channelTitle}</h4>
                <h5 className="font-semibold text-stone-800">{statistics.viewCount} views</h5>
            </div>
        </div>
    )
}