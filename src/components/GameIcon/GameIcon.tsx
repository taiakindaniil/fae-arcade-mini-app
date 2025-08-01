import type { FC } from 'react';
import './GameIcon.css';

export interface GameIconProps {
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

export const GameIcon: FC<GameIconProps> = ({ 
  src, 
  alt = "Game Icon", 
  onClick, 
  className = "", 
  style = {},
  disabled = false,
  width = "auto",
  height = "auto",
  hoverEffect = true
}) => {
  const baseStyles = {
    transition: hoverEffect ? 'transform 0.2s ease-in-out, opacity 0.2s ease-in-out' : 'none',
    opacity: disabled ? 0.5 : 1,
    width,
    height,
    ...style
  };

  const handleClick = (e: any) => {
    if (!disabled && onClick) {
      onClick(e);
    }
  };

  return (
    <img 
      src={`/fae-arcade-mini-app${src}`}
      alt={alt}
      className={`game-icon ${className}`.trim()}
      style={baseStyles}
      onClick={handleClick}
      draggable='false'
    />
  );
};
