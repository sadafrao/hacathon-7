
// components/Label.tsx
import React from 'react';

const Label: React.FC = () => {
  return (
    <div className="w-[1440px] h-[141px] bg-gray-200 flex justify-between items-center px-10 mx-auto mb-4"> {/* Added margin-bottom */}
      <div className="text-xl font-bold text-gray-700">
        High fidelity Dashboard - Home Rent 
    
      </div>

      <div className="text-xl font-bold text-gray-700">
    Last Updatd # Aug 2022
      </div>
    </div>
  );
};

export default Label;
