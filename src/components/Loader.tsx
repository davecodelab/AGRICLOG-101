import React from 'react';

const Loader = () => {
  return (
    <div className="flex flex-row gap-2  min-h-screen items-center justify-center">
      <div className="w-4 h-4 rounded-full bg-farm-green animate-bounce [animation-delay:0.8s]" />
      <div className="w-4 h-4 rounded-full bg-farm-green animate-bounce [animation-delay:.4s]" />
      <div className="w-4 h-4 rounded-full bg-farm-green animate-bounce [animation-delay:.2s]" />
    </div>
  );
}

export default Loader;
