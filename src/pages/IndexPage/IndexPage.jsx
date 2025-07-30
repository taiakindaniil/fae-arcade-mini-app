// import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Page } from '@/components/Page';
import { IconButton } from '@/components/IconButton/IconButton';
// import { useApi } from '@/api';

import './IndexPage.css';

export const IndexPage = () => {

//   const api = useApi(); // This sets up the init data automatically

  const navigate = useNavigate();

  return (
    <Page back={false}>

      <div className='main'>
        <img 
          src="/fae-arcade-mini-app/assets/fairy-index.png"
          width={220}
          style={{marginBottom: '30px'}}
        />

        <IconButton 
          src="/assets/buttons/play-button.svg"
          onClick={() => navigate('/hub')}
          width="100px"
          style={{marginBottom: '10px'}}
        />

        <IconButton 
          src="/assets/buttons/compete-button.svg"
          onClick={() => navigate('/compete')}
          height="65px"
        />

        <IconButton 
          src="/assets/buttons/leaderboard-button.svg"
          onClick={() => navigate('/leaderboard')}
          height="65px"
        />
      </div>
    </Page>
  );
};
