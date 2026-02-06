"use client";

import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Auto-clear error messages after 3.5 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(false);
        setMessage("");
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <Context.Provider
      value={{
        loading,
        error,
        message,
        setLoading,
        setError,
        setMessage,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
