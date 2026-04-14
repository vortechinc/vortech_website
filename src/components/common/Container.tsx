import { cn } from '@/utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={cn(`mx-auto max-w-7xl px-4 md:px-0`, className)}>
      {children}
    </div>
  );
};

export default Container;
