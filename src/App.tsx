import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import Profile from "./components/Profile";
import useAuthToken from "../hooks/useAuthToken";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
};


const App = () => {
  useAuthToken();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginButton />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default App;
