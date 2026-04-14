import { cn } from '@/utils/cn';
import React from 'react';

interface BodyTextProps {
  text: React.ReactNode;
  className?: string;
}

const BodyText = ({ text, className }: BodyTextProps) => {
  return (
    <div
      className={cn(
        'max-w-xl text-base leading-[27px] font-normal tracking-[0.02em] text-white',
        className
      )}
    >
      {text}
    </div>
  );
};

export default BodyText;
