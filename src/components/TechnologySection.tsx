'use client';

import { cn } from '@/utils/cn';
import Image from 'next/image';
import SubTitle from './common/SubTitle';
import Description from './common/Description';

interface TechnologySectionProps {
  index: number;
  className?: string;
  title: string;
  description: string;
  imageURL: string;
}

const TechnologySection = ({
  index,
  className,
  title,
  description,
  imageURL
}: TechnologySectionProps) => {
  return (
    <div
      className={cn('sticky top-30 md:static md:px-0', className)}
      style={{ zIndex: index + 1 }}
    >
      <div className="mx-auto flex h-screen max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-lg md:h-full">
        <div className="h-1/2 space-y-4 px-4 py-6 sm:space-y-6 sm:px-6 sm:py-8 md:px-8 md:py-18">
          <SubTitle subTitle={title} className="text-black" />
          <hr className="border-gray-200" />
          <Description text={description} className="text-black" />
        </div>
        <div className="relative aspect-[3/2] h-3/4 w-full overflow-hidden md:h-full">
          <Image
            src={imageURL}
            alt="On the road safety robot"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default TechnologySection;
