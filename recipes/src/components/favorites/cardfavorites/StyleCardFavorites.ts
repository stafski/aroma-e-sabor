import styled from "styled-components";

export const StyleCardFavorites = styled.div`
    width: 95%;
    border-radius: 8px;
    background: var(--color-secondary);
    margin-top: 10px;
    display: flex;
    &:hover{
        box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.5);
        width: 95.5%; 
    }
    .divImg{
        width: 25%;
        height: 80px;
        border-radius: 8px 0 0 8px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        img{
            height: 120%
        }
    }
    .container{
        width: 75%;
        display: flex;
        justify-content: space-between;
        .divTitle{
            display: flex;
            align-items: center;
            padding: 10px;
            cursor: pointer;
            h3{
                font-size: 14rem;
                color: var(--grey-600);
            }
        }
        .divDelete{
            display: flex;
            align-items: center;
            padding: 5px;
            p{
                font-size: 12rem;
                cursor: pointer;
                color: var(--grey-300);
            }
        }
    }
`