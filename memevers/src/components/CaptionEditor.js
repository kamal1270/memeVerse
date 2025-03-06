import React from "react";

const CaptionEditor = ({ topText, setTopText, bottomText, setBottomText }) => {
    return (
        <div>
            <input type="text" placeholder="Top text" value={topText} onChange={(e) => setTopText(e.target.value)} />
            <input type="text" placeholder="Bottom text" value={bottomText} onChange={(e) => setBottomText(e.target.value)} />
        </div>
    );
};

export default CaptionEditor;
