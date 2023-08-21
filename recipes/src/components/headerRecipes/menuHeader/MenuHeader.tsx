import { useContext } from "react"
import { StyleMenuHeader } from "./StyleMenuHeader"
import { RecipeContext } from "../../../providers/RecipeContext"
import { UserContext } from "../../../providers/UserContext";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { HeaderContext } from "../../../providers/HeaderContext";
import { useNavigate } from "react-router-dom";
import exit from "../../../assets/exit.svg";

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

export const MenuHeader = ()=>{
    const { connected, setConnected } = useContext(RecipeContext);
    const { user } = useContext(UserContext);
    const { setModalMenu, handleLogin, handleLogout, handleModalFavorites } = useContext(HeaderContext);
    const navigate = useNavigate();

    const handleRegister = () => {
        setConnected(false);
        navigate(`/register`);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TSchemaLoginForm>({
        resolver: zodResolver(schema),
      }
    );

    const handleClose=()=>{
        setModalMenu(false);
    } 

    return(
        <StyleMenuHeader>
            <div className="divModal">
                <button className="btnClose" onClick={()=>handleClose()}>x</button>
                {connected!=true ? 
                    <form onSubmit={handleSubmit(handleLogin)}>
                            <div className="divAdjust">
                                <div className="divLabel">
                                    <label htmlFor="email">E-mail</label>
                                </div>
                                <input type="email" id="email" {...register("email")} />
                                {errors.email?.message ? ( <p>{errors.email?.message}</p> ) : null}
                            </div>
                            <div className="divAdjust">
                                <div className="divLabel">
                                    <label htmlFor="password">Senha</label>
                                </div>    
                                <input type="password" id="password" {...register("password")} />
                                {errors.password?.message ? ( <p>{errors.password?.message}</p> ) : null}
                            </div>
                            <div className="divAdjust">
                                <button className="btnLogin" type="submit">Login</button>
                            </div>
                            <h5>Ainda não possui uma conta?</h5>
                            <button className="btnLogin" type="button" onClick={()=>handleRegister()}>Cadastre-se</button>
                    </form> :
                    <div className="divInfo">
                        <div className="divAlign">
                            <h3>Olá, {user?.name}!</h3>
                            <h5 onClick={()=>handleModalFavorites()}><u>Meus favoritos</u></h5>
                        </div>
                        <img onClick={()=>handleLogout()} className="imgLogout" src={exit} alt="logout" />
                    </div>
                }
            </div>
        </StyleMenuHeader>
    )
}