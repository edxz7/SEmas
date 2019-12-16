import styled from "styled-components";


export const colors = {
    rosaMexicano: "#e40b81",
    verdeMain: "#0ad5a0",
    azulObscuro: "#121823",
    azulClaro: "#202a3b"
};


export const MainButton = styled.button`
    margin: 10px;
    font-size: 1.6em;
    padding: 10px 50px;
    background-color: ${colors.rosaMexicano};
    color:  white;
    border: none;
    border-radius: 4px;
    display:flex;
    justify-content:center;
    &:hover{
        text-decoration: none;
        opacity: 70%;
    }
`;

export const SecondaryButton = styled.button`
    width: 100%;
    font-size: 1.6em;
    padding: 10px 50px;
    background-color: ${colors.verdeMain} !important;
    color: ${colors.azulObscuro} ;
    border: none;
    border-radius: 4px;
    display:flex;
    justify-content:center;
    &:hover{
        text-decoration: none;
        opacity: 70%;
    }
`;
