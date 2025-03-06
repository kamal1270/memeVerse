import React, { useState } from 'react';

const CommentSection = ({ memeId }) => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment) {
      setComments([...comments, comment]);
      setComment('');
      // Save to local storage or API
    }
  };

  return (
    <div className="comment-section">
      <h3 className="text-lg">Comments</h3>
      <form onSubmit={handleCommentSubmit} className="flex">
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment"
          className="border rounded p-2 flex-grow"
        />
        <button type="submit" className="ml-2 bg-blue-500 text-white rounded p-2">Post</button>
      </form>
      <ul className="mt-2">
        {comments.map((c, index) => (
          <li key={index} className="border-b py-1">{c}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommentSection;