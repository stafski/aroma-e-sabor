import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import axios from "axios";
import { INewRecipe } from "../pages/newRecipe/NewRecipe";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "./UserContext";
import { Loading } from "../fragments/Loading";

export interface IRecipes {
  id: number;
  image: string;
  title: string;
  ingredients: string[];
  directions: string;
  userId: number;
}

export interface IFavorites {
  recipeId: number;
  userId: number;
  id: number;
  recipe: IRecipes;
}

interface IRecipeContext {
  recipes: IRecipes[] | null;
  setRecipes: React.Dispatch<React.SetStateAction<IRecipes[] | null>>;
  connected: boolean;
  setConnected: React.Dispatch<React.SetStateAction<boolean>>;
  favorites: IFavorites[] | null;
  loading: boolean;
  setFavorites: React.Dispatch<React.SetStateAction<IFavorites[] | null>>;
  handleHeart: (id: number, title: string) => void;
  handleRegisterFavorites: (recipeId: number) => Promise<void>;
  handleDeleteFavorites: (response: IFavorites) => Promise<void>;
  showRecipe: IRecipes | null;
  setShowRecipe: React.Dispatch<React.SetStateAction<IRecipes | null>>;
  modalFavorites: boolean;
  setModalFavorites: React.Dispatch<React.SetStateAction<boolean>>;
  searchFavorites: () => Promise<void>;
  handleRegisterRecipe: (newRecipe: INewRecipe) => Promise<void>;
  updateRecipes: IRecipes | null;
  setUpdateRecipes: React.Dispatch<React.SetStateAction<IRecipes | null>>;
  handleUpdateRecipe: (recipeNewData: INewRecipe, IdRecipe: number) => Promise<void>;
  handleDeleteRecipe: (IdRecipe: number) => Promise<void>;
  searchProduct: (data: ITitle) => void;
  filteredRecipes: IRecipes[] | null;
  setFilteredRecipes: React.Dispatch<React.SetStateAction<IRecipes[] | null>>;
}

interface IRecipeProviderProps {
  children: React.ReactNode;
}
export interface ITitle {
  title: string;
}

export const RecipeContext = createContext({} as IRecipeContext);

