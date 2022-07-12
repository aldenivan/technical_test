import { createContext, useCallback, useContext, useState } from "react";

import { api } from "../services/api";

const AuthContext = createContext({});

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be usesd within an AuthProvider");
  }

  return context;
};

const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [profile, setProfile] = useState([]);
  const [data, setData] = useState(() => {
    const accessToken = localStorage.getItem("@Doit:accessToken");

    if (accessToken) {
      return { accessToken };
    }

    return {};
  });

  const signIn = useCallback(async ({ cpf, password }) => {
    const response = await api.post("/login", { cpf, password });

    const { accessToken } = response.data;

    localStorage.setItem("@Doit:accessToken", accessToken);

    setData(accessToken);
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@Doit:accessToken");

    setData({});
  });

  const loadUsers = useCallback(async (accessToken) => {
    try {
      const response = await api.get("/", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setUsers(response.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const getProfile = useCallback(async (accessToken) => {
    try {
      const response = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setProfile(response.data);
    } catch (err) {
      console.log(err);
    }
  });

  const updateProfile = useCallback(async (data, accessToken) => {
    try {
      const response = await api.patch("/update", data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setProfile(response.data);
    } catch (err) {
      console.log(err);
    }
  });

  const deleteProfile = useCallback(async (accessToken) => {
    try {
      const response = await api.delete("/delete", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setProfile(response.data);
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <AuthContext.Provider
      value={{
        accessToken: data.accessToken,
        signIn,
        signOut,
        loadUsers,
        users,
        getProfile,
        profile,
        updateProfile,
        deleteProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
