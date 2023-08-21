import styled from "styled-components";

export const StyleHeaderRecipes = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: center;
    background: var(--grey-600);
    position: fixed;
    z-index: 1;
    div{
        width: 100%;
        max-width: 1024px;
        height: 100%;
        display: flex;
        justify-content: space-bitween;
        .divLogo{
            max-width: 145px;
            min-width: 100px;
            height: 100%;
            justify-content: center;
            align-items: center;
            h5{
                font-size: 18rem;
                color: var(--grey-0);
                text-align: center;
            }
        }
        .divSearch{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
            .divAdjust{
                display: flex;
                width: 80%;
                flex-direction: column;
                justify-content: flex-end;
                position: relative;
                height: 47px;
                margin-top: -8px;
                .iSearch{
                    background: white;
                    width: 100%;
                    height: 35px;
                    border-radius: 20px;
                    outline: none;
                    padding: 0 35rem 0 16rem;
                }
                img{
                    width: 20px;
                    position: absolute;
                    right: 10px;
                    bottom: 8px;
                    cursor: pointer;
                }
            }
            @media(min-width: 900px){
                .divAdjust{
                    width: 80%;
                }
            }
        }
        form{
            width: 100%;
            height: 100%;
            display: none;
            justify-content: space-around;
            align-items: center;
            gap: 8px;
            padding-right: 3px;
            .divAdjust{
                display: flex;
                width: fit-content;
                flex-direction: column;
                justify-content: flex-end;
                position: relative;
                height: 47px;
                margin-top: -8px;
                .divLabel{
                    background: var(--color-primary);
                    height: fit-content;
                    width: fit-content;
                    border-radius: 16px;
                    position: absolute;
                    top: 0;
                    left: 20px;
                    label{
                        font-size: 12rem;
                        margin: 2px 8px;
                    }
                }
                input{
                    background: white;
                    width: 180px;
                    height: 35px;
                    border-radius: 20px;
                    outline: none;
                    padding: 0 16rem;
                    font-size: 12rem;
                }
                p{
                    color: red;
                    font-size: 11rem;
                    position: absolute;
                    left: 16px;
                    bottom: -13px;
                }
            }
            button{
                width: 115px;
                height: 35px;
                background: var(--color-primary);
                border-radius: 16px;
                font-weight: 600;
            }
        }
        .divInfo{
            display:none;
            gap: 8px;
            width: fit-content;
            .divAlign{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-end;
                width: fit-content;
                min-width: 130px;
                gap: 2px;
                h3{
                    color: var(--grey-100);
                }
                h5{
                    color: var(--grey-100);
                    cursor: pointer;
                }
            }
        }
        .imgLogout{
            height: 20px;
            margin: 28px 12px 0 16px;
            cursor: pointer;
        }
        .imgMenu{
            height: 20px;
            margin: 30px 8px 0 0;
            cursor: pointer;
        }
        @media(min-width: 900px){
            form{
                display: flex;
            }
            .divInfo{
                display:flex;
            }
            .imgMenu{
                display: none;
            }
        }
    }
`