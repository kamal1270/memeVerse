import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MemeDetails from "../components/MemeDetails";

const MemePage = () => {
    const { id } = useParams();
    const [meme, setMeme] = useState(null);

    useEffect(() => {
        // Simulating meme data fetch
        const memes = JSON.parse(localStorage.getItem("memes")) || [];
        const foundMeme = memes.find(m => m.id === id);
        setMeme(foundMeme);
    }, [id]);

    return (
        <div>
            {meme ? <MemeDetails meme={meme} /> : <p>Loading meme...</p>}
        </div>
    );
};

export default MemePage;