export const RecipeProvider = ({ children }: IRecipeProviderProps) => {
  const [recipes, setRecipes] = useState<IRecipes[] | null>(null);
  const [updateRecipes, setUpdateRecipes] = useState<IRecipes | null>(null);
  const [favorites, setFavorites] = useState<IFavorites[] | null>(null);
  const [connected, setConnected] = useState(localStorage.getItem("@USERID") ? true : false);
  const [showRecipe, setShowRecipe] = useState<IRecipes | null>(null);
  const [modalFavorites, setModalFavorites] = useState(false);
  const { user, setUser, loading } = useContext(UserContext);
  const navigate = useNavigate();
  const [filteredRecipes, setFilteredRecipes] = useState<IRecipes[] | null>(null);

  const loadApi = async () => {
    try {
      const response = await api.get("/recipes");
      setRecipes(response.data);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      setConnected(true);
    } else {
      setConnected(false);
    }
  }, [user]);

  useEffect(() => {
    loadApi();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const id = localStorage.getItem("@USERID");
    if (token != null && id != null) {
      const refresh = async () => {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        try {
          const response = await api.get(`/users/${id}`);
          setUser(response.data);
          setConnected(true);
        } catch (error) {
          console.log(error);
        }
      };
      refresh();
    }
  }, []);

  const searchFavorites = async () => {
    const token = localStorage.getItem("@TOKEN");
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    const id = localStorage.getItem("@USERID");
    try {
      const response = await api.get(`/favorites?_expand=recipe&userId=${id}`);
      setFavorites(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (
          error.response?.data ==
          "Private resource access: entity must have a reference to the owner id"
        ) {
          setFavorites([]);
          // console.log("O usuário atual não possui favoritos cadastrados");
        } else {
          // console.log(error);
          localStorage.removeItem("@USERID");
          localStorage.removeItem("@TOKEN");
          setConnected(false);
        }
      }
    }
  };

  const searchProduct = (data: ITitle) => {
    if (recipes !== null) {
      const recipesFound = recipes.filter((recipe) => {
        return data.title === ""
          ? true
          : recipe.title.toLowerCase().includes(data.title.toLowerCase());
      });
      setRecipes(recipesFound);
    }
  };

  const handleRegisterFavorites = async (recipeId: number) => {
    const token = localStorage.getItem("@TOKEN");
    const userId = localStorage.getItem("@USERID");
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    const body = { recipeId: recipeId, userId: Number(userId) };
    try {
      await api.post("/favorites", body);
      searchFavorites();
    } catch (error) {
      // console.log(error);
      localStorage.removeItem("@USERID");
      localStorage.removeItem("@TOKEN");
      setConnected(false);
    }
  };

  const handleHeart = (id: number, title: string) => {
    if (connected) {
      if (favorites?.find((current) => current.recipeId == id) != undefined) {
        const response = favorites.find((current) => current.recipeId == id);
        if (response != undefined) {
          handleDeleteFavorites(response);
        }
        toast.success(`${title} removido dos favoritos!`);
      } else {
        handleRegisterFavorites(id);
        toast.success(`${title} adicionado aos favoritos!`);
      }
    } else {
      toast.error(`Você deve estar conectado para adicionar aos favoritos!`);
    }
  };

  const handleDeleteFavorites = async (response: IFavorites) => {
    const token = localStorage.getItem("@TOKEN");
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    try {
      await api.delete(`/favorites/${response.id}`);
      searchFavorites();
    } catch (error) {
      localStorage.removeItem("@USERID");
      localStorage.removeItem("@TOKEN");
      setConnected(false);
      setModalFavorites(false);
      toast.error("Ops! Algo deu errado.", {
        autoClose: 2000,
      });
    }
  };

  const handleRegisterRecipe = async (newRecipe: INewRecipe) => {
    const token = localStorage.getItem("@TOKEN");
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    try {
      await api.post("/recipes", newRecipe);
      toast.success("Receita criada com sucesso");
      loadApi();
      navigate("/");
    } catch (error) {
      // console.log(error);
    }
  };

  const handleUpdateRecipe = async (recipeNewData: INewRecipe, IdRecipe: number) => {
    const token = localStorage.getItem("@TOKEN");
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    try {
      await api.put(`/recipes/${IdRecipe}`, recipeNewData);
      toast.success("Receita atualizada com sucesso");
      navigate("/");
    } catch (error) {
      // console.log(error);
    } finally {
      loadApi();
    }
  };

  const handleDeleteRecipe = async (IdRecipe: number) => {
    const token = localStorage.getItem("@TOKEN");
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    try {
      await api.delete(`/recipes/${IdRecipe}`);
      toast.success("Receita deletada com sucesso");
      navigate("/");
    } catch (error) {
      // console.log(error);
    } finally {
      loadApi();
      searchFavorites();
    }
  };

  useEffect(() => {
    if (connected == true) {
      searchFavorites();
    }
  }, [connected]);

  return (
    <>
      {loading === true ? <Loading /> : ""}
      <RecipeContext.Provider
        value={{
          recipes,
          setRecipes,
          connected,
          setConnected,
          favorites,
          setFavorites,
          handleHeart,
          handleRegisterFavorites,
          handleDeleteFavorites,
          showRecipe,
          setShowRecipe,
          modalFavorites,
          setModalFavorites,
          searchFavorites,
          handleRegisterRecipe,
          updateRecipes,
          setUpdateRecipes,
          handleUpdateRecipe,
          handleDeleteRecipe,
          searchProduct,
          loading,
          filteredRecipes,
          setFilteredRecipes,
        }}
      >
        {children}
      </RecipeContext.Provider>
    </>
  );
};
