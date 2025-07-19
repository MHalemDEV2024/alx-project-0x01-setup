import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 max-w-md">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-sm text-gray-600">@{username}</p>
      <p className="text-gray-700 mt-2">📧 {email}</p>
      <p className="text-gray-700">📍 {address.city}, {address.street}</p>
      <p className="text-gray-700">📞 {phone}</p>
      <p className="text-gray-700">🔗 {website}</p>
      <div className="mt-4">
        <h3 className="font-semibold">🏢 {company.name}</h3>
        <p className="text-sm italic text-gray-500">{company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;
