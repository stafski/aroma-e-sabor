import { useContext } from "react";
import { StyledFavorites } from "./StyleFavorites"
import { RecipeContext } from "../../providers/RecipeContext";
import { CardFavorites } from "./cardfavorites/CardFavorites";

export const Favorites = ()=>{
    const { setModalFavorites, favorites } = useContext(RecipeContext);
    
    const handleClose=()=>{
        setModalFavorites(false);
    } 

    return(
        <StyledFavorites>
            <div className="divModal">
                <div className="divHeader">
                    <h2>Receitas Favoritas</h2>
                    <button onClick={()=>handleClose()}>x</button>
                </div>
                <ul>
                    {favorites?.map((currencyCard)=><CardFavorites key={currencyCard.id} currencyCard={currencyCard}/>)} 
                    {favorites?.length==0 ? <h4>Você ainda não adicionou receitas aos favoritos.</h4> : null} 
                </ul>
            </div>
        </StyledFavorites>
    )
};