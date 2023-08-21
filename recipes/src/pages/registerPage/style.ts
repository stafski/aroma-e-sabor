import styled from "styled-components";

export const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .div-page-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;
  }

  .register-page-title {
    color: var(--color-primary);
    font-size: 30rem;
    font-weight: 800;
    margin-top: 65rem;
    margin-bottom: 20rem;
  }

  .page-resume {
    color: var(--grey-600);
    width: 70%;
    font-size: 22rem;
    text-align: center;
  }

  .page-resume-color {
    color: var(--green-500);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    height: 100vh;
  }
`;

export const RegisterContainer = styled.div`
  border-radius: 20px;
  background-color: var(--grey-600);
  width: 90%;

  @media (min-width: 768px) {
    height: 90%;
    width: 60%;
    margin: 25px;
  }
`;

export const DivRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title-register {
    color: var(--color-primary);
    font-size: 20rem;
  }

  .btn-back {
    color: var(--grey-200);
    font-size: 15rem;
    font-weight: bolder;
  }

  .container-register-btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 35px;
    margin-bottom: 10px;
    width: 270px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: var(--grey-3);
    padding-bottom: 50px;
  }

  label {
    display: none;
  }

  input {
    background-color: white;
    height: 45px;
    width: 270px;
    margin-bottom: 2px;
    margin-top: 20rem;
    border-radius: 12px;
    padding-left: 10px;
    color: var(--grey-300);
  }

  .btn-register {
    border-radius: 15px;
    background-color: var(--color-primary);
    color: var(--grey-600);
    font-weight: 600;
    font-size: 20px;
  }

  .error-msg {
    color: var(--negative);
    font-size: 10px;
    margin-left: 8px;
    font-weight: 600;
  }

  .btn-register {
    width: 270px;
    height: 40px;
    border-radius: 10px;
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    height: 700px;
    display: flex;
    justify-content: center;

    form {
      padding: 0px 20px;
    }

    input,
    .container-register-btn,
    .btn-register {
      width: 450px;
    }
  }
`;
