import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              WEG
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/services" className="text-gray-600 hover:text-gray-900">
              Leistungen
            </Link>
            <Link to="/privacy" className="text-gray-600 hover:text-gray-900">
              Datenschutz
            </Link>
            <Link to="/imprint" className="text-gray-600 hover:text-gray-900">
              Impressum
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;