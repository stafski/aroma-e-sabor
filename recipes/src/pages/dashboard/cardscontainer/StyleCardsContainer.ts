import styled from "styled-components";

export const StyleCardsContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 16rem;
  font-size: 16rem;
  margin-bottom: 32rem;
  margin-top: 73px;
  .divImg {
    width: 100%;
    height: 150px;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
    }
    .divGreen {
      width: 100%;
      height: 100%;
      background: rgba(0, 150, 80, 0.7);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      @media (min-width: 768px) {
        right: 20px;
        width: 300px;
      }
      h3 {
        font-family: "Dancing Script", cursive;
        color: var(--grey-0);
        font-size: 28rem;
        margin: 0 8rem;
        text-align: center;
        line-height: 130%;
      }
      button {
        background: var(--color-primary);
        color: white;
        font-size: 16rem;
        font-weight: 600;
        border-radius: 16px;
        padding: 10px 20px;
        margin-top: 5rem;
        box-shadow: 5px 5px 8px var(--grey-300);
        &:hover {
          background: darkgreen;
        }
      }
      div {
        display: flex;
        flex-direction: column;
        align-itens: center;
        button {
          // font-size: 14rem;
          // padding: 5px 10px;
          // border-radius: 0;
          // margin: 5px;
          // background: black;
          background: var(--color-primary);
          color: white;
          font-size: 16rem;
          font-weight: 600;
          border-radius: 8px;
          padding: 5px 10px;
          margin-top: 6rem;
          box-shadow: 5px 5px 8px var(--grey-300);
        }
      }
    }
  }
`;
