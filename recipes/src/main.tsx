import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { RecipeProvider } from "./providers/RecipeContext.tsx";
import { UserProvider } from "./providers/UserContext.tsx";
import { HeaderProvider } from "./providers/HeaderContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <RecipeProvider>
          <HeaderProvider>
            <App />
          </HeaderProvider>
        </RecipeProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
