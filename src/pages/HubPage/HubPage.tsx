// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Page } from '@/components/Page';
import { BackPanel } from '@/components/BackPanel/BackPanel';
import { BackInnerContainer } from '@/components/BackInnerContainer/BackInnerContainer';
import { GameItem } from '@/components/GameItem/GameItem';
// import { IconButton } from '@/components/IconButton/IconButton';
// import { useApi } from '@/api';

import './HubPage.css';

export const HubPage = () => {

//   const api = useApi(); // This sets up the init data automatically

//   const navigate = useNavigate();

  return (
    <Page back={true}>
      <BackPanel topImage='game-hub'>
        <BackInnerContainer>
          <div className='game-container'>
            <GameItem />
            <GameItem />
          </div>
        </BackInnerContainer>
      </BackPanel>
    </Page>
  );
};
