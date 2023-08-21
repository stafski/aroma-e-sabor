import styled from "styled-components";

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  .containerForm {
    position: fixed;
    z-index: 1;
    top: 1px;
    right: 1px;
    max-width: 245px;
    height: 352px;
    background-color: var(--grey-300);
    border-radius: 4px;
  }
  .boxClose {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    border: none;
    background-color: var(--grey-300);
    margin-left: 195px;
    margin-top: -32px;
  }
  .close {
    color: var(--color-secondary);
    font-weight: 600;
    font-size: 13px;
    line-height: 21px;
  }
  form {
    width: 245px;
    height: 342px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: var(--grey-300);
    gap: 20px;
  }
  label {
    width: 50px;
    height: 30px;
    top: 3px;
    left: 33px;
    padding: 2px;
    color: var(--grey-600);
    background-color: var(--color-secondary);
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    position: relative;
    z-index: 1;
  }
  Input {
    height: 32px;
    width: 202px;
    border-radius: 15px;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    align-items: flex-start;
    background-color: var(--grey-0);
    padding-left: 6px;
    margin-left: 20px;
  }
  p {
    color: var(--grey-0);
    font-size: 8px;
    font-weight: 400;
    line-height: 9px;
  }
  .login {
    background-color: var(--color-secondary);
    color: var(--grey-600);
    font-size: 15px;
    font-weight: 600;
    border: 1.2182px solid var(--color-secondary);
    border-radius: 15px;
    width: 202px;
    height: 39px;
    :hover {
      background-color: var(--color-primary);
      border: 1.2182px solid var(--color-primary);
    }
  }
  .register {
    background-color: var(--color-secondary);
    color: var(--grey-600);
    font-size: 15px;
    font-weight: 600;
    border: 1.2182px solid var(--color-secondary);
    border-radius: 15px;
    width: 202px;
    height: 39px;
    :hover {
      background-color: var(--color-primary);
      border: 1.2182px solid var(--color-primary);
    }
  }
`;
