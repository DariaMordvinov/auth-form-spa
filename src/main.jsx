import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { AppContextWrapper } from '@/context/AppContext.jsx';

import('./mocks/browser').then(({ worker }) => {
  worker.start({
    serviceWorker: {
      url: '/auth-form-spa/mockServiceWorker.js',
    },
  });
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppContextWrapper>
      <App />
    </AppContextWrapper>
  </React.StrictMode>,
)
