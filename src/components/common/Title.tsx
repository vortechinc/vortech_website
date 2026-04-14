import { cn } from '@/utils/cn';

interface TitleProps {
  title?: string;
  className?: string;
}

const Title = ({ title, className }: TitleProps) => {
  return (
    <h1
      className={cn(
        'text-2xl leading-[30px] font-bold tracking-normal text-white sm:text-3xl sm:leading-[38px] md:text-4xl md:leading-[48px] lg:text-5xl lg:leading-[59px] xl:text-6xl xl:leading-[70px]',
        className
      )}
    >
      {title}
    </h1>
  );
};

export default Title;
