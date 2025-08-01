import type { FC } from 'react';

import { BackB }

export interface IconButtonProps {
  src: string;
  alt: string; 
  onClick?: () => {};
  className?: string; 
  style: {},
  disabled: boolean,
  width: string,
  height: string,
  hoverEffect: boolean
};

export const IconButton: FC<IconButtonProps> = ({ 
  src, 
  alt = "Button", 
  onClick, 
  className = "", 
  style = {},
  disabled = false,
  width = "auto",
  height = "auto",
  hoverEffect = true
}) => {
  const baseStyles = {
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: hoverEffect ? 'transform 0.2s ease-in-out, opacity 0.2s ease-in-out' : 'none',
    opacity: disabled ? 0.5 : 1,
    width,
    height,
    position: 'relative',
    ...style
  };

  const handleClick = (e: any) => {
    if (!disabled && onClick) {
      onClick(e);
    }
  };

  const handleMouseEnter = (e) => {
    if (hoverEffect && !disabled) {
      e.target.style.transform = 'scale(1.05)';
    }
  };

  const handleMouseLeave = (e) => {
    if (hoverEffect && !disabled) {
      e.target.style.transform = 'scale(1)';
    }
  };

  return (
    <img 
      src={`/fae-arcade-mini-app${src}`}
      alt={alt}
      className={className}
      style={baseStyles}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      draggable='false'
    />
  );
};
