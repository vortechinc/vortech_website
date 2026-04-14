'use client';

import { images_src, stats } from '@/utils/constants';
import { COMPANY } from '@/utils/lang';
import Image from 'next/image';
import IconRenderer from './IconRenderer';
import SubTitle from './common/SubTitle';

const VortechNumbers = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Image
        src={images_src.VOR_TECH_NUMBER}
        alt="Vortech Numbers Background"
        fill
        className="absolute inset-0 z-0 h-full w-full object-cover"
        sizes="100vw"
        loading="lazy"
      />
      <div className="absolute inset-0 z-10 bg-black/30" />
      <div className="absolute inset-x-0 top-0 z-15 h-1/3 bg-linear-to-b from-[#1B1B1B] to-transparent" />

      <div className="relative z-20 flex min-h-screen py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">
          <div className="mb-12 md:mb-16">
            <div className="mb-4">
              <SubTitle subTitle={COMPANY} />
            </div>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Vortech in Numbers
            </h2>
            <p className="text-lg font-bold tracking-normal text-gray-300 md:text-[28px] md:leading-[41px]">
              At Vortech, we&apos;re building the future of global software
              outsourcing—backed by scale, strategy, and strong partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative transform text-center transition-all duration-300 hover:scale-105"
              >
                <div className="relative rounded-2xl border border-gray-700/50 bg-[#1B1B1B]/40 p-8 py-14">
                  <div className="mb-6 flex justify-center">
                    <IconRenderer
                      iconType={stat.iconType}
                      size={64}
                      className="text-white"
                    />
                  </div>
                  <div className="mb-4">
                    <div className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
                      {stat.text}
                    </div>
                  </div>

                  <div className="mb-4 text-center text-xl leading-none font-medium tracking-normal text-[#FF5538]">
                    {stat.label}
                  </div>

                  <div className="from-orange absolute bottom-0 left-1/2 h-2 w-[70%] -translate-x-1/2 rounded-t-full bg-gradient-to-r to-red-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VortechNumbers;
