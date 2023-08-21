import { useContext, useEffect, useState } from "react";
import heart from "../../assets/heart.svg";
import emptyHeart from "../../assets/emptyHeart.svg";
import { IRecipes, RecipeContext } from "../../providers/RecipeContext";
import { StyleRecipe } from "./StyleRecipe";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const ContainerCompleteRecipe = () => {
  const { setUpdateRecipes, handleDeleteRecipe } = useContext(RecipeContext);
  const [showRecipe, setShowRecipe] = useState<IRecipes | undefined>(undefined);
  const { recipes, handleHeart, connected, favorites } = useContext(RecipeContext);
  const userId: number | null = Number(localStorage.getItem("@USERID"));
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (recipes) {
      const foundRecipe = recipes.find((e) => e.id.toString() == id);
      setShowRecipe(foundRecipe);
    }
  }, [recipes, id]);

  const handleUpdateRecipe = () => {
    if (showRecipe !== undefined) {
      setUpdateRecipes(showRecipe);
      navigate("/newrecipe");
    }
  };

  return (
    <>
      {showRecipe ? (
        <StyleRecipe>
          <div className="containerLink">
            <Link className="link" to="/">
              Voltar
            </Link>
          </div>
          <div className="recipe">
            <section className="cardImage">
              <img className="imgRecipe" src={showRecipe?.image} alt={showRecipe?.title} />
              <div className="nameRecipe">
                <h1>{showRecipe?.title}</h1>
                <div onClick={() => handleHeart(showRecipe.id, showRecipe.title)}>
                  {connected &&
                  favorites?.find((current) => current.recipeId == showRecipe.id) != undefined ? (
                    <img className="heart" src={heart} alt="heart" />
                  ) : (
                    <img className="heart" src={emptyHeart} alt="heart" />
                  )}
                </div>
              </div>
            </section>
            <section className="cardDirections">
              <div className="containerIngredients">
                <h2>INGREDIENTES:</h2>
                <ul>
                  {showRecipe?.ingredients.map((element) => {
                    return <li key={element}>{element}</li>;
                  })}
                </ul>
              </div>
              <div className="containerPreparation">
                <h2>MODO DE PREPARO:</h2>
                <p>{showRecipe?.directions}</p>
              </div>
              {userId == showRecipe?.userId ? (
                <div className="containerButtons">
                  <button className="btnsRecipe" onClick={() => handleUpdateRecipe()}>
                    Editar
                  </button>
                  <button className="btnsRecipe" onClick={() => handleDeleteRecipe(showRecipe.id)}>
                    Excluir
                  </button>
                </div>
              ) : null}
            </section>
          </div>
        </StyleRecipe>
      ) : (
        <h2>CARREGANDO</h2>
      )}
    </>
  );
};
