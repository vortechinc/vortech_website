import { images_src } from '@/utils/constants';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface JobItemProps {
  id: string;
  jobName: string;
  level?: string;
  location?: string;
  imageUrl: string;
}

const JobItem = ({ id, jobName, level, location, imageUrl }: JobItemProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/career/${id}`);
  };

  return (
    <div
      className="bg-gray-light flex w-full cursor-pointer items-center gap-3 rounded-2xl border border-[#606060] p-3 shadow-sm sm:gap-4 sm:p-4"
      onClick={handleClick}
    >
      <div className="h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
        <Image
          src={imageUrl || images_src.DEFAULT_JOB_IMAGE}
          alt="Job Logo"
          width={64}
          height={64}
          className="h-full w-full rounded-xl object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-[4px] pl-6">
        <p className="text-lg font-bold text-white lg:text-2xl">{jobName}</p>
        {level && (
          <p className="text-sm font-medium text-white md:text-base">{level}</p>
        )}
        {location && (
          <div className="w-fit rounded-md bg-[#F9F9F9] px-4 py-1 text-sm text-black">
            {location}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobItem;
