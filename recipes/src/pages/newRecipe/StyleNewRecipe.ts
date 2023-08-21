import styled, { keyframes } from "styled-components";

const AnimationTop = keyframes`
    0%{transform: translateY(-500px);}
    100%{transform: translateY(0);}
    from { opacity: 0; }
    to   { opacity: 1; }
`

export const StyleNewRecipe = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    form{
        width: 800px;
        max-width: 90%;
        max-height: 90%;
        border-radius: 8px;
        background: white;
        box-shadow: 5px 2px 8px var(--grey-300);
        overflow: auto;
        position: relative;
        animation: ${AnimationTop} .5s;
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
        .btnClose{
            font-size: 16rem;
            font-weight: 900;
            background: var(--grey-300);
            color: var(--grey-0);
            position: absolute;
            right: 12rem;
            top: 8rem;
            padding: 2px 6px 5px 6px;
            border-radius: 4px;
            &:hover{
                box-shadow: 0 0 5px var(--grey-300);
            }
        }
        .container{
            width: 100%;
            height: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            .left{
                width: 50%;
                min-width: 280px;
                height: 465px;
                padding: 16rem 12rem;
                h4{
                    font-weight: 600;
                    font-size: 16rem;
                    margin-top: 8rem;
                    color: var(--color-primary);
                }
                .inputTitle{
                    margin-top: 8rem;
                    border: 1px solid var(--grey-300);
                    border-radius: 4px;
                    width: 100%;
                    height: 40px;
                    outline: none;
                    padding-left: 8rem;
                }
                .divIngredients{
                    width: 100%;
                    height: 310px;
                    background: var(--grey-300);
                    border-radius: 16px;
                    padding: 10rem 10rem;
                    margin-top: 8rem;
                    .divNewIngredients{
                        width: 100%;
                        border-radius: 8px;
                        display: flex;
                        padding-left: 8rem;
                        margin-bottom: 10rem;
                        justify-content: space-between;
                        background: var(--grey-0);
                        input{
                            width: 100%;
                            font-weight: 600;
                            outline: none;
                            color: var(--color-primary);
                        }
                        button{
                            padding: 0 6rem;
                            height: 35px;
                            margin: 2.5rem;
                            background: var(--color-primary);
                            border-radius: 8px;
                            color: var(--grey-0);
                            font-weight: 700;
                        }
                    }
                    .divPIngredients{
                        height: 240px;
                        overflow: auto;
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
                        div{
                            width: 100%;
                            height: 40px;
                            margin-top: 5rem;
                            background: var(--grey-100);
                            border-radius: 8px;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            h2{
                                font-size: 14rem;
                                padding-left: 5rem;
                                font-weight: 500;
                            }
                            h3{
                                font-size: 11rem;
                                padding-right: 5rem;
                                font-weight: 500;
                                cursor: pointer;
                                &:hover{
                                    color: red;
                                }
                            }
                        }
                    }
                }
            }
            .right{
                width: 50%;
                min-width: 280px;
                height: 465px;
                padding: 16rem 12rem;
                h4{
                    font-weight: 600;
                    font-size: 16rem;
                    margin-top: 8rem;
                    color: var(--color-primary);
                }
                textarea{
                    margin-top: 8rem;
                    border: 1px solid var(--grey-300);
                    border-radius: 4px;
                    width: 100%;
                    height: 250px;
                    outline: none;
                    padding: 10rem;
                }
                .inputImage{
                    margin-top: 8rem;
                    border: 1px solid var(--grey-300);
                    border-radius: 4px;
                    width: 100%;
                    height: 40px;
                    outline: none;
                    padding-left: 8rem;
                }
                button{
                    width: 100%;
                    padding: 0 6rem;
                    height: 40px;
                    margin-top: 16rem;
                    background: var(--color-primary);
                    border-radius: 8px;
                    color: var(--grey-0);
                    font-weight: 700;
                    &:hover{
                        box-shadow: 0 0 3px var(--grey-300);
                    }
                }
            }
        }
    }
`