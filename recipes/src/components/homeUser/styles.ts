import styled from "styled-components";

export const StyledUser = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 65px;
  padding: 5px;
  background-color: var(--grey-600);
  border-radius: 10px 0px 10px 10px;
  z-index: 1;
  position: fixed;
  top: 1px;
  right: 0px;
  span {
    position: fixed;
    z-index: 1;
    color: var(--color-secondary);
    margin-top: -1px;
    margin-left: 155px;
    display: block;
  }
  .perfil {
    padding-top: 7px;
    padding-left: 7px;
  }
  h1 {
    color: var(--grey-0);
    font-size: 15px;
    font-weight: 600;
    line-height: 16px;
    padding-bottom: 3px;
  }
  p {
    color: var(--grey-0);
    font-size: 6px;
    font-weight: 600;
    line-height: 10px;
  }
  .logout {
    color: var(--color-secondary);
    margin: 15px;
    margin-left: 90px;
    position: fixed;
    z-index: 1;
  }
`;
export const ButtonMenu = styled.button`
  color: var(--color-secondary);
  display: block;
`;
export const Span = styled.span`
  color: var(--color-secondary);
  display: block;
`;
