import React, { useState, useEffect } from "react";

const CommentSection = ({ memeId }) => {
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const storedComments = JSON.parse(localStorage.getItem(`comments-${memeId}`)) || [];
        setComments(storedComments);
    }, [memeId]);

    const handleAddComment = () => {
        if (comment.trim() === "") return;
        const newComments = [...comments, comment];
        setComments(newComments);
        localStorage.setItem(`comments-${memeId}`, JSON.stringify(newComments));
        setComment("");
    };

    return (
        <div className="comment-section">
            <h3>Comments</h3>
            <ul>
                {comments.map((c, index) => (
                    <li key={index}>{c}</li>
                ))}
            </ul>
            <input
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment..."
            />
            <button onClick={handleAddComment}>Post</button>
        </div>
    );
};

export default CommentSection;
