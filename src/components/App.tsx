import { useEffect } from 'react';
import { Navigate, Route, Routes, HashRouter, useLocation } from 'react-router-dom';
// import { useSignal, isMiniAppDark } from '@telegram-apps/sdk-react';

import { routes } from '@/navigation/routes';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll to top
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.scrollTop = 0;
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  // const lp = useMemo(() => retrieveLaunchParams(), []);

  return (
    <div>
      <HashRouter>
        <ScrollToTop />
          <Routes>
            {routes.map((route) => <Route key={route.path} {...route} />)}
            <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
      </HashRouter>
    </div>
  );
}