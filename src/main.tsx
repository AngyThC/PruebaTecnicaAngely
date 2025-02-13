import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const container = document.getElementById('root');

if (container) {
  createRoot(container).render(
    <Auth0Provider
      domain="dev-liasfkyc8wblsigm.us.auth0.com"
      clientId="u7QqtM0mKJI70glSevRG740xx9ENGmtK"
      authorizationParams={{ 
        redirect_uri: window.location.origin,
        scope: "openid profile email offline_access" 
      }}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      <App />
    </Auth0Provider>
  );
} else {
  console.error("No se encontró el elemento con id 'root'");
}
