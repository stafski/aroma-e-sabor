import styled from "styled-components";

export const StyledUserV2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 55px;
  padding: 5px;
  background-color: var(--grey-600);
  border-radius: 10px 0px 10px 10px;
  z-index: 1;
  position: relative;
  top: -10px;
  left: 100px;
  .perfil {
    padding-top: 16px;
    padding-left: 7px;
  }
  h1 {
    color: var(--grey-0);
    font-size: 18px;
    font-weight: 600;
    line-height: 16px;
    padding-bottom: 3px;
  }
  button {
    color: var(--grey-0);
    font-size: 10px;
    text-decoration: underline;
    font-weight: 600;
    line-height: 13px;
  }
  .logout {
    color: var(--color-secondary);
    margin: 15px;
    margin-left: 90px;
    position: fixed;
    z-index: 1;
  }
`;
