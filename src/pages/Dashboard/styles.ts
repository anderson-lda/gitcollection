import styled, { css } from 'styled-components'
import {shade} from 'polished'

interface FormProps{
    hasError: boolean;
}

export const Title = styled.h1`
    font-size: 48px;
    margin-top: 80px;
    color: #3a3a3a;
    max-width: 450px;
    line-height: 56px;
`;

export const Form = styled.form<FormProps>`
    margin-top: 40px;
    max-width: 700px;
    display: flex;

    input {
        flex: 1; //100% da largura
        height: 70px;
        padding: 0 24px;
        border: 2px solid #fff;
        border-radius: 5px 0px 0px 5px;
        color: #3a3a3a;
        border-right: 0;

        ${(props) => props.hasError && css`
            border-color: #c53030;
        `}

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 160px;
        background-color: #04d361;
        border-radius: 0px 5px 5px 0px;
        border: 0;
        color: white;
        font-weight: bold;
        transition: background-color 0.2s; //tempo que levará para se trocar de uma cor para outra

        &:hover {
            background-color: ${shade(0.2, '#04d361')};
        }
    }
`;

export const Repos = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a {
        background: #fff;
        border-radius: 5px;
        width: 100%; //vai ocupar os 700px
        padding: 24px;
        display: flex;
        align-items: center;
        transition: transform 0.2s; //pra quando se passa o mouse por cima
        &:hover {
            transform: translateX(6px);
        }

        & + a { //tag a precedida por outra tag a
            margin-top: 16px;
        }

        img {
            width: 64px;
            height: 64px;
            border-radius: 50%; //imagem vai focar redonda
        }

        div {
            margin: 0 16px; //0 cima e baixo e 16 esq e dir
            flex: 1; //pega todo o espeço restante

            strong {
                font-size: 20px;
                color: #3d3d4d;
            }

            p {
                font-size: 18px;
                color: #a8a8b3;
                margin-top: 4px;
            }
        }

        svg {
            margin-left: auto; //pq a div ja ocupa tudo que puder
            color: #cbcbd6;
        }
    }
`;

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 8px;
`;