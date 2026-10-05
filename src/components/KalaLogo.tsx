import React from 'react';
import siteLogo from '../assets/images/site logo.svg';

interface KalaLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  onClick?: () => void;
}

export const KalaLogo: React.FC<KalaLogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
  onClick,
}) => {
  // Proportional height mapping
  const heightMap = {
    sm: 'h-7 sm:h-8',
    md: 'h-9 sm:h-10 lg:h-11',
    lg: 'h-12 sm:h-14',
    xl: 'h-16 sm:h-20',
  };

  return (
    <div
      id="brand-logo"
      onClick={onClick}
      className={`inline-flex items-center select-none ${
        onClick ? 'cursor-pointer transition-opacity hover:opacity-85' : ''
      } ${className}`}
    >
      <img
        src={siteLogo}
        alt="कला श्रृंखला — Dr. Shivendra Singh"
        className={`${heightMap[size]} w-auto object-contain block`}
        draggable={false}
      />
    </div>
  );
};


