import { type FC} from 'react';
import { useNavigate } from 'react-router-dom';
import './GameItem.css';
import { GameIcon } from '../GameIcon/GameIcon';
import { IconButton } from '../IconButton/IconButton';

interface GameItemProps {
  className?: string;
  style?: React.CSSProperties;
}

export const GameItem: FC<GameItemProps> = ({ 
  className = '', 
  style = {} 
}) => {

  const navigate = useNavigate();

  return (
    <div 
      className={`game-item ${className}`.trim()}
      style={style}
    >
        <GameIcon src='/assets/game-icons/flappy-fae.png' width="90px" />

        <span className='game-item-title'>Flappy Fae</span>
        <span className='game-item-subtitle'>Free to Play</span>

        <IconButton 
          src="/assets/buttons/play-game-button.svg"
          height="30px"
          style={{marginTop: '15px', marginBottom: '-30px'}}
          onClick={() => {navigate('/mode-selection')}}
        />
    </div>
  );
};
