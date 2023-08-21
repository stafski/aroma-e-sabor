import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { ViewRecipe } from "./pages/viewRecipe/ViewRecipe";
import { NewRecipe } from "./pages/newRecipe/NewRecipe";
import RegisterPage from "./pages/registerPage/registerPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/recipes/:id" element={<ViewRecipe />} />
      <Route path="/newrecipe" element={<NewRecipe />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};
