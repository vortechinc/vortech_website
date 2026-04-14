'use client';

import { cn } from '@/utils/cn';
import { images_src, ROUTES } from '@/utils/constants';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface LogoItemProps {
  className?: string;
}

const LogoItem = ({ className }: LogoItemProps) => {
  const router = useRouter();
  const handleLogoClick = () => {
    router.push(ROUTES.HOME);
  };

  return (
    <div
      className={cn(
        'flex items-center gap-2 hover:cursor-pointer md:gap-4',
        className
      )}
      onClick={handleLogoClick}
    >
      <div className="flex h-full w-full flex-shrink-0">
        <Image
          src={images_src.LOGO}
          alt="Logo image"
          height={72}
          width={208}
          className="h-8 w-auto object-contain sm:h-10 md:h-12 lg:h-14"
          priority
          sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, (max-width: 1024px) 180px, 208px"
        />
      </div>
    </div>
  );
};

export default LogoItem;
