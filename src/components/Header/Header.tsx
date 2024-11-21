import React from 'react';

interface HeaderProps {
  section: string; // e.g., "User Settings"
  path: string; // e.g., "/user_settings"
  userAvatar: string;
  userName: string;
  role: string;
}

const formatPath = (path: string): string => {
  // Remove leading or trailing slashes, replace underscores with spaces, and capitalize
  return path
      .replace(/^\/|\/$/g, '') // Trim leading/trailing slashes
      .replace(/_/g, ' ') // Replace underscores with spaces
      .replace(/\b\w/g, char => char.toUpperCase()); // Capitalize each word
};

const Header: React.FC<HeaderProps> = ({ section, path, userAvatar, userName, role }) => {
  return (
      <header className="flex justify-between items-center px-4 py-5 border-b border-gray-200">
        <nav aria-label="Breadcrumb" className="flex items-center">
          <button
              className="p-2 bg-transparent border-none cursor-pointer mr-2"
              aria-label="Add to favorites"
          >
            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d221fed1faf3293d443fce0bfd1ac4f1237fe01bd37d307112b2b2c1046a6bb"
                alt="Favorite Icon"
                className="w-5 h-5"
            />
          </button>
          <ol className="flex list-none space-x-2 text-sm text-gray-700">
            <li>
              <a href="#" className="text-blue-600 hover:underline">
                {section}
              </a>
            </li>
            <li className="text-gray-400">/</li>
            <li aria-current="page">
              <a href="#" className="text-gray-900">
                {formatPath(path)}
              </a>
            </li>
          </ol>
        </nav>
        <div className="flex items-center">
          <button
              className="p-2 bg-transparent border-none cursor-pointer mr-2"
              aria-label="Notifications"
          >
            <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e6000a94d38944aa66f553de36c98d945ea357c55a35129d63120550b298eb6"
                alt="Notification Icon"
                className="w-5 h-5"
            />
          </button>
          <img
              src={userAvatar}
              alt="User Avatar"
              className="w-8 h-8 rounded-full mr-2"
          />
          <span className="text-sm text-gray-900">
          {userName} <span className="text-gray-500">({role})</span>
        </span>
        </div>
      </header>
  );
};

export default Header;
