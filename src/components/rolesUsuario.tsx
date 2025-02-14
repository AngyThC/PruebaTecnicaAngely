import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { jwtDecode } from "jwt-decode";

const UserRoles = () => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [roles, setRoles] = useState<string[]>([]);

  useEffect(() => {
    const fetchRoles = async () => {
        if (isAuthenticated) {
          try {
            const token = await getAccessTokenSilently();
            if (!token || token.split(".").length !== 3) {
              console.error("Error: El token recibido no es un JWT válido:", token);
              return;
            }    
            const decodedToken: any = jwtDecode(token);
            //console.log("Token Decodificado:", decodedToken);     
            const userRoles = decodedToken["https://btz-company.com/roles"] || []; 
            setRoles(userRoles);
          } catch (error) {
            console.error("Error obteniendo los roles:", error);
          }
        }
      };

    fetchRoles();
  }, [isAuthenticated, getAccessTokenSilently]);

  return (
    <div className="roles-container">
      <h3>Roles del Usuario:</h3>
      {roles.length > 0 ? (
        <ul>
          {roles.map((role, index) => (
            <li key={index}>{role}</li>
          ))}
        </ul>
      ) : (
        <p>No se encontraron roles.</p>
      )}
    </div>
  );
};

export default UserRoles;
