import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { SWRConfig } from 'swr';
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));

if (import.meta.env.MODE === 'development') {
  // When development, setup the MSW.
  // import the worker (under the browser.ts file)
  import('./mocks/browser')
    .then(({ worker }) => {
      // Start the worker.
      worker.start();
    })
    .then(() => {
      // Render the application.
      root.render(
        <GoogleOAuthProvider clientId="783621219436-8lrjsgnio1oapou3aeaf6b43gn80sbvg.apps.googleusercontent.com">
          <SWRConfig
            value={{
              fetcher: url => fetch(url).then(response => response.json()),
            }}
          >
            <RecoilRoot>
              <BrowserRouter>
                <React.StrictMode>
                  <App />
                </React.StrictMode>
              </BrowserRouter>
            </RecoilRoot>
          </SWRConfig>
        </GoogleOAuthProvider>,
      );
    });
} else {
  // Render the application in production without the MSW.
  root.render(
    <GoogleOAuthProvider clientId="783621219436-8lrjsgnio1oapou3aeaf6b43gn80sbvg.apps.googleusercontent.com">
      <SWRConfig
        value={{
          fetcher: url => fetch(url).then(response => response.json()),
        }}
      >
        <RecoilRoot>
          <BrowserRouter>
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </BrowserRouter>
        </RecoilRoot>
      </SWRConfig>
    </GoogleOAuthProvider>,
  );
}
