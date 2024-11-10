import React from 'react';

interface IconButtonProps {
  icon: string;
  tooltip?: string;
  shortcut?: string;
  className?: string;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, tooltip, shortcut, className = '', onClick }) => {
  return (
    <button
      className={`flex relative gap-1 justify-center items-start p-1 w-7 rounded-lg ${className}`}
      onClick={onClick}
      aria-label={tooltip}
    >
      <img src={icon} alt="" className="object-contain self-stretch my-auto w-5 aspect-square" />
      {tooltip && (
        <div className="flex absolute top-2/4 left-2/4 z-0 gap-1 items-center self-start px-2 py-1 text-xs leading-none whitespace-nowrap rounded-lg -translate-x-2/4 -translate-y-2/4 backdrop-blur-[20px] bg-black bg-opacity-80">
          <span className="text-white">{tooltip}</span>
          {shortcut && <span className="text-white text-opacity-40">{shortcut}</span>}
        </div>
      )}
    </button>
  );
};

export default IconButton;