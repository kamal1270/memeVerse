import React, { useState, useEffect } from "react";
import CommentSection from "./CommentSection";

const MemeDetails = ({ meme }) => {
    const { id, image, title, description } = meme;
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const storedLikes = JSON.parse(localStorage.getItem(`likes-${id}`)) || 0;
        const storedLiked = JSON.parse(localStorage.getItem(`liked-${id}`)) || false;
        setLikes(storedLikes);
        setLiked(storedLiked);
    }, [id]);

    const handleLike = () => {
        const newLiked = !liked;
        const newLikes = newLiked ? likes + 1 : likes - 1;
        setLiked(newLiked);
        setLikes(newLikes);
        localStorage.setItem(`likes-${id}`, JSON.stringify(newLikes));
        localStorage.setItem(`liked-${id}`, JSON.stringify(newLiked));
    };

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        alert("Meme link copied to clipboard!");
    };

    return (
        <div className="meme-container">
            <h2>{title}</h2>
            <img src={image} alt={title} className="meme-image" />
            <p>{description}</p>
            <div className="actions">
                <button onClick={handleLike} className={`like-button ${liked ? "liked" : ""}`}>
                    ❤️ {likes}
                </button>
                <button onClick={handleShare}>🔗 Share</button>
            </div>
            <CommentSection memeId={id} />
        </div>
    );
};

export default MemeDetails;
