import { type FC, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '../IconButton/IconButton';
import './BackPanel.css';

interface BackPanelProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  topImage?: 'game-hub' | 'darewing-mode';
}

export const BackPanel: FC<BackPanelProps> = ({ 
  children, 
  className = '', 
  style = {},
  topImage = 'game-hub'
}) => {

  const navigate = useNavigate();

  return (
    <div 
      className={`back-panel ${className}`.trim()}
      style={style}
    >
      <img
        src={`/fae-arcade-mini-app/assets/back-tops/${topImage}.png`}
        className='back-panel-top'
        draggable='false'
        style={{width: '224px'}}
      />

      <div className={`back-panel-container`.trim()}>
        {children}
      </div>

      <div style={{marginBottom: '-50px'}}>
        <IconButton
          src="/assets/buttons/back-button.svg"
          height="60px"
          onClick={() => navigate(-1)}
        />
      </div>
    </div>
  );
};
