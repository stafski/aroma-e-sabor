import styled, { keyframes } from "styled-components";

const AnimationTop = keyframes`
    0%{transform: translateY(-500px);}
    100%{transform: translateY(0);}
    from { opacity: 0; }
    to   { opacity: 1; }
`

export const StyleMenuHeader = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    //align-items: center;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 2;
    .divModal{
        background: var(--grey-600);
        width: 245px;
        height: fit-content;
        min-height: 120px;
        // max-width: 90%;
        // min-height: 280px; 
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 8px 0 8px 8px;
        padding-bottom: 10px;
        animation: ${AnimationTop} .7s;
        position: relative;
        .btnClose{
            color: var(--color-primary);
            font-size: 20rem;
            position: absolute;
            right: 16px;
            top: 8px;
        }
        form{
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            margin-top: 50px;
            gap: 20px;
            //border: 1px solid white;
            button{
                width: 180px;
                color: var(--grey-300);
            }
            h5{
                color: var(--grey-100);
                font-weight: 400;
                font-size: 12rem;
            }
        }
        .divInfo{
            margin-top: 50px;
            display:flex;
            .divAlign{
                align-items: center;
            }
            .imgLogout{
                margin-top: 10px;
            }
        }
    }
`