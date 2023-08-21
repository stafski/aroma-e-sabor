import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext";
import { StyledUserV2 } from "./styles";
import { FiLogOut } from "react-icons/fi";
import { RecipeContext } from "../../../providers/RecipeContext";

export const HomeUserV2 = () => {
  const { user, logout } = useContext(UserContext);
  const { setModalFavorites } = useContext(RecipeContext);

  return (
    <StyledUserV2>
      <div className="perfil">
        <h1>{user?.name}</h1>
        <button type="submit" onClick={() => setModalFavorites(true)}>
          Meus favoritos
        </button>
      </div>
      <FiLogOut className="logout" size={32} onClick={() => logout()} />
    </StyledUserV2>
  );
};
