import Header from '@/components/common/Header';
import { EMAIL_ADDRESS, images_src } from '@/utils/constants';
import { CONTACT } from '@/utils/lang';
import { Mail } from 'lucide-react';
import Image from 'next/image';

const page = () => {
  return (
    <div className="bg-dark-black h-full w-full">
      <Header />
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-6 px-8 py-8 md:grid md:min-h-[80vh] md:grid-cols-2 md:gap-12 md:py-20">
        <div className="mt-12 flex h-full items-center justify-center md:mt-0">
          <Image
            src={images_src.CONTACT_IMAGE}
            alt="Contact Illustration"
            width={800}
            height={800}
            className="h-full w-full object-cover"
            priority
          />
        </div>

        <div className="flex h-full flex-col justify-center text-left">
          <h1 className="mb-4 text-3xl font-bold text-white sm:mb-6 sm:text-4xl md:mb-8 md:text-5xl lg:text-6xl">
            Get in touch
          </h1>
          <p className="mb-4 max-w-xl text-base leading-[140%] font-medium text-white sm:mb-6 sm:text-lg md:text-xl">
            For inquiries, questions, or project feedback, please contact us via
            email. Our team will respond promptly.
          </p>
          <div className="mb-4 w-full max-w-xl space-y-2 sm:mb-4">
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="mt-1">
                <Mail className="h-5 w-5 text-red-500 sm:h-6 sm:w-6" />
              </div>
              <div className="flex flex-col">
                <span className="mb-2 text-sm font-semibold text-white sm:text-base md:text-lg lg:text-xl">
                  Email us:{' '}
                  <span className="text-sm font-light text-white sm:text-base md:text-lg lg:text-xl">
                    {EMAIL_ADDRESS}
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col">
            <div className="flex w-full justify-center">
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="rounded-md bg-red-500 px-6 py-2 text-base font-semibold text-white transition-colors duration-200 hover:bg-red-600 sm:px-8 sm:py-3 sm:text-lg md:px-12 lg:px-18"
              >
                {CONTACT}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
