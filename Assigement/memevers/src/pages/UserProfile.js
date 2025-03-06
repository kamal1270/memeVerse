import React, { useState, useEffect } from "react";
import Profile from "./profile";
import MemeGrid from "./MemeGrid";
import "./UserProfile.css";

const UserProfile = () => {
    const [user, setUser] = useState({
        name: "John Doe",
        bio: "Meme enthusiast 😎",
        profilePicture: "https://i.pinimg.com/736x/4a/37/72/4a37725748819b89c2b0df1a3d4c80a0.jpg",
    });

    const [uploadedMemes, setUploadedMemes] = useState([]);
    const [likedMemes, setLikedMemes] = useState([]);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("userProfile"));
        if (storedUser) setUser(storedUser);

        setUploadedMemes(JSON.parse(localStorage.getItem("userMemes")) || []);
        setLikedMemes(JSON.parse(localStorage.getItem("likedMemes")) || []);
    }, []);

    const updateUser = (updatedUser) => {
        setUser(updatedUser);
        localStorage.setItem("userProfile", JSON.stringify(updatedUser));
    };

    return (
        <div className="profile-container">
            <Profile user={user} onUpdate={updateUser} />
            <h2>Your Uploaded Memes</h2>
            <MemeGrid memes={uploadedMemes} />
            <h2>Liked Memes</h2>
            <MemeGrid memes={likedMemes} />
        </div>
    );
};

export default UserProfile;
