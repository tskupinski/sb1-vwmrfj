import React from 'react';
import { AlertCircle } from 'lucide-react';

const Disclaimer: React.FC = () => {
  return (
    <div className="bg-orange-100 sticky top-16 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-center gap-2 text-sm text-orange-800">
          <AlertCircle className="w-4 h-4" />
          <p>W razie wątpliwości zawsze skonsultuj się z weterynarzem.</p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;