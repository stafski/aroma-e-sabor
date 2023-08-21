import { useState, createContext } from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  useForm,
} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../schemas/registerSchema";
import { api } from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export interface IRegisterValue {
  name: string;
  email: string;
  password: string;
  confirm_Password?: string;
}
export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IIUser {
  id: string;
  name: string;
  email: string;
}

export interface ILoginValue {
  email: string;
  password: string;
}

export interface IUserContext {
  onSubmit: (data: IRegisterValue) => Promise<void>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  user: IIUser | null;
  setUser: React.Dispatch<React.SetStateAction<IIUser | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
  errors: FieldErrors<FieldValues>;
  userLogin: (data: ILoginValue) => Promise<void>;
  logout: () => void;
  dropDown: boolean;
  setDropDown: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext({} as IUserContext);
export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [user, setUser] = useState<IIUser | null>(
    JSON.parse(localStorage.getItem("accessUser") as string) || null
  );
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  // const requestResult = <T extends { statusText: string }>(
  //   request: T
  // ): void => {
  //   if (request.statusText === "Created") {
  //     toast.success("Cadastro bem sucedido!");
  //     setTimeout(() => {
  //       setLoading(false);
  //       navigate("/");
  //     }, 2000);
  //   }
  // };
  // const onSubmit = async (data: IRegisterValue) => {
  //   setLoading(true);
  //   try {
  //     setLoading(true);
  //     const response = await api.post("/register", data);
  //     requestResult(response);
  //     navigate("/");
  //   } catch (error) {
  //     toast.error("Cadastro mal sucedido!");
  //     setLoading(false);
  //   }
  // };

  const onSubmit = async (data: IRegisterValue) => {
    try {
      // console.log(data);
      setLoading(true);
      const response = await api.post("/register", data);
      // console.log(data);
      setUser(response.data.user);
      toast.success("Conta criada com sucesso!", {
        autoClose: 2000,
      });
      navigate("/");
    } catch (error) {
      // console.log(error);
      toast.error("Ops! Usuário já cadastrado.", {
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (data: ILoginValue) => {
    try {
      setLoading(true);
      const response = await api.post("/login", data);
      if (response.data.accessToken) {
        api.defaults.headers.common.authorization = `Bearer ${response.data.accessToken}`;
        setUser(response.data.user);
        setDropDown(false);
        localStorage.setItem("@TOKEN", response.data.accessToken);
        localStorage.setItem("@USERID", JSON.stringify(response.data.user.id));
        toast.success("Usuario logado com sucesso!");
      }
    } catch (error) {
      // console.log(error);
      toast.error("Ops! Algo deu errado.", {
        autoClose: 2000,
      });
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
  };

  return (
    <UserContext.Provider
      value={{
        register,
        handleSubmit,
        user,
        setUser,
        loading,
        setLoading,
        refresh,
        setRefresh,
        errors,
        onSubmit,
        userLogin,
        logout,
        dropDown,
        setDropDown,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
