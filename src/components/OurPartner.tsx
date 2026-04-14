import React from 'react';
import Image from 'next/image';

interface OurPartnerProps {
  imageURL: string;
}

const OurPartner = ({ imageURL }: OurPartnerProps) => {
  return (
    <div className="flex w-3xl items-center justify-center rounded-lg bg-white shadow-md md:min-h-[300px]">
      <Image
        src={imageURL}
        alt={imageURL}
        width={500}
        height={500}
        className="rounded-lg object-contain transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};

export default OurPartner;
