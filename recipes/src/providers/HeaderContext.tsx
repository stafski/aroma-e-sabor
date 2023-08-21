import { createContext, useContext, useState } from "react";
import { RecipeContext } from "./RecipeContext";
import { UserContext } from "./UserContext";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { z } from "zod";
import { SubmitHandler } from "react-hook-form";

const schema = z.object({
    email: z
      .string()
      .nonempty("Login é obrigatório")
      .email("Formato inválido de e-mail"),
    password: z
      .string()
      .nonempty("Senha é obrigatória")
  }
);

export type TSchemaLoginForm = z.infer<typeof schema>;

interface IHeaderContext {
    modalMenu: boolean;
    setModalMenu: React.Dispatch<React.SetStateAction<boolean>>;
    handleLogin: SubmitHandler<{email: string; password: string;}>;
    handleLogout: () => void;
    handleModalFavorites: () => void;
}

interface IHeaderProviderProps {
    children: React.ReactNode;
}

export const HeaderContext = createContext({} as IHeaderContext);

export const HeaderProvider = ({ children }: IHeaderProviderProps) => {
    const { connected, setConnected, setModalFavorites } = useContext(RecipeContext);
    const { setUser } = useContext(UserContext);
    const [ modalMenu, setModalMenu ] = useState(false);

    const handleLogin: SubmitHandler<TSchemaLoginForm> = async (formData) => {
        try {
          const { data } = await api.post(`/login`, formData);
          setUser(data.user);
          localStorage.setItem("@TOKEN", data.accessToken);
          localStorage.setItem("@USERID", JSON.stringify(data.user.id));
          setConnected(true);
          toast.success("Login Realizado com sucesso!");
        } catch (error) {
          console.log(error);
          toast.error("Verifique as informações e tente novamente.");
        }
    };

    const handleLogout = ()=>{
        localStorage.removeItem("@USERID");
        localStorage.removeItem("@TOKEN");
        setUser(null);
        setConnected(false);
        window.location.reload();
        toast.success("Logout Realizado com sucesso!");
    };

    const handleModalFavorites = ()=>{
        if(connected){
            setModalFavorites(true);
        }else{
            console.log("Nenhum usuário conectado!");
        }
    }

    return(
        <HeaderContext.Provider value={{ modalMenu, setModalMenu, handleLogin, handleLogout, handleModalFavorites }}>
            {children}
        </HeaderContext.Provider>
    )
}