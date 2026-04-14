import BannerSection from '@/components/common/BannerSection';
import Description from '@/components/common/Description';
import Header from '@/components/common/Header';
import SubTitle from '@/components/common/SubTitle';
import Title from '@/components/common/Title';
import InformationElement from '@/components/InformationElement';
import TechnologyBanner from '@/components/TechnologyBanner';
import { images_src, technologyInfoData } from '@/utils/constants';
import {
  PERCEPTION_ENABLED_TECHNOLOGY,
  SEAMLESS_USER_EXPERIENCE,
  TECHNOLOGY_BANNER_TITLE,
  TECHNOLOGY_DESC,
  THE_VOLASO_DIGITAL_PRODUCTS,
  THE_VOLASO_ROBOT
} from '@/utils/lang';

const page = () => {
  return (
    <div className="h-full w-full space-y-12 bg-gray-50 md:space-y-16">
      <Header
        backgroundScrolledColor="bg-white"
        textColor="text-red-orange"
        backgroundButton="bg-red-orange"
        textButtonColor="text-white"
        hoverTextButtonColor="hover:text-red-orange"
        hoverBackgroundButton="hover:bg-white"
        hoverBorderButton="hover:border-red-orange"
      />
      <BannerSection imageURL={images_src.TECHNOLOGY_BANNER_IMAGE}>
        <div className="absolute top-20 left-10 z-10 max-w-[70%] sm:max-w-[60%] md:top-30 lg:left-15 lg:max-w-[70%] xl:left-30 xl:max-w-[45%]">
          <h1 className="text-left text-3xl leading-tight font-light text-black sm:text-5xl md:text-6xl lg:text-7xl">
            {TECHNOLOGY_BANNER_TITLE}
          </h1>
        </div>
      </BannerSection>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 bg-gray-50 px-8 pb-12 md:gap-10 md:px-0 md:pb-0">
        <Title title={THE_VOLASO_ROBOT} className="text-black" />
        <SubTitle
          subTitle={PERCEPTION_ENABLED_TECHNOLOGY}
          className="text-black"
        />
        <div className="flex justify-end">
          <Description
            className="w-full max-w-lg text-black"
            text={TECHNOLOGY_DESC}
          />
        </div>
        <TechnologyBanner />
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 bg-gray-50 px-8 md:gap-10 md:px-0 md:pb-0">
        <Title title={THE_VOLASO_DIGITAL_PRODUCTS} className="text-black" />
        <SubTitle subTitle={SEAMLESS_USER_EXPERIENCE} className="text-black" />
        <div className="flex justify-end">
          <Description
            className="w-full max-w-lg text-black"
            text="We've developed an app so that each robot can deliver goods in residential areas safely and make autonomous decision based on real-time information."
          />
        </div>
        {technologyInfoData.map((infoItem, index) => (
          <InformationElement
            key={index}
            imageUrl={infoItem.imageURL}
            heading={infoItem.heading}
            description={infoItem.description}
            reverse={infoItem.reverse}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
