import styled from "styled-components";

export const PrincipalCard = styled.section`
    position: relative;
    width: 100%;
    margin: auto;
    height: auto;
    box-sizing: border-box;
    margin-top: 30px;
`

export const Section = styled.section`
    width: 90%;
    height: auto;
    margin: auto;
    background-color: ${({ theme }) => theme.inside};
`

export const BoxCard = styled.article`
    width: 100%;
    height: auto;
    margin: auto;
    border-right: 2px solid #ccc;
    border-left: 2px solid #ccc;
    border-top: 2px solid #ccc;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    box-sizing: border-box;
`

export const HeaderCard = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 15px 0 15px 15px;
    
`

export const InfoTxtCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;
`

export const Txt = styled.span`
    font-family: Montserrat;

    span{
        display: inline;
        align-items: center;
        font-size: 0.3rem;
    }
    cursor: pointer;
    padding-bottom: ${(props) => props.primary ? "7px" : "0"};
    font-size: ${(props) => props.primary ? "0.9rem" : "0.7rem"};
    font-weight: ${(props) => props.primary ? "700" : "400"};
`

export const ImgCard = styled.img`
    object-fit: cover;
    width: 40px;
    height: 40px;
    border-radius: 100px;
    cursor: pointer;
`

export const ImgConteudo = styled.div`
    width: 100%;
    height: auto;
    box-sizing: border-box;
    padding: auto 0;
    margin: auto 0;

    img{
        width: 100%;
        
    }
`

export const CompartilharBtn = styled.button`
    font-size: 1.4rem;
    width: 10%;
    padding-right: 10px;
    background-color: transparent;
    cursor: pointer;
`

export const CardSocialMidia = styled.div`
    width: 100%;
    height: auto;
    border-left: 2px solid #ccc;
    border-bottom: 2px solid #ccc;
    border-right: 2px solid #ccc;
    border-radius: 0px 0px 5px 5px ;
`

export const Grid = styled.div`
    display: grid;
    grid-template-rows: 1fr auto 1fr;
    height: 100%;
`

export const IconesCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 16px;
    box-sizing: border-box;
  
`

export const Icon = styled.button`
    background-color: transparent;
    font-size: ${(props) => props.primary ? "1.9rem" : "1.5rem"};
    cursor: pointer;
    transition: 0.2s ease;
    padding: ${(props) => props.primary ? "10px 20px 10px 0px" : "10px"};

    &:hover{
        opacity: 0.5;
    }
`
export const TextoHora = styled.div`
    padding-left: 25px;
    margin-bottom: 20px;

    p{
        font-family: Montserrat;
        color: #ADABAB;
        font-size: 0.7rem;
    }
`

export const Curtidas = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    font-family: Montserrat;

    p{  
        font-size: 1rem;
        padding: 0 5px;
    }

    span{
        font-weight: 600;
    }
`

export const CardComent = styled.section`
    padding: 8px 15px;
    border-top: 2px solid #ccc;
`

export const FormComent = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    

    textarea{
        resize: none;
        font-family: verdana;
        font-size: 0.9rem;
        padding-top: 10px;
        width: 100%;
        border: none;
        outline: none;
    }

    a{
        font-size: 1rem;
        color: #21ABCD;
        font-family: Montserrat;
    }
`