import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import RefreshTokenButton from "./RefreshTokenButton";
import RolesUsario from "./rolesUsuario";
import "./Profile.css";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="loading">Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profile-container">
        <img className="profile-picture" src={user?.picture} alt={user?.name} />
        <h2 className="profile-name">{user?.name}</h2>
        <p className="profile-email">{user?.email}</p>
        <RolesUsario />
        <RefreshTokenButton />
        <LogoutButton/>
      </div>
    )
  );
};

export default Profile;