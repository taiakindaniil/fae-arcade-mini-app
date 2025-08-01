import { type FC, type ReactNode } from 'react';
import './BackInnerContainer.css';

interface BackPanelProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const BackInnerContainer: FC<BackPanelProps> = ({ 
  children, 
  className = '', 
  style = {} 
}) => {

  return (
    <div 
      className={`back-inner-container ${className}`.trim()}
      style={style}
    >
        {children}
    </div>
  );
};
