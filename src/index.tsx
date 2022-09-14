import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { AuthGuard } from './components/AuthGuard/AuthGuard';
import { Pages } from './constants/routes.constants';
import { Authentication, Home } from './pages';
import { PersonalInformation } from './pages/Profile/PersonalInformation/PersonalInformation';
import { Profile } from './pages/Profile/Profile';
import { Skills } from './pages/Profile/Skills/Skills';
import { initStore } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const { store, persistor } = initStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route element={<App />}>
              <Route
                index
                element={
                  <AuthGuard>
                    <Home />
                  </AuthGuard>
                }
              />
              <Route
                path={Pages.profile}
                element={
                  <AuthGuard>
                    <Profile />
                  </AuthGuard>
                }
              >
                <Route index element={<PersonalInformation />} />
                <Route path={Pages.profileSkills} element={<Skills />} />
              </Route>
              <Route path={Pages.authentication} element={<Authentication />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
