import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "../LoginButton.css";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated  } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile"); 
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="login-container">
      <h2>Bienvenido</h2>
      <p>Inicia sesión para continuar</p>
      <button className="login-button" onClick={() => loginWithRedirect()}>
        Log In
      </button>
    </div>
  );
};

export default LoginButton;