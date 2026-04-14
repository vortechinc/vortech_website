import { cn } from '@/utils/cn';
import React from 'react';

interface DescriptionProps {
  text: React.ReactNode;
  className?: string;
}
const Description = ({ text, className }: DescriptionProps) => {
  return (
    <div
      className={cn(
        'max-w-xl text-sm font-medium tracking-normal text-white sm:text-base md:text-lg lg:text-xl',
        className
      )}
    >
      {text}
    </div>
  );
};

export default Description;
