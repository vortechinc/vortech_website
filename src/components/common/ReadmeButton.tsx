import { READ_MORE } from '@/utils/lang';
import { ArrowRight } from 'lucide-react';
import React from 'react';

const ReadmeButton = () => {
  return (
    <button className="group flex cursor-pointer items-center gap-2 space-x-12 border-b border-black pb-1 text-black hover:text-black">
      <span className="text-sm font-light md:text-base">{READ_MORE}</span>
      <ArrowRight className="lucide-arrow-right h-6 w-6 transition-transform duration-300 group-hover:rotate-[40deg]" />
    </button>
  );
};

export default ReadmeButton;
