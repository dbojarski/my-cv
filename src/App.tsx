import React from 'react';
import { Outlet } from 'react-router-dom';

import { GlobalStyles } from './App.styles';
import { PageWidthGuard } from './assets/styles/Common.styles';
import { Header } from './components/Header/Header';

function App() {
  return (
    <>
      <GlobalStyles />

      <PageWidthGuard>
        <Header />
        <Outlet />
      </PageWidthGuard>
    </>
  );
}

export default App;
