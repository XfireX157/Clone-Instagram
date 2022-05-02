import styled from "styled-components";

export const CardPerfil = styled.div`
    width: 100%;
    height: 100%;
    margin: auto;
    margin-top: 90px;
`

export const Perfil = styled.div`
    width: 100%;
    display: flex;
    margin: auto;
    justify-content: ${(props) => props.primary ? "space-between" : "space-around"};
    align-items: center;
    margin-top: ${(props) => props.primary ? "20px" : "15px"};
    margin-bottom: ${(props) => props.primary ? "20px" : "15px"};
    padding: ${(props) => props.primary ? "10px" : "0"}
    
`

export const PerfilName = styled.div`
    display: flex;
    flex-direction: column;
`

export const Icon = styled.div`
    font-size: ${(props) => props.primary ? "4rem" : "2.50rem"};
    color: #ccc;

    img{
        width: 50px;
        object-fit: cover;
        border-radius: 100px;
    }
`

export const Txt = styled.span`
    font-family: Montserrat;
    font-size: ${(props) => props.primary ? "0.9rem" : "0.8rem"};
    padding-bottom ${(props) => props.primary ? "8px" : "0"};
    font-weight: ${(props) => props.primary ? "700" : "400"};

    &:hover{
        
    }
`

export const Link = styled.a`
    font-family: Montserrat;
    font-size: ${(props) => props.primary ? "0.8rem" : "0.7rem"};
    font-weight: 700;
    color: ${(props) => props.second ? "#000" : "#170db3"};
`

export const Paragrafo = styled.p`
    font-family: Montserrat;
    color: grey;
    font-size: 0.9rem;
    font-weight: 600;
`

export const Ajuda = styled.div`
    width: 85%;
    margin: auto;
    div{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr ;
    row-gap: 6px;
    column-gap: 9px;
    align-items: center;
    margin-bottom: 20px;
        a{
            font-family: Montserrat;
            font-size: 0.8rem;
            font-weight: 600;
            color: #ccc;
        }
    }

    
`
