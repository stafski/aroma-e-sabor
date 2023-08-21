import { MdSearch } from "react-icons/md";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { StyledHeader2 } from "./styles";
import { ITitle, RecipeContext } from "../../../providers/RecipeContext";
import { LoginFormV2 } from "../../loginform/loginFormV2";
import { UserContext } from "../../../providers/UserContext";
import { HomeUserV2 } from "../../homeUser/homeUserv2";

export const HeaderV2 = () => {
  const { searchProduct } = useContext(RecipeContext);
  const { user } = useContext(UserContext);
  const { register, handleSubmit } = useForm<ITitle>();

  const submit: SubmitHandler<ITitle> = (data) => {
    searchProduct(data);
  };

  return (
    <StyledHeader2>
      <div className="container">
        <div className="boxMobile">
          <h1>Aroma & sabor</h1>
          <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="" {...register("title")} />
            <button type="submit" className="buttonSearch">
              <MdSearch size={24} />
            </button>
          </form>
          {user ? <HomeUserV2 /> : <LoginFormV2 />}
        </div>
      </div>
    </StyledHeader2>
  );
};
