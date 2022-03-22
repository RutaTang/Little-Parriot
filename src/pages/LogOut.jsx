import { useNavigate } from "react-router-dom";
import { useEffect,useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";

const LogOut = () => {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("user");
		setUser(null);
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  }, []);
  return (
    <div>
      <h1>Log Out</h1>
      <p>You have been signed out</p>
      <p>You will be automatically navigated to login in a few seconds</p>
    </div>
  );
};

export default LogOut;
