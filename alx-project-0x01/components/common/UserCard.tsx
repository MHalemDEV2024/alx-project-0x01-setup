import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 max-w-md">
      <h2 className="text-xl font-bold mb-2">{user.name}</h2>
      <p className="text-sm text-gray-600">@{user.username}</p>
      <p className="text-gray-700 mt-2">📧 {user.email}</p>
      <p className="text-gray-700">📍 {user.address.city}, {user.address.street}</p>
      <p className="text-gray-700">📞 {user.phone}</p>
      <p className="text-gray-700">🔗 {user.website}</p>
      <div className="mt-4">
        <h3 className="font-semibold">🏢 {user.company.name}</h3>
        <p className="text-sm italic text-gray-500">{user.company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;
