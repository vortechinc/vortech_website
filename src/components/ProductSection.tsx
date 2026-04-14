import Image from 'next/image';
import BodyText from './common/BodyText';

interface ProductSectionProps {
  title: string;
  image: string;
  desc: string;
  className?: string;
  style?: React.CSSProperties;
}

const ProductSection = ({
  title,
  image,
  desc,
  className,
  style
}: ProductSectionProps) => {
  return (
    <div className={`rounded-2xl ${className}`} style={style}>
      <div className="bg-gray-light flex flex-col overflow-visible rounded-2xl px-2 py-3 shadow-md sm:rounded-3xl sm:px-4 sm:py-6 md:grid md:grid-cols-2 md:gap-8 md:px-8 md:py-12 lg:px-12 lg:py-32">
        <div className="order-1 md:hidden">
          {title && (
            <>
              <div className="pb-1 text-xl font-bold text-white uppercase sm:pb-2 md:text-4xl">
                {title}
              </div>
              <hr className="mb-2 border border-[#1F1F1F] sm:mb-4" />
            </>
          )}
        </div>
        <div className="relative order-2 h-[150px] w-full sm:h-[280px] md:h-[500px]">
          <Image
            src={image}
            alt={title}
            fill
            className="rounded-md object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="order-3 flex flex-1 flex-col justify-start space-y-2 sm:space-y-4 md:order-1 md:space-y-6">
          <div className="hidden md:block">
            {title && (
              <>
                <div className="pb-2 text-2xl font-bold text-white uppercase md:text-4xl">
                  {title}
                </div>
                <hr className="mb-4 border border-[#1F1F1F]" />
              </>
            )}
          </div>
          <div className="mt-2 space-y-1 sm:mt-4 sm:space-y-2 md:mt-0 md:space-y-4">
            <BodyText text={desc} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductSection;
