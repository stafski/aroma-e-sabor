import { useContext } from "react";
import { StyledMenu } from "./styles";
import { UserContext } from "../../providers/UserContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { LoginForm } from "../loginform";

export const Menu = () => {
  const { dropDown, setDropDown } = useContext(UserContext);
  
  return (
    <StyledMenu>
      {dropDown ? (
        <span>
          <MdClose
            size={22}
            className="close"
            onClick={() => setDropDown(false)}
          />
        </span>
      ) : (
        <button className="buttonMenu">
          <GiHamburgerMenu size={28} onClick={() => setDropDown(true)} />
        </button>
      )}
      {dropDown && <LoginForm />}
    </StyledMenu>
  );
};
