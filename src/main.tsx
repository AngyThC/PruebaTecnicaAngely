import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URI;

const container = document.getElementById("root");

if (container) {
  createRoot(container).render(
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ 
        redirect_uri: redirectUri,
        scope: "openid profile email offline_access" ,
        audience: "https://dev-liasfkyc8wblsigm.us.auth0.com/api/v2/" 
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
