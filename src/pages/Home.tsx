import React from 'react';
import SearchBar from '../components/SearchBar';
import { Dog } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-orange-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <Dog className="h-16 w-16 text-orange-500" />
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Co Pies Może Jeść?
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Sprawdź, czy dane jedzenie jest bezpieczne dla Twojego psa.
        </p>
        <SearchBar />
      </div>
    </div>
  );
};

export default Home;