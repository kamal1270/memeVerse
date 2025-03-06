import React from 'react';

const MemeCard = ({ meme }) => {
  return (
    <div className="meme-card border rounded-lg overflow-hidden shadow-lg">
      <img src={meme.url} alt={meme.title} className="w-full h-auto" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{meme.title}</h2>
        <p>{meme.caption}</p>
      </div>
    </div>
  );
};

export default MemeCard;