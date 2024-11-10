import React from 'react';
import SidebarSection from './SidebarSection';
import SidebarItem from './SidebarItem';

const DashboardSidebar: React.FC = () => {
  return (
    <nav className="flex flex-col items-center px-3 pt-4 max-w-full bg-white border-r border-black border-opacity-10 pb-[882px] w-[223px] max-md:pb-24">
      <SidebarSection title="Favorites">
        <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/5a1623533feb957ed0356b69b19c86481c64ebf03b9a3e91420e6ce2924e91bd?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130" label="Overview" />
        <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/5a1623533feb957ed0356b69b19c86481c64ebf03b9a3e91420e6ce2924e91bd?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130" label="March Reports" />
      </SidebarSection>

      <SidebarSection title="Dashboards">
        <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/0949995bd2a21ce720d84c11dc64463261305492e6cd6409f1dd6840a7747be9?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130" label="Overview" />
        <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/eaf772e37067af09780cab33ecbf00699526f2539b536d7e2dac43b2122526b2?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130" label="Production Lines" />
        <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/e3b90cb81ae2d13b7f436f0b1eb6c2f6bc7f9ccd539fab9a05bf5ea532afb99f?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130" label="Production Sites" />
      </SidebarSection>

      <SidebarSection title="Pages">
        <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a2d40f2dc06da50836fbfaf464c0a55962656ee10fce9369f212feb80de42c46?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130" label="User Settings" />
        <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/cb7c1de2b136e197f1651cffbbbacb0281af7137538dad2c0ab0fee4449f1b93?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130" label="Reports" />
        <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/cb7c1de2b136e197f1651cffbbbacb0281af7137538dad2c0ab0fee4449f1b93?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130" label="Forecasting" />
        <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a71c21e7b5dfbcb7b600377b94bb0ba6e150f444fca7a9c978d6d84a0e3b8cea?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130" label="Data View" />
      </SidebarSection>
    </nav>
  );
};

export default DashboardSidebar;