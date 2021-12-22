import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Dashboard from "./Dashboard";

export default function PrivateRouter({ children, ...rest }) {
  const { currentUser } = useAuth();
  return currentUser ? <Dashboard /> : <Navigate to="/login" />;
}
