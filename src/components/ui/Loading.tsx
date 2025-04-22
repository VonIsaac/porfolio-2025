import React from 'react';

export default function Loading() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-transparent border-t-blue-400 rounded-full animate-spin flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-transparent border-t-red-400 rounded-full animate-spin" />
        </div>
      </div>
    </div>
  );
}
