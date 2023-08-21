import { StyleHeaderRecipes } from "./StyleHeaderRecipes"
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { toast } from "react-toastify";
import { IRecipes, RecipeContext } from "../../providers/RecipeContext";
import search from "../../assets/search.svg";
import bars from "../../assets/bars.svg";
import exit from "../../assets/exit.svg";
import { MenuHeader } from "./menuHeader/MenuHeader";
import { HeaderContext } from "../../providers/HeaderContext";

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

export const HeaderRecipes = ()=>{
    const { user } = useContext(UserContext);
    const { connected, recipes, setFilteredRecipes } = useContext(RecipeContext);
    const [ found, setFound ] = useState("");
    const { setModalMenu, modalMenu, handleLogin, handleLogout, handleModalFavorites } = useContext(HeaderContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TSchemaLoginForm>({
        resolver: zodResolver(schema),
      }
    );

    function handleSearch() {
        setFilteredRecipes(null);
        if (found.trim() != "" && recipes!=null) {
            const newFound: IRecipes[] = [];
            recipes.forEach((element) => {
                if (element.title.toLowerCase().includes(found.trim().toLowerCase())) {
                    newFound.push(element);
                }
            });
            if (newFound.length > 0) {
                setFilteredRecipes(newFound);
            } else {
                toast.error("Sua pesquisa não retornou nenhum resultado.");
            }
        } else {
          setFilteredRecipes(null);
        }
    }

    return (
        <StyleHeaderRecipes>
            <div>
                <div className="divLogo">
                    <h5>Aroma & Sabor</h5>
                </div>
                <div className="divSearch" onSubmit={(e: React.SyntheticEvent) => { e.preventDefault(); handleSearch(); }}>
                    <div className="divAdjust">
                        <input type="text" className="iSearch" value={found} onChange={
                            (event) => setFound(event.target.value)
                        }/> 
                        <img src={search} alt="lupa"  onClick={()=>handleSearch()}/>
                    </div>
                </div>
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
                    </form>
                : 
                    <div className="divInfo">
                        <div className="divAlign">
                            <h3>Olá, {user?.name}!</h3>
                            <h5 onClick={()=>handleModalFavorites()}><u>Meus favoritos</u></h5>
                        </div>
                        <img onClick={()=>handleLogout()} className="imgLogout" src={exit} alt="logout" />
                    </div>
                }
                <img className="imgMenu" src={bars} alt="menu" onClick={()=>setModalMenu(true)}/>
            </div>
            {modalMenu && <MenuHeader /> }
        </StyleHeaderRecipes>
    )
}
