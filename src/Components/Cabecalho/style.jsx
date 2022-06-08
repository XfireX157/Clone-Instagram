import styled from "styled-components";
import { FundoPesquisa } from '../Cores/style'
import { CorPesquisa } from '../Cores/style'


export const Header = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    height: auto;
    background-color: #fff;
    border-bottom: 2px solid #ccc;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;

    z-index: 5;
`

export const Search = styled.div`
    background-color: ${FundoPesquisa};
    padding: 8px 10px;
    border-radius: 8px;

    label{
        display: flex;
        align-items: center;
        justify-content: center;

        input{
            font-family: Montserrat;
            background-color: ${FundoPesquisa};
            text-decoration: none;
            color: ${CorPesquisa};
            border: 0 none;
            outline: 0;
        }

        span{
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${CorPesquisa};
            padding-right: 10px;
            font-size: 1.4rem;
           
        }

    }
`

export const ImgLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Link = styled.a`
    font-size: 1.5rem;
    color: black;
    color: ${(props) => props.ColorGray};
    margin-right: 1.1em;
`

export const List = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`
