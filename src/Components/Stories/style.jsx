import styled from 'styled-components'

export const Principal = styled.main`
    position: relative;
    width: 100%;
    height: auto;
    box-sizing: border-box;


    .left-arrow{
        position: absolute;
        top: 35%;
        left: 7%;
        font-size: 2rem;
        color: #ccc;
       
        cursor: pointer;
        user-select: none;
         &:hover{
            background-color: #f1f1f1;
            padding: 10px;
            border-radius: 20px;
        }
    }

    .right-arrow{
        position: absolute;
        top: 35%;
        right: 7%;
        font-size: 2rem;
        color: #ccc;
        cursor: pointer;
        user-select: none;
        &:hover{
            background-color: #f1f1f1;
            padding: 10px;
            border-radius: 20px;
        }
    }
`

export const Cards = styled.section`
    position: relative;
    width: 90%;
    height: 100%;
    margin: auto;
    margin-top: 80px;
    display: flex;
    align-items: center;
    background-color: #fff;
    border: 1px solid #ccc;
    box-sizing: border-box;
    padding: 15px;
    overflow: hidden;
    overflow-x: scroll;
    scroll-behavior: smooth;

    &::-webkit-scrollbar{
        height: 0px;
    }

    
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 12px;
    cursor: pointer;
`

export const ImgCard = styled.img`
    width: 65px;
    height: 65px;
    object-fit: cover;
    border-radius: 100px;
    border: 3px solid violet;
`

export const Paragrafo = styled.p`
    padding-top: 8px;
    font-size: 0.8rem;
    color: black;
    font-family: Montserrat;
`