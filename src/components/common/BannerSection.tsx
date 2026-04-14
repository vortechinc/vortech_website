import Image from 'next/image';
import React from 'react';

interface BannerSectionProps {
  imageURL: string;
  children?: React.ReactNode;
}

const BannerSection = ({ imageURL, children }: BannerSectionProps) => {
  return (
    <div className="relative h-screen min-h-screen w-full overflow-hidden">
      <Image
        src={imageURL}
        alt="Volaso Vehicle"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default BannerSection;
