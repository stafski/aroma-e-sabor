import styled from "styled-components";

export const StyleRecipe = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .recipe {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20rem;
    margin-top: 25rem;
    width: 100%;
  }

  .containerLink {
    display: flex;
    width: 90%;
    align-items: center;

    .link {
      font-size: 15rem;
      color: var(--green-500);
      font-weight: bolder;
    }
  }

  .cardImage {
    position: relative;
    width: 90%;
    img {
      width: 100%;
      height: 100%;
      max-height: 350rem;
      border-radius: 9rem;
      object-fit: cover;
    }
  }

  .nameRecipe {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--grey-0);
    height: 40rem;
    padding: 0rem 25rem 0rem 25rem;
    border-radius: 9rem;
    position: absolute;
    width: 100%;
    bottom: -1rem;
    box-shadow: 0px 5px 20px 2px rgba(0, 0, 0, 0.2);

    h1 {
      font-size: 15rem;
      color: var(--grey-600);
    }

    .heart {
      width: 30rem;
      cursor: pointer;
      object-fit: none;
    }
  }

  .cardDirections {
    ul::-webkit-scrollbar {
      width: 7rem;
      height: 2rem;
    }
    ul::-webkit-scrollbar-track {
      background: none;
    }
    ul::-webkit-scrollbar-thumb {
      background: var(--green-500);
      border-radius: 20rem;
    }
    ul::-webkit-scrollbar-thumb:hover {
      background: var(--color-primary);
    }

    width: 90%;
    height: 380rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    ul {
      height: 150rem;
      overflow-y: scroll;
      margin-bottom: 30rem;

      li {
        margin: 5rem 0rem;
        font-size: 13rem;
        font-weight: bold;
        color: var(--grey-600);
      }
    }

    .containerIngredients {
      width: 100%;
      height: 195rem;
      margin-bottom: 20rem;
      border-bottom: 1px solid var(--grey-200);
    }

    .containerPreparation,
    .containerIngredients {
      p::-webkit-scrollbar {
        width: 6rem;
        height: 2rem;
      }
      p::-webkit-scrollbar-track {
        background: none;
      }
      p::-webkit-scrollbar-thumb {
        background: var(--green-500);
        border-radius: 20rem;
      }
      p::-webkit-scrollbar-thumb:hover {
        background: var(--color-primary);
      }

      h2 {
        font-size: 16rem;
        margin-bottom: 5rem;
        color: var(--green-500);
      }
      p {
        font-size: 13rem;
        font-weight: bold;
        color: var(--grey-600);
        line-height: 18rem;
        height: 110rem;
        overflow-y: scroll;
      }
    }

    .containerPreparation {
      width: 100%;
    }

    .containerButtons {
      position: absolute;
      bottom: 0;
      left: 0;

      .btnsRecipe {
        background-color: var(--color-primary);
        color: var(--grey-600);
        font-weight: bold;
        border-radius: 5rem;
        margin: 0rem 10rem 0rem 0rem;
        padding: 7rem;
        cursor: pointer;
      }

      .btnsRecipe:hover {
        background-color: var(--color-secondary);
      }
    }
  }

  @media (min-width: 768px) {
    .recipe {
      flex-direction: row;
      margin: 0 auto;
      margin-top: 25rem;
      width: 90%;
      align-items: center;
    }

    .cardDirections,
    .cardImage {
      height: 380px;
    }

    ul {
      height: 100rem;
      overflow-y: scroll;
    }

    .containerPreparation {
      p {
        height: 150rem;
        overflow-y: auto;
      }
    }
  }
`;
