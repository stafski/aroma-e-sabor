import styled from "styled-components";

export const StyledHeader = styled.header`
   background-color: var(--grey-600);
   width: 100%;
  .container {
    width: 100%;
    max-width: 1024px;
    padding: 16px;
  }
  .boxMobile {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
  }
  .close {
    color: var(--color-secondary);
  }
  h1 {
    color: var(--color-secondary);
    font-size: 14px;
    line-height: 16px;
    font-weight: 800;
  }
  form {
    background-color: var(--grey-0);
    width: 135px;
    height: 33px;
    border-radius: 10px;
    display: flex;
  }
  input {
    width: 80%;
    height: 90%;
    border-radius: 15px;
    padding-left: 10px;
    margin: 0 auto;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    text-align: left;
  }
  .buttonSearch {
    color: var(--color-secondary);
    width: 26px;
    height: 26px;
    margin-top: 3px;
  }
`;
