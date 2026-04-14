import React from 'react';
import TechnologySection from './TechnologySection';
import { images_src } from '@/utils/constants';

const TechnologyBanner = () => {
  return (
    <div className="relative h-[200vh] w-full bg-gray-50 md:h-full">
      <div className="flex h-full flex-col md:flex-row md:gap-x-8">
        <TechnologySection
          index={0}
          title="On The Road Safety"
          description="Engineered to drive autonomously, the Volaso delivery robot uses Perception Enabled Sensors to make decisions with environmental awareness, efficiency and safety."
          imageURL={images_src.MISSION_IMAGE_1}
        />
        <TechnologySection
          index={1}
          className="md:mt-18"
          title="On The Road Safety"
          description="Engineered to drive autonomously, the Volaso delivery robot uses Perception Enabled Sensors to make decisions with environmental awareness, efficiency and safety."
          imageURL={images_src.MISSION_IMAGE_2}
        />
      </div>
    </div>
  );
};

export default TechnologyBanner;
