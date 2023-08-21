import styled from "styled-components";

export const StyleCard = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 10rem;
  margin-top: 10rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  img {
    width: 115%;
    border-radius: 8px 8px 0 0;
    cursor: pointer;
    &:hover {
      width: 125%;
      transition: 1s;
    }
  }
  .divTitle {
    background: var(--grey-0);
    border-radius: 15px;
    height: 90px;
    width: 300px;
    bottom: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background: var(--color-secondary);
      transition: 1s;
    }
    .left {
      width: 75%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      h1 {
        text-align: center;
        font-weight: 700;
        font-family: "Dancing Script", cursive;
        font-size: 30rem;
        color: var(--grey-300);
        cursor: pointer;
        margin: 0 16px;
      }
    }
    .rigth {
      width: 25%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      .imgHeart {
        height: 40%;
        cursor: pointer;
      }
    }
  }
`;
