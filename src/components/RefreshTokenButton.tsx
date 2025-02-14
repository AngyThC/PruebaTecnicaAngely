import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const RefreshTokenButton = () => {
  const { getAccessTokenSilently } = useAuth0();

  const handleRefreshToken = async () => {
    try {
        const newToken = await getAccessTokenSilently({
            cacheMode: "off",
          });          
      console.log("🔄 Nuevo Access Token:", newToken);
      alert("Nuevo Access Token obtenido");
    } catch (error) {
      console.error("Error al refrescar el token:", error);
      alert("Error al obtener el nuevo token.");
    }
  };

  return (
    <button className="refresh-button" onClick={handleRefreshToken}>
      🔄 Refrescar Token
    </button>
  );
};

export default RefreshTokenButton;
