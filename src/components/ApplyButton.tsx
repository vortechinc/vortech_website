'use client';
import { cn } from '@/utils/cn';
import { EMAIL_ADDRESS } from '@/utils/constants';

interface ApplyButtonProps {
  position?: string;
  buttonText: string;
}

const ApplyButton = ({ position, buttonText }: ApplyButtonProps) => {
  const mailtoUrl = position
    ? `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(position)}`
    : `mailto:${EMAIL_ADDRESS}`;

  return (
    <a
      href={mailtoUrl}
      className={cn(
        'bg-red-orange text-red-light hover:border-red-orange hover:text-red-orange my-8 flex w-full cursor-pointer items-center justify-center rounded-full py-4 text-base transition hover:border hover:bg-white md:my-12 md:text-xl lg:text-2xl',
        position ? 'md:w-1/2' : 'md:w-full'
      )}
    >
      {buttonText}
    </a>
  );
};

export default ApplyButton;
