import { useContext } from "react";
import { Favorites } from "../../components/favorites/Favorites";
import { StyleDashboard } from "./StyleDashboard";
import { CardsContainer } from "./cardscontainer/CardsContainer";
import { RecipeContext } from "../../providers/RecipeContext";
import { HeaderRecipes } from "../../components/headerRecipes/HeaderRecipes";

export const Dashboard = () =>{
    const { modalFavorites } = useContext(RecipeContext);
    
    return( 
        <StyleDashboard>
            <HeaderRecipes />
            <CardsContainer />
            {modalFavorites && <Favorites />}
        </StyleDashboard>  
    )
};