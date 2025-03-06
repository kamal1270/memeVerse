import React, { useState } from "react";

const Profile = ({ user, onUpdate }) => {
    const [editMode, setEditMode] = useState(false);
    const [updatedUser, setUpdatedUser] = useState(user);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUpdatedUser((prev) => ({ ...prev, profilePicture: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        onUpdate(updatedUser);
        setEditMode(false);
    };

    return (
        <div className="profile-card">
            <img src={updatedUser.profilePicture} alt="Profile" className="profile-pic" />
            {editMode ? (
                <>
                    <input type="file" onChange={handleImageUpload} />
                    <input type="text" name="name" value={updatedUser.name} onChange={handleChange} />
                    <textarea name="bio" value={updatedUser.bio} onChange={handleChange} />
                    <button onClick={handleSave}>Save</button>
                </>
            ) : (
                <>
                    <h2>{user.name}</h2>
                    <p>{user.bio}</p>
                    <button onClick={() => setEditMode(true)}>Edit Profile</button>
                </>
            )}
        </div>
    );
};

export default Profile;
