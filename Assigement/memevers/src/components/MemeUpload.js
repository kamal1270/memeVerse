import React, { useState } from "react";
import CaptionEditor from "../components/CaptionEditor";
import MemePreview from "../components/MemePreview";
import { generateAIMeme, uploadMemeImage } from "../utils/memeAPI";
import "./memeUpload.css";
// import { uploadMemeImage } from "../utils/memeAPI";
// import generateAIMeme from "../utils/memeAPI"

const MemeUpload = () => {
    const [image, setImage] = useState(null);
    const [topText, setTopText] = useState("");
    const [bottomText, setBottomText] = useState("");
    const [imageFile, setImageFile] = useState(null);

    // Handle file upload
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && (file.type.startsWith("image/") || file.type === "image/gif")) {
            setImage(URL.createObjectURL(file));
            setImageFile(file);
        } else {
            alert("Please upload a valid image or GIF file.");
        }
    };

    // Generate AI Meme
    const handleGenerateMeme = async () => {
        if (!topText || !bottomText) {
            alert("Please enter both top and bottom text!");
            return;
        }

        const aiMemeUrl = await generateAIMeme(topText, bottomText);
        setImage(aiMemeUrl);
    };

    // Handle Upload
    const handleUpload = async () => {
        if (!imageFile && !image) {
            alert("Please upload or generate a meme first.");
            return;
        }

        let uploadedImageUrl = null;

        if (imageFile) {
            uploadedImageUrl = await uploadMemeImage(imageFile);
        } else {
            uploadedImageUrl = image;
        }

        if (uploadedImageUrl) {
            alert("Meme uploaded successfully! URL: " + uploadedImageUrl);
        } else {
            alert("Upload failed. Try again!");
        }
    };

    return (
        <div className="upload-container">
            <h2 className="upload-title">Create & Upload Meme</h2>

            {/* File Upload */}
            <input type="file" accept="image/*" onChange={handleFileChange} className="upload-input" />

            {/* Caption Editor */}
            <CaptionEditor topText={topText} setTopText={setTopText} bottomText={bottomText} setBottomText={setBottomText} />

            {/* AI Meme Generator */}
            <button onClick={handleGenerateMeme} className="ai-btn">
                Generate AI Meme
            </button>

            {/* Meme Preview */}
            {image && <MemePreview image={image} />}

            {/* Upload Button */}
            <button onClick={handleUpload} className="upload-btn">
                Upload Meme
            </button>
        </div>
    );
};

export default MemeUpload;
