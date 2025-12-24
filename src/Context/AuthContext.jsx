import { createContext, useState } from "react";

const AuthContext = createContext(null);

const AuthContextWrapper = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userPrincipal) => {
    if (!userPrincipal) return;

    const { password, ...safeUser } = userPrincipal; // remove password safely

    setUser({
      name: "Abhishek",
      image: "image.png",
      email: safeUser.email,
      ...safeUser,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextWrapper;
export { AuthContext };
