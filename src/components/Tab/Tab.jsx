"use client"
import Content from '../Content/Content';
import { useState } from 'react';

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <ul className="flex flex-wrap text-sm font-medium justify-center text-center">
        <li className="mr-2">
          <a
            href="#"
            className={`inline-block px-4 py-3 rounded-lg ${
              activeTab === 0 ? 'bg-blue-500 text-white' : 'text-gray-300'
            }`}
            aria-current="page"
            onClick={() => handleClick(0)}
          >
            Tab 1
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className={`inline-block px-4 py-3 rounded-lg ${
              activeTab === 1 ? 'bg-blue-500 text-white' : 'text-gray-300'
            }`}
            onClick={() => handleClick(1)}
          >
            Tab 2
          </a>
        </li>
        <li className="mr-2">
          <a
            href="#"
            className={`inline-block px-4 py-3 rounded-lg ${
              activeTab === 2 ? 'bg-blue-500 text-white' : 'text-gray-300'
            }`}
            onClick={() => handleClick(2)}
          >
            Tab 3
          </a>
        </li>
      </ul>
      <Content activeTab={activeTab} setActiveTab={setActiveTab} />
    </>
  );
};

export default Tab;
