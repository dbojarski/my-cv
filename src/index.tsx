import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import { AuthGuard } from './components/AuthGuard/AuthGuard';
import { Authentication, Home } from './pages';
import store from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route
              path='/'
              element={
                <AuthGuard>
                  <Home />
                </AuthGuard>
              }
            />
            <Route path='/authentication' element={<Authentication />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
