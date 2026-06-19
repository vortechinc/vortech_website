import BodyText from '@/components/common/BodyText';
import Container from '@/components/common/Container';
import Description from '@/components/common/Description';
import GlobalMap from '@/components/common/GlobalMap';
import Header from '@/components/common/Header';
import SubTitle from '@/components/common/SubTitle';
import Title from '@/components/common/Title';
import StickyCards from '@/components/StickyCards';
import VortechNumbers from '@/components/VortechNumbers';
import { images_src, ROUTES } from '@/utils/constants';
import {
  HERO_DESCRIPTION,
  HERO_TITLE,
  OF_GAMING,
  OUR_LOCATIONS,
  OUR_PRODUCT_TITLE,
  OUR_SERVICE,
  VISION,
  VISION_DESCRIPTION,
  VISION_TITLE,
  WHY_VORTECH_DESCRIPTION,
  WHY_VORTECH_SUB_TITLE,
  WHY_VORTECH_SUB_TITLE_2,
  WHY_VORTECH_TITLE
} from '@/utils/lang';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-dark-black h-full w-full max-w-screen">
      <Header />
      <div className="flex flex-col gap-12 md:gap-18 xl:gap-20">
        <div className="relative h-screen min-h-[500px] overflow-hidden sm:min-h-[600px] md:min-h-[700px] lg:min-h-screen">
          <div className="relative h-full w-full">
            <Image
              src={images_src.HOMEPAGE_HERO_BANNER}
              alt="Vision Image"
              width={1920}
              height={1080}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 z-10 flex items-center">
              <div className="mx-auto w-full px-6 sm:px-8 md:px-12 lg:px-14 xl:px-32">
                <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                  <div className="text-[28px] leading-tight font-bold tracking-normal text-white sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[70px]">
                    <span>{HERO_TITLE}</span>
                    <span className="block">{OF_GAMING}</span>
                  </div>
                  <Description text={HERO_DESCRIPTION} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Container className="space-y-8 md:space-y-12">
            <div className="px-2 md:px-6">
              <SubTitle subTitle={VISION} />
              <Title title={VISION_TITLE} />
              <div className="flex flex-col md:flex-row md:gap-12">
                <div className="flex w-full items-center justify-start md:w-1/2">
                  <div className="max-w-xl pt-8 md:py-0">
                    <BodyText text={VISION_DESCRIPTION} />
                  </div>
                </div>
                <div className="h-full w-full py-8 md:py-12">
                  <div className="relative flex w-full items-center justify-center">
                    <Image
                      src={images_src.VISION_IMAGE}
                      alt="Vision Image"
                      width={1200}
                      height={800}
                      loading="lazy"
                      className="h-auto rounded-lg object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        <Container className="space-y-8 md:space-y-12">
          <div className="px-2 md:px-6">
            <SubTitle subTitle={OUR_SERVICE} />
            <Title title={OUR_PRODUCT_TITLE} />
          </div>
          <StickyCards />
        </Container>

        <div className="relative bg-black pt-12 md:pt-18">
          <Container className="space-y-8 md:space-y-12">
            <div className="relative z-10 px-2 md:px-6">
              <SubTitle subTitle={WHY_VORTECH_SUB_TITLE} />
              <Title title={WHY_VORTECH_TITLE} className="mb-4 md:mb-8" />

              <h3 className="mb-6 text-xl font-medium text-white md:text-2xl">
                {WHY_VORTECH_SUB_TITLE_2}
              </h3>
              <p className="mb-8 max-w-4xl leading-relaxed text-gray-300">
                {WHY_VORTECH_DESCRIPTION}
              </p>
              <div>
                <a
                  className="bg-orange rounded-lg px-6 py-3 font-semibold text-white transition-colors hover:bg-orange-700"
                  href={ROUTES.CAREER}
                >
                  Explore Careers
                </a>
              </div>
            </div>
          </Container>

          <div className="-mt-20 md:-mt-60">
            <div className="relative w-full">
              <Image
                src={images_src.WHY_VORTECH_IMAGE}
                alt="Why Vortech"
                width={1440}
                height={720}
                className="h-auto w-full object-cover"
                loading="lazy"
              />
              <div className="via-black/30% via-black/10% absolute inset-0 bg-gradient-to-b from-black via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>
          <VortechNumbers />
          <div id="global-map" className="bg-gray-100 pt-12 md:pt-20">
            <Container>
              <div className="px-2 pb-2 text-center md:px-6 md:pb-8">
                <SubTitle subTitle={OUR_LOCATIONS} className="text-gray-500" />
              </div>
            </Container>
            <GlobalMap />
          </div>
        </div>
      </div>
    </div>
  );
}
