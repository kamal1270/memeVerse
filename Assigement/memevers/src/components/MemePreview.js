import React from "react";

const MemePreview = ({ image }) => {
    return <div>{image && <img src={image} alt="Meme preview" style={{ maxWidth: "300px" }} />}</div>;
};

export default MemePreview;
