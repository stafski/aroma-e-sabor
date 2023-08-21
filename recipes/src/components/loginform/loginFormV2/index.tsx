import * as z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { ILoginValue, UserContext } from "../../../providers/UserContext";
import { StyledLoginV2 } from "./styles";
import { Input } from "../../input";

export const LoginFormV2 = () => {
    const { userLogin } = useContext(UserContext)

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
    <StyledLoginV2>
        <form onSubmit={handleSubmit(submit)}>
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
          <button type="submit" className="login">Login</button>
          </form>
    </StyledLoginV2>
  );
};