import { cn } from '@/utils/cn';
import Image from 'next/image';
import BodyText from './common/BodyText';
import SubTitle from './common/SubTitle';

interface InformationElementProps {
  imageUrl: string;
  heading?: string;
  description: string;
  reverse: boolean;
  widthImage?: string;
}

const formatDescriptionInfoText = (description: string): React.ReactNode => {
  const formatText = description
    .split(/\. +/)
    .map((sentence, idx, arr) =>
      idx < arr.length - 1 ? sentence + '.' : sentence
    );
  return formatText.map((sentence, idx) => (
    <span key={idx}>
      {sentence}
      {idx < formatText.length - 1 && <br />}
    </span>
  ));
};

const InformationElement = ({
  imageUrl,
  heading,
  description,
  reverse,
  widthImage = 'md:w-1/2'
}: InformationElementProps) => {
  return (
    <div
      className={cn('flex flex-col items-center gap-x-36 gap-y-6 lg:flex-row', {
        'lg:flex-row-reverse': reverse
      })}
    >
      <div className={`mb-8 w-full lg:mb-0 ${widthImage}`}>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-md">
          <Image
            src={imageUrl}
            alt="Product Feature"
            fill
            className="object-cover"
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        {heading && (
          <>
            <SubTitle subTitle={heading} />
            <hr className="mb-4 border-gray-200" />
          </>
        )}
        <BodyText text={formatDescriptionInfoText(description)} />
      </div>
    </div>
  );
};

export default InformationElement;
