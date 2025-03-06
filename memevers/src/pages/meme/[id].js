import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
// import Header from "../../components/Header";
import CommentSection from "../../components/CommentSection";

const MemeDetails = () => {
  const { id } = useParams(); // ✅ Get meme ID from URL
  const memes = useSelector((state) => state.memes.items);
  const meme = memes.find((m) => m.id === id);

  if (!meme) return <div className="text-center text-xl mt-5">Meme not found or loading...</div>;

  return (
    <div>
      {/* <Header /> */}
      <main className="p-4">
        <h1 className="text-3xl font-bold">{meme.title}</h1>
        <img src={meme.url} alt={meme.title} className="w-full h-auto mt-4 rounded-lg shadow-md" />
        <CommentSection memeId={meme.id} />
      </main>
    </div>
  );
};

export default MemeDetails;
