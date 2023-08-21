import { StyledHeader } from "./styles";
import { MdSearch } from "react-icons/md";
import { useContext } from "react";
import { ITitle, RecipeContext } from "../../providers/RecipeContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { Menu } from "../menu";
import { UserContext } from "../../providers/UserContext";
import { HomeUser } from "../homeUser";

export const Header = () => {
  const { searchProduct } = useContext(RecipeContext);
  const { user } = useContext(UserContext)
  const { register, handleSubmit } = useForm<ITitle>();

  const submit: SubmitHandler<ITitle> = (data) => {
    searchProduct(data);
  };

  return (
    <StyledHeader>
      <div className="container">
        <div className="boxMobile">
          <h1>Aroma & sabor</h1>
          <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="" {...register("title")} />
            <button type="submit" className="buttonSearch">
              <MdSearch size={24} />
            </button>
          </form>
          {user ? <HomeUser/> : <Menu />}
        </div>
      </div>
    </StyledHeader>
  );
};
