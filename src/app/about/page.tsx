import BannerSection from '@/components/common/BannerSection';
import Header from '@/components/common/Header';
import SubTitle from '@/components/common/SubTitle';
import Title from '@/components/common/Title';
import InformationElement from '@/components/InformationElement';
import { images_src } from '@/utils/constants';
import {
  INFORMATION_MISSION_1,
  INFORMATION_MISSION_2,
  OUR_MISSION,
  OUR_MISSION_TITLE
} from '@/utils/lang';

const page = () => {
  return (
    <div className="bg-dark-black h-full w-full">
      <Header />
      <BannerSection imageURL={images_src.ABOUT_BANNER_IMAGE}>
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="translate-y-8 text-center text-5xl leading-tight font-bold text-white sm:text-5xl md:max-w-[70%] md:text-6xl lg:text-7xl">
            GLOBAL VISION POWERED BY PROPRIETARY TECHNOLOGY
          </h1>
        </div>
      </BannerSection>
      <div className="mx-auto mt-16 flex max-w-7xl flex-col px-4 md:px-0 md:pb-0">
        <SubTitle subTitle={OUR_MISSION} />
        <Title title={OUR_MISSION_TITLE} />
        <div className="pt-4 pb-8 md:pt-8 md:pb-12">
          <InformationElement
            imageUrl={images_src.MISSION_IMAGE_1}
            description={INFORMATION_MISSION_1}
            reverse={false}
            widthImage="md:w-2/3"
          />
        </div>
        <Title title="Operational Excellence" />
        <div className="pt-4 pb-8 md:pt-8 md:pb-12">
          <InformationElement
            imageUrl={images_src.MISSION_IMAGE_2}
            description={INFORMATION_MISSION_2}
            reverse={true}
            widthImage="md:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
