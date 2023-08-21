import { useContext } from "react";
import { StyleCardFavorites } from "./StyleCardFavorites";
import { IFavorites, RecipeContext } from "../../../providers/RecipeContext";
import { useNavigate } from "react-router-dom";

export interface ICard {
  currencyCard: IFavorites;
}

export const CardFavorites = ({ currencyCard }: ICard) => {
  const { handleDeleteFavorites } = useContext(RecipeContext);
  const navigate = useNavigate();

  const handleRecipe = () => {
    navigate(`/recipes/${currencyCard.recipeId}`);
  };

  return (
    <StyleCardFavorites>
      <div className="divImg" onClick={() => handleRecipe()}>
        <img src={currencyCard.recipe.image} alt={currencyCard.recipe.title} />
      </div>
      <div className="container">
        <div className="divTitle" onClick={() => handleRecipe()}>
          <h3>{currencyCard.recipe.title}</h3>
        </div>
        <div className="divDelete">
          <p onClick={() => handleDeleteFavorites(currencyCard)}>Remover</p>
        </div>
      </div>
    </StyleCardFavorites>
  );
};
