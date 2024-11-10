import React from 'react';

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, children }) => {
  return (
    <section className="flex flex-col self-stretch pb-3 mt-2 w-full bg-white">
      <h2 className="px-3 py-1 w-full text-sm leading-none whitespace-nowrap rounded-lg text-black text-opacity-40">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default SidebarSection;