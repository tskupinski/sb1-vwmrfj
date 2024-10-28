import React from 'react';
import { Link } from 'react-router-dom';
import { Dog } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center">
            <Dog className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-xl font-bold text-gray-900">Co Pies Może Jeść?</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;