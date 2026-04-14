import React from 'react';
import Image from 'next/image';

interface IconRendererProps {
  iconType: string;
  size?: number;
  className?: string;
}

const IconRenderer: React.FC<IconRendererProps> = ({
  iconType,
  size = 64,
  className = 'text-white'
}) => {
  const getIconPath = (type: string): string => {
    switch (type) {
      case 'users':
        return '/assets/images/employee-image.png';
      case 'mapPin':
        return '/assets/images/location.png';
      case 'globe':
        return '/assets/images/globe.png';
      case 'dollarSign':
        return '/assets/images/money-image.png';
      default:
        return '/assets/images/logo_icon.png'; // fallback to existing logo
    }
  };

  return (
    <Image
      src={getIconPath(iconType)}
      alt={iconType}
      width={size}
      height={size}
      className={`h-16 w-16 object-contain ${className}`}
    />
  );
};

export default IconRenderer;
