import { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { AuthGuard } from './components/AuthGuard/AuthGuard';
import { Pages } from './constants/routes.constants';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { initStore } from './store/store';

const Authentication = lazy(
  () => import('./pages/Authentication/Authentication')
);

const Home = lazy(() => import('./pages/Home/Home'));
const Profile = lazy(() => import('./pages/Profile/Profile'));
const Personal = lazy(
  () => import('./pages/Profile/PersonalInformation/PersonalInformation')
);
const Skills = lazy(() => import('./pages/Profile/Skills/Skills'));
const Experience = lazy(() => import('./pages/Profile/Experience/Experience'));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const { store, persistor } = initStore();

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route
              index
              element={
                <Suspense>
                  <AuthGuard>
                    <Home />
                  </AuthGuard>
                </Suspense>
              }
            />

            <Route
              path={Pages.profile}
              element={
                <Suspense>
                  <AuthGuard>
                    <Profile />
                  </AuthGuard>
                </Suspense>
              }
            >
              <Route
                index
                element={
                  <Suspense>
                    <Personal />
                  </Suspense>
                }
              />
              <Route
                path={Pages.profileSkills}
                element={
                  <Suspense>
                    <Skills />
                  </Suspense>
                }
              />
              <Route
                path={Pages.profileExperience}
                element={
                  <Suspense>
                    <Experience />
                  </Suspense>
                }
              />
            </Route>

            <Route
              path={Pages.authentication}
              element={
                <Suspense>
                  <Authentication />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
serviceWorkerRegistration.register();
