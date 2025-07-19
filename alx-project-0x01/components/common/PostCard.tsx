import React from 'react';

type PostCardProps = {
  title: string;
  body: string;
};

const PostCard: React.FC<PostCardProps> = ({ title, body }) => (
  <div className="border rounded p-4 shadow">
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="text-gray-700">{body}</p>
  </div>
);

export default PostCard;
