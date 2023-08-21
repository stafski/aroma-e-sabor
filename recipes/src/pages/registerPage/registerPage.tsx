import { IRegisterValue, UserContext } from "../../providers/UserContext";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useContext } from "react";
import { RegisterContainer, DivRegister, BodyContainer } from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../schemas/registerSchema";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterValue>({ resolver: zodResolver(registerSchema) });
  const { onSubmit } = useContext(UserContext);

  return (
    <>
      <ToastContainer />
      <BodyContainer>
        <div className="div-page-title">
          <h1 className="register-page-title">Aroma & Sabor</h1>
          <h2 className="page-resume">
            AQUI VOCÊ ENCONTRA AS <span className="page-resume-color"> MELHORES RECEITAS</span> PARA
            UMA<span className="page-resume-color"> VIDA SAUDÁVEL</span>
          </h2>
        </div>
        <RegisterContainer>
          <DivRegister>
            <div className="container-register-btn">
              <h1 className="title-register">Cadastro</h1>
              <Link className="btn-back" to="/">
                Voltar
              </Link>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="div-register-name">
                <label htmlFor="name">Nome</label>
                <input placeholder="Digite aqui seu nome" {...register("name")} />
                {errors.name?.message && <p className="error-msg">{errors.name.message}</p>}
              </div>
              <div className="div-register-email">
                <label htmlFor="email">Email</label>
                <input placeholder="Digite aqui seu email" {...register("email")} />
                {errors.email?.message && <p className="error-msg">{errors.email.message}</p>}
              </div>
              <div className="div-register-password">
                <label htmlFor="password">Senha</label>
                <input
                  type="password"
                  placeholder="Digite aqui sua senha"
                  {...register("password")}
                />
                {errors.password?.message && <p className="error-msg">{errors.password.message}</p>}
              </div>
              <div className="div-confirm-password">
                <label htmlFor="passwordConfirm">Senha</label>
                <input
                  type="password"
                  placeholder="Digite novamente sua senha"
                  {...register("confirm_Password")}
                />
                {errors.confirm_Password?.message && (
                  <p className="error-msg">{errors.confirm_Password.message}</p>
                )}
              </div>
              <button type="submit" className="btn-register">
                Cadastrar
              </button>
            </form>
          </DivRegister>
        </RegisterContainer>
      </BodyContainer>
    </>
  );
}

export default RegisterPage;
