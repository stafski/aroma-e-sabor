import { useContext } from "react";
import { Card } from "../../../components/card/Card";
import { StyleCardsContainer } from "./StyleCardsContainer";
import { RecipeContext } from "../../../providers/RecipeContext";
import { useNavigate } from "react-router-dom";
import ingredients from "../../../assets/ingredients.jpg";

export const CardsContainer = ()=>{
    const { recipes, connected, filteredRecipes } = useContext(RecipeContext);

  const navigate = useNavigate();

    return(
        <StyleCardsContainer>
            <div className="divImg">
                <img src={ingredients} alt="ingredientes" />
                <div className="divGreen">
                    <h3>Alimente-se com as melhores receitas!</h3>
                    {connected ? <button onClick={()=>navigate("/newrecipe")}>Criar Receita</button> : <button onClick={()=>navigate("/register")}>Cadastre-se</button>}
                </div>
            </div>
            {filteredRecipes!=null ? filteredRecipes.map((element)=>{
                return <Card key={element.id} element={element}/>
            }) : recipes!=null ? recipes.map((element)=>{
                return <Card key={element.id} element={element}/>
            }):null}
        </StyleCardsContainer>
    )
};
