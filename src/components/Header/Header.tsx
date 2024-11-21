import React from 'react';
import {Link} from "react-router-dom";

interface HeaderProps {
    path: string; // e.g., "/user_settings"
    userAvatar: string;
    userName: string;
    role: string;
}

const formatPath = (path: string): string => {
    // Remove leading or trailing slashes, replace underscores with spaces, and capitalize
    return path
        .replace(/^\/|\/$/g, '') // Trim leading/trailing slashes
        .replace(/[_-]/g, ' ') // Replace both underscores and hyphens with spaces
        .replace(/\b\w/g, char => char.toUpperCase()); // Capitalize each word
};

const Header: React.FC<HeaderProps> = ({path, userAvatar, userName, role }) => {

    // Create an array of path segments
    const pathSegments = path.split('/').filter(Boolean);

    return (
        <header className="flex justify-between items-center px-4 py-5 border-b bg-white border-gray-200">
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
                    {/* Loop through path segments */}
                    {pathSegments.map((segment, index) => (
                        <React.Fragment key={index}>
                            <li>
                                {index < pathSegments.length - 1 ? (
                                    <Link
                                        to={`/${pathSegments.slice(0, index + 1).join('/')}`} // Build link dynamically for each segment
                                        className="text-blue-600 hover:underline"
                                    >
                                        {formatPath(segment)} {/* Format segment to be more readable */}
                                    </Link>
                                ) : (
                                    <span className="text-gray-900">
                                        {formatPath(segment)} {/* Last segment is not a link */}
                                    </span>
                                )}
                            </li>
                            {index < pathSegments.length - 1 && <li className="text-gray-400">/</li>}
                        </React.Fragment>
                    ))}
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