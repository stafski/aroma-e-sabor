import { StyleCard } from "./StyleCard";
import { IRecipes, RecipeContext } from "../../providers/RecipeContext";
import { toast } from "react-toastify";
import heart from "../../assets/heart.svg";
import emptyHeart from "../../assets/emptyHeart.svg";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

interface ICardProps {
  element: IRecipes;
}

export const Card = ({ element }: ICardProps) => {
  const { connected, favorites, handleRegisterFavorites, handleDeleteFavorites } =
    useContext(RecipeContext);
  const navigate = useNavigate();

  const handleCard = () => {
    navigate(`/recipes/${element.id}`);
  };

  const handleHeart = () => {
    if (connected) {
      if (
        favorites?.find((current) => current.recipeId == element.id) !=
        undefined
      ) {
        const response = favorites.find(
          (current) => current.recipeId == element.id
        );
        if (response != undefined) {
          handleDeleteFavorites(response);
        }
        toast.success(`${element.title} removido dos favoritos!`);
      } else {
        handleRegisterFavorites(element.id);
        toast.success(`${element.title} adicionado aos favoritos!`);
      }
    } else {
      toast.error(`Você deve estar conectado para adicionar aos favoritos!`);
    }
  };

  if (element != null) {
    return (
      <StyleCard>
        <img
          src={element.image}
          alt={element.title}
          onClick={() => handleCard()}
        />
        <div className="divTitle">
          <div className="left" onClick={() => handleCard()}>
            <h1>{element.title}</h1>
          </div>
          <div className="rigth" onClick={() => handleHeart()}>
            {connected &&
            favorites?.find((current) => current.recipeId == element.id) !=
              undefined ? (
              <img className="imgHeart" src={heart} alt="heart" />
            ) : (
              <img className="imgHeart" src={emptyHeart} alt="heart" />
            )}
          </div>
        </div>
      </StyleCard>
    );
  } else {
    return <h2>carregando</h2>;
  }
};
