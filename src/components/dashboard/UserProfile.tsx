import React from 'react';

interface UserProfileProps {
  avatar: string;
  name: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ avatar, name }) => {
  return (
    <div className="flex flex-wrap gap-2 items-center px-2 py-0.5 rounded-lg min-h-[28px] w-[235px]">
      <img src={avatar} alt="" className="object-contain self-stretch my-auto w-6 aspect-square rounded-[80px]" />
      <span className="self-stretch my-auto text-sm leading-none text-black rounded-lg w-[151px]">{name}</span>
    </div>
  );
};

export default UserProfile;