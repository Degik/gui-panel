import React from 'react';
import { useNavigate } from 'react-router-dom';

interface SidebarItemProps {
  icon: string;
  text: string;
  path: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
      <div
          onClick={handleClick}
          className="flex items-center p-2 rounded-lg cursor-pointer hover:bg-gray-100 transition"
      >
        <img src={icon} alt={text} className="w-5 h-5 mr-3" />
        <span className="text-sm text-gray-700">{text}</span>
      </div>
  );
};

export default SidebarItem;
