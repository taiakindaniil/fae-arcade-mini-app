// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Page } from '@/components/Page';
import { BackPanel } from '@/components/BackPanel/BackPanel';
import { BackInnerContainer } from '@/components/BackInnerContainer/BackInnerContainer';
import { IconButton } from '@/components/IconButton/IconButton';
// import { IconButton } from '@/components/IconButton/IconButton';
// import { useApi } from '@/api';

import './ModeSelectionPage.css';

export const ModeSelectionPage = () => {

//   const api = useApi(); // This sets up the init data automatically

//   const navigate = useNavigate();

  return (
    <Page back={true}>
      <BackPanel topImage='darewing-mode'>

        <div className='info-container'>
          <span>Each mode offers a different balance of risk and reward.</span>
          <span style={{fontSize: '26px', letterSpacing: '-2px'}}>Choose your challenge</span>
        </div>

        <div className='buttons-container'>
          <BackInnerContainer className='game-mode-button-container'>
            <IconButton 
              src="/assets/buttons/game-modes/fairy-glide.svg"
              onClick={() => navigate('/compete')}
              width="237px"
              height="61px"
            />
          </BackInnerContainer>

          <BackInnerContainer className='game-mode-button-container'>
            <IconButton 
              src="/assets/buttons/game-modes/fairy-glide.svg"
              onClick={() => navigate('/compete')}
              height="65px"
            />
          </BackInnerContainer>

          <BackInnerContainer className='game-mode-button-container'>
            <IconButton 
              src="/assets/buttons/game-modes/fairy-glide.svg"
              onClick={() => navigate('/compete')}
              height="65px"
            />
          </BackInnerContainer>
        </div>

      </BackPanel>
    </Page>
  );
};
