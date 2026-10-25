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
  // Proportional height mapping (reduced by 15% for refined proportions)
  const heightMap = {
    sm: 'h-6 sm:h-[27px]',
    md: 'h-[31px] sm:h-[34px] lg:h-[37px]',
    lg: 'h-[41px] sm:h-[48px]',
    xl: 'h-[54px] sm:h-[68px]',
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


