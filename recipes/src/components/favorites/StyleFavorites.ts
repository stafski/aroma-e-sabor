import styled, { keyframes } from "styled-components";

const AnimationTop = keyframes`
    0%{transform: translateY(-500px);}
    100%{transform: translateY(0);}
    from { opacity: 0; }
    to   { opacity: 1; }
`

export const StyledFavorites = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 2;
    .divModal{
        background: var(--grey-100);
        width: 500px;
        max-width: 90%;
        min-height: 400px; 
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 8px;
        padding-bottom: 10px;
        animation: ${AnimationTop} .7s;
        .divHeader{
            width: 100%;
            height: 60px;
            border-radius: 8px 8px 0 0;
            background: var(--grey-600);
            color: var(--color-primary);
            display: flex;
            justify-content: space-between;
            align-items: center;
            h2{
                font-size: 16rem;
                font-weigth: 600;
                margin-left: 10px;
            }
            button{
                font-size: 20rem;
                font-weigth: 600;
                margin-right: 10px;
                color: var(--color-primary);
                background: var(--grey-300);
                padding: 3px 10px 5px 10px;
                border-radius: 6px;
                cursor: pointer;
                &:hover{
                    box-shadow: 0px 0px 5px rgba(200, 200, 200, 0.4); 
                }
            } 
        }
        ul{
            width: 90%;
            height: 340px;
            overflow: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 10px 0;
            &::-webkit-scrollbar {
                width: 7rem;
                height: 2rem;
            }
            &::-webkit-scrollbar-track {
                background: none;
            }
            &::-webkit-scrollbar-thumb {
                background: var(--green-500);
                border-radius: 20rem;
            }
            &::-webkit-scrollbar-thumb:hover {
                background: var(--color-primary);
            }
            h4{
                margin-top: 50px;
                color: var(--grey-600);
            }
        }  
    }
`