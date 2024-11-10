import React from 'react';

interface SidebarItemProps {
  icon: string;
  label: string;
  href?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, href = '#' }) => {
  return (
    <a href={href} className="flex flex-wrap gap-1 items-center p-2 mt-1 w-full rounded-xl">
      <img src={icon} alt="" className="object-contain self-stretch my-auto w-4 aspect-square" />
      <span className="self-stretch my-auto text-sm leading-none text-black whitespace-nowrap rounded-lg">
        {label}
      </span>
    </a>
  );
};

export default SidebarItem;