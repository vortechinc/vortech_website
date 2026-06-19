import React from 'react';
import { Loader2 } from 'lucide-react';
import { sizes } from '@/utils/constants';

const Loading = () => {
  return (
    <div className="bg-dark-black flex min-h-screen flex-col items-center justify-center">
      <Loader2 size={sizes.SIZE_32} className="animate-spin text-white" />
      <span className="mt-4 text-lg text-white">loading...</span>
    </div>
  );
};

export default Loading;
