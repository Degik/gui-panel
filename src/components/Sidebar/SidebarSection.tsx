import React from 'react';
import SidebarItem from './SidebarItem';

interface SidebarSectionProps {
    title: string;
    items: { icon: string; text: string; path: string }[];  // 'icon' is now a string referencing the image source
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, items }) => (
    <div className="w-full mb-6">
        <h3 className="text-sm space-y-1 font-bold uppercase text-gray-500 mb-2">{title}</h3>
        <div className="flex flex-col gap-2">
            {items.map((item) => (

                <SidebarItem icon={item.icon} text={item.text} path={item.path} />
            ))}
        </div>
    </div>
);

export default SidebarSection;

