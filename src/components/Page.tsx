import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { hideBackButton, onBackButtonClick, showBackButton } from '@telegram-apps/sdk-react';

export function Page({ children, back = true }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (back) {
      showBackButton();
      return onBackButtonClick(() => {
        navigate(-1);
      });
    }
    hideBackButton();
  }, [back]);

  return <div className='container'>{children}</div>;
}