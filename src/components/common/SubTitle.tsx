import { cn } from '@/utils/cn';
import React from 'react';

interface SubTitleProps {
  subTitle?: React.ReactNode;
  className?: string;
}

const SubTitle = ({ subTitle, className = '' }: SubTitleProps) => {
  return (
    <div
      className={cn(
        'text-orange mb-4 text-base font-bold tracking-normal md:text-lg lg:text-[42px]',
        className
      )}
    >
      {subTitle}
    </div>
  );
};

export default SubTitle;
