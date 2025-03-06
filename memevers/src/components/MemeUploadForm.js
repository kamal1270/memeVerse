import React, { useState } from 'react';
import './memeUploadForm.css';

const MemeUploadForm = () => {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle upload logic here
  };

  return (
    <form onSubmit={handleSubmit} className="meme-upload-form">
      <input type="file" onChange={handleFileChange} accept="image/*" required />
      <textarea
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Add a funny caption"
        required
      />
      <button type="submit">Upload Meme</button>
    </form>
  );
};

export default MemeUploadForm;
