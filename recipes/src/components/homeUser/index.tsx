import { useContext } from "react";
import { Span, StyledUser } from "./styles";
import { UserContext } from "../../providers/UserContext";
import { FiLogOut } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { ButtonMenu } from "./styles";
import { RecipeContext } from "../../providers/RecipeContext";

export const HomeUser = () => {
  const { user, logout, dropDown, setDropDown } = useContext(UserContext);
  const { setModalFavorites } = useContext(RecipeContext);

  return (
    <div>
      {dropDown ? (
        <Span>
          <MdClose
            size={18}
            className="close"
            onClick={() => setDropDown(false)}
          />
        </Span>
      ) : (
        <ButtonMenu>
          <GiHamburgerMenu size={28} onClick={() => setDropDown(true)} />
        </ButtonMenu>
      )}
      {dropDown && (
        <StyledUser>
          <span className="span2">
            <MdClose size={20} onClick={() => setDropDown(false)} />
          </span>
          <div className="perfil">
            <HiOutlineUserCircle />
            <h1>{user?.name}</h1>
            <p onClick={() => setModalFavorites(true)}>Meus favoritos</p>
          </div>
          <FiLogOut className="logout" size={28} onClick={() => logout()} />
        </StyledUser>
      )}
    </div>
  );
};
