import styled from "styled-components";

export const StyledLoginV2 = styled.div`
  form {
    display: flex;
    align-items: center;
    height: 50px;
    width: 450px;
    margin-top: -10px;
    background-color: var(--grey-600);
  }
  label {
    width: 50px;
    height: 30px;
    top: 3px;
    left: 16px;
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
    width: 170px;
    border-radius: 15px;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    align-items: flex-start;
    background-color: var(--grey-0);
    padding-left: 4px;
  }
  .login {
    margin-top: 15px;
    background-color: var(--color-secondary);
    color: var(--grey-600);
    font-size: 15px;
    font-weight: 600;
    border: 1.2182px solid var(--color-secondary);
    border-radius: 15px;
    width: 114px;
    height: 32px;
    :hover {
      background-color: var(--color-primary);
      border: 1.2182px solid var(--color-primary);
    }
  }
  @media (min-width: 1024px) {
    form {
      gap: 10px;
    }
  }
  @media (min-width: 1440px) {
    form {
      width: 500px;
      gap: 40px;
    }
  }
`;
