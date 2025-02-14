import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const CheckAuth = () => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  useEffect(() => {
    const fetchToken = async () => {
      if (isAuthenticated) {
        try {
          const token = await getAccessTokenSilently();
          //console.log("Nuevo Access Token:", token);
        } catch (error) {
          console.error("Error obteniendo el token:", error);
        }
      }
    };

    fetchToken();
  }, [isAuthenticated, getAccessTokenSilently]);

  return null;
};

export default CheckAuth;