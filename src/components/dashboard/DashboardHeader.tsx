import React from 'react';
import IconButton from './IconButton';
import Breadcrumb from './Breadcrumb';
import UserProfile from './UserProfile';

const DashboardHeader: React.FC = () => {
  return (
    <header className="flex relative gap-10 justify-between items-start self-end w-full bg-white border-b border-black border-opacity-10 max-w-[1217px] min-h-[76px] max-md:max-w-full">
      <div className="flex absolute top-5 z-0 gap-2 justify-center items-start left-[18px]">
        <IconButton
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/499ee71844dfc0ae43d69d11f41b954d87e562528db6bfc11cabc90f1b04a011?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130"
          tooltip="Favorites"
          shortcut="⌘F"
        />
        <Breadcrumb items={[
          { label: 'Section', href: '#' },
          { label: 'Path', href: '#', active: true }
        ]} />
      </div>
      <div className="flex absolute right-0 z-0 gap-5 items-start bottom-[-108px] min-w-[240px]">
        <div className="flex gap-2.5 items-start rounded-lg min-w-[240px]">
          <IconButton
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/96f433eb037d1cb38627b04fe6a5ba49cbb2c40c3bce1c6eb3e208cb9ef267da?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130"
            tooltip="Activities"
            shortcut="⌘A"
          />
          <IconButton
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/2db95c628e1ed5f64a6129eddf03e844d7e7711a119597871edb9bd93d20d26a?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130"
            className="flex flex-col items-start px-2 pt-1 pb-36 w-7 rounded-lg max-md:pb-24"
          />
          <UserProfile
            avatar="https://cdn.builder.io/api/v1/image/assets/TEMP/57e79c8bd3d39936cea39228d1ee31a14473b1dc9bcd470bf4db445be31efd89?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130"
            name="Factory Floor Manager"
          />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;