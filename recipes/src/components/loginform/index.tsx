import * as z from "zod";
import { Input } from "../input";
import { MdClose } from "react-icons/md";
import { SubmitHandler, useForm } from "react-hook-form";
import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ILoginValue, UserContext } from "../../providers/UserContext";
import { StyledLogin } from "./styles";

export const LoginForm = () => {
  const { userLogin, setDropDown } = useContext(UserContext);

  const formLogin = z.object({
    email: z
      .string()
      .nonempty("Email é obrigatório")
      .email("O email digitado é inválido."),
    password: z
      .string()
      .nonempty("Senha é obrigatória")
      .min(6, "A senha precisa ter pelo menos seis caracteres"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginValue>({
    resolver: zodResolver(formLogin),
  });
  const submit: SubmitHandler<ILoginValue> = (data) => {
    userLogin(data);
  };

  return (
    <StyledLogin>
      <div role="dialog" className="containerForm">
        <form onSubmit={handleSubmit(submit)}>
          <div className="boxClose">
            <MdClose
              size={24}
              className="close"
              onClick={() => setDropDown(false)}
            />
          </div>
          <Input
            label="E-mail"
            id="email"
            error={errors.email}
            type="email"
            register={register("email")}
          />
          <Input
            label="Senha"
            id="password"
            error={errors.password}
            type="password"
            register={register("password")}
          />
          <button type="submit" className="login">
            Login
          </button>
          <p>AINDA NÃO POSSUI UMA CONTA?</p>
          <button type="button" className="register">
            Cadastre-se
          </button>
        </form>
      </div>
    </StyledLogin>
  );
};
