import React from "react";
import TimeAgoFormat from "../utils/TimeAgoFormat";

const Comment = ({data}) => {
    const { authorProfileImageUrl, authorDisplayName, publishedAt, textOriginal} = data?.snippet?.topLevelComment?.snippet;
    return (
        <div className="flex items-center">
            <img alt='cmt-user' className="rounded-full"
                src={authorProfileImageUrl} />
            <div className="ml-4 pl-1 mb-3">
                <h1 className="font-bold">{authorDisplayName} 
                    {/* <span>{<TimeAgoFormat date={new Date(publishedAt)} />}</span> */}
                </h1>
                <h1 className="font-bold text-md">{textOriginal}</h1>
            </div>
        </div>
    )
}


export default Comment;