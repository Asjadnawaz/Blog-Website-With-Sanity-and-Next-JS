'use client';

import React, { useState, useEffect } from "react";

type Comment = {
    username: string;
    comment: string;
  };
const CommentSec = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [username, setUsername] = useState<string>("");
  const [comment, setComment] = useState<string>("");

  // Load comments from local storage when the component mounts
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem("comments") || "[]");
    setComments(savedComments);
  }, []);

  // Save comments to local storage whenever comments change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = () => {
    if (username && comment) {
      const newComment = { username, comment };
      setComments([...comments, newComment]);
      setUsername("");
      setComment("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Comment Section</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full p-2 mb-2 border border-gray-300 rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <textarea
          placeholder="Write your comment here"
          className="w-full p-2 border border-gray-300 rounded"
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mt-2 hover:bg-blue-600"
          onClick={handleAddComment}
        >
          Add Comment
        </button>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Comments:</h3>
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet.</p>
        ) : (
          comments.map((item, index) => (
            <div
              key={index}
              className="p-3 mb-2 border border-gray-200 rounded bg-white"
            >
              <p className="font-bold">{item.username}</p>
              <p>{item.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSec;
