import React from 'react';
import { ROUTES } from './routes';
import { useRoutes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

function App() {
  const routes = useRoutes(ROUTES);

  return (
    <>
      <ScrollToTop />
      {routes}
    </>
  );
}

export default App;
