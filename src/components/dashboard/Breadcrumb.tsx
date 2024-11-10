import React from 'react';

interface BreadcrumbItem {
  label: string;
  href: string;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 items-center text-sm leading-none whitespace-nowrap rounded-lg">
      {items.map((item, index) => (
        <React.Fragment key={item.label}>
          {index > 0 && <span className="text-black text-opacity-20">/</span>}
          <a
            href={item.href}
            className={`flex gap-1 justify-center items-center self-stretch px-2 py-1 my-auto text-center rounded-lg ${
              item.active ? 'text-black' : 'text-black text-opacity-40'
            }`}
            aria-current={item.active ? 'page' : undefined}
          >
            {item.label}
          </a>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;