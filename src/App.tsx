import React from 'react';

import { AppContainer, GlobalStyles, Meme } from './App.styles';

function App() {
  return (
    <>
      <GlobalStyles />

      <AppContainer>
        <Meme src='https://fabrykamemow.pl/uimages/services/fabrykamemow/i18n/pl_PL/201209/1347799555_by_hubi777_500.jpg' />
      </AppContainer>
    </>
  );
}

export default App;
