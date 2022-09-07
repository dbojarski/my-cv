import React from 'react';
import { Outlet } from 'react-router-dom';

import { GlobalStyles } from './App.styles';

function App() {
  return (
    <>
      <GlobalStyles />
      <Outlet />
    </>
  );
}

export default App;
