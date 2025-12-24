import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import router from "./Router";
import AuthContextWrapper from "./Context/AuthContext";


createRoot(document.getElementById("root")).render(
  <AuthContextWrapper>
  <StrictMode>
    <RouterProvider router={router} />
    
    
  </StrictMode>
  </AuthContextWrapper>
);
