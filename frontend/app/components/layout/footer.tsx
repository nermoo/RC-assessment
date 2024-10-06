import React from 'react';
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

const Footer: React.FC = () => {
  return (
    <footer className="pt-4 mb-2 text-center border-t border-slate-300">
      <div className="flex justify-center gap-4 mb-2">
        <a href="https://github.com/nermoo" target="_blank" rel="noopener noreferrer">
          <GithubOutlined className="text-xl hover:text-gray-500 transition duration-200" />
        </a>
        <a href="https://linkedin.com/in/aravinda-nawarathne" target="_blank" rel="noopener noreferrer">
          <LinkedinOutlined className="text-xl hover:text-gray-500 transition duration-200" />
        </a>
        Aravinda K Nawarathna
      </div>
    </footer>
  );
};

export default Footer;
