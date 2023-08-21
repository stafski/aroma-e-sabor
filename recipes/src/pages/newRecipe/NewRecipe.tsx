import { StyleNewRecipe } from "./StyleNewRecipe";
import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { RecipeContext } from "../../providers/RecipeContext";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';

export interface INewRecipe {
    "image": string;
    "title": string;
    "ingredients": string[];
    "directions": string;
    "userId": number;     
}

export const NewRecipe = ()=>{
    const { handleRegisterRecipe, updateRecipes, setUpdateRecipes, handleUpdateRecipe } = useContext(RecipeContext);
    const [listIngredient, setListIngredient] = useState([]as string[]);
    const [newTitle, setNewTitle] = useState('');
    const [newIngredient, setNewIngredient] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newImage, setNewImage] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        if(updateRecipes!=null){
            setNewTitle(updateRecipes.title);
            const newListUpdate = updateRecipes.ingredients;
            setListIngredient([...newListUpdate]);
            setNewDescription(updateRecipes.directions);
            setNewImage(updateRecipes.image);
        }
    },[updateRecipes])

    const handleFormatData = ()=>{
        if(newTitle==''||listIngredient.length==0||newDescription==''||newImage==''){
            toast.error('É necessário preencher todos os campos.');
        }else{
            if(updateRecipes!=null){
                handleUpdateRecipe({
                    title: newTitle, 
                    ingredients:[...listIngredient], 
                    directions: newDescription,  
                    image: newImage,
                    userId: Number(localStorage.getItem("@USERID")),
                }, updateRecipes.id);
            }else{
                handleRegisterRecipe({
                    title: newTitle, 
                    ingredients:[...listIngredient], 
                    directions: newDescription,  
                    image: newImage,
                    userId: Number(localStorage.getItem("@USERID")),
                });
            }
        }
    }

    const handleIngredient = ()=>{
        if(listIngredient.length==0){
            setListIngredient([newIngredient]);
        }else{
            setListIngredient([...listIngredient, newIngredient]);
        }
        setNewIngredient('');
    }

    const removeIngredientToList = (currentValue:string)=>{
        const newListRemoved = listIngredient.filter((element)=>{return element!=currentValue})
        setListIngredient(newListRemoved);
    }

    return(
        <StyleNewRecipe>
            <form onSubmit={(e)=>{e.preventDefault(); handleFormatData()}}>
                <button type="button" className="btnClose" onClick={()=>{navigate("/"); setUpdateRecipes(null)}}>x</button>
                <div className="container">
                    <div className="left">
                        <h4>Título:</h4>
                        <input className="inputTitle" type="text" onChange={(e) => setNewTitle(e.target.value)} id="title" placeholder="Digite um título para sua receita" value={newTitle}/>
                        <h4>Ingredientes:</h4>
                        <div className="divIngredients">
                            <div className="divNewIngredients">
                                <input type="text" onChange={(e) => setNewIngredient(e.target.value)} value={newIngredient} placeholder="Ex.: 2 xic. Farinha"/>
                                <button type="button" onClick={()=>handleIngredient()}>Adicionar</button>
                            </div>
                            <div className="divPIngredients"> 
                                {listIngredient.map((currentValue)=>{return(
                                    <div key={uuidv4()}>
                                        <h2>{currentValue}</h2>
                                        <h3 onClick={()=>removeIngredientToList(currentValue)}>Excluir</h3>
                                    </div>
                                )})}
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <h4>Modo de preparo:</h4>
                        <textarea id="description" onChange={(e) => setNewDescription(e.target.value)} value={newDescription} placeholder="Ex.: Misture todos os ingredientes"></textarea>
                        <h4>Imagem:</h4>
                        <input className="inputImage" type="url" onChange={(e) => setNewImage(e.target.value)} id="image" placeholder="Insira uma URL" value={newImage}/>
                        {updateRecipes==null ? <button type="submit">Cadastrar Receita</button> : <button type="submit">Editar Receita</button>}
                    </div>
                </div>
            </form>
        </StyleNewRecipe>
    )
}