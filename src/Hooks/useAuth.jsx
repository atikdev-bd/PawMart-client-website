import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
  const contextInfo = useContext(AuthContext);
  return contextInfo;
};
