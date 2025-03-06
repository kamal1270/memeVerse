import React from "react";

const MemeGrid = ({ memes }) => {
    return (
        <div className="meme-grid">
            {memes.length === 0 ? <p>No memes found.</p> : memes.map((meme, index) => (
                <div key={index} className="meme-card">
                    <img src={meme.image} alt={meme.title} />
                    <p>{meme.title}</p>
                </div>
            ))}
        </div>
    );
};

export default MemeGrid;
