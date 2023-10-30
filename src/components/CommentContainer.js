import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import { YOUTUBE_COMMENT_API } from "../utils/Constants";

const CommentContainer = ({vId}) => {

    const [CommentsList, setCommentList] = useState([]);

    useEffect(() => {
        fetchCommentList();
    }, []);

    const fetchCommentList = async() => {
        const response = await fetch(YOUTUBE_COMMENT_API + "&videoId=" + vId);
        const result = await response.json();
        setCommentList(result.items);
    }

    if(CommentsList.length === 0) return;

    return (
        <div className="mt-4 pt-2">
            <h1 className="font-bold text-xl mb-3 pb-3"> {CommentsList.length} Comments</h1>
            {
                CommentsList.map((c) => (
                    <div className="my-3" key={c.id}>
                        <Comment data={c} />
                    </div>
                ))
            }
        </div>
    )
}

export default CommentContainer;