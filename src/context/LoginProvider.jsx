import { useState } from "react";
import { useNavigate } from "react-router";
import LoginContext from "./logincontext";

function LoginProvider({ children }) {
  const navigate = useNavigate();

  // const [user, setUser] = useState(null)

  const updateProfile = (newData) => {
    const updateUser = { ...user, ...newData };

    setUser(updateUser);
    localStorage.setItem("user", JSON.stringify(updateUser));
  };

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (userData) => {
    setUser(userData);

    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);

    localStorage.removeItem("user");

    navigate("/");
  };

  const editProfile = () => {
    navigate("/edit-profile");
  };

  return (
    <LoginContext.Provider
      value={{ user, login, logout, editProfile, updateProfile }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
