import styled from "styled-components";


export const colors = {
    rosaMexicano: "#e40b81",
    verdeMain: "#00ed95",
    azulObscuro: "#121823",
    azulClaro: "#202a3b"
};


export const MainButton = styled.button`

    --text: #f4f4f4;
    --text-inverse: #333;
    --background: ${colors.rosaMexicano};


    border: 1.5px solid currentColor;
    border-radius: 3rem;
    ${'' /* margin-left: 1em; */}
    transition: background 250ms ease-in-out;
    letter-spacing: 1px;
    padding: 0.75em 1.5em;

    margin: 10px;
    font-size: 1em;
    padding: 10px 20px;
    background-color: ${colors.rosaMexicano};
    color:  white;
    border: none;
    display:flex;
    justify-content:center;
    &:hover{
        text-decoration: none;
        opacity: 70%;
        background: var(--text);
        color: var(--text-inverse);
        border-color: var(--text);
    }
`;

export const SecondaryButton = styled.button`

    --text: #f4f4f4;
    --text-inverse: #333;
    --background: ${colors.rosaMexicano};
    border: 1.5px solid currentColor;
    border-radius: 3rem;
    ${'' /* margin-left: 1em; */}
    transition: background 250ms ease-in-out;
    letter-spacing: 1px;

    width: 100%;
    font-size: 1em;
    padding: 10px 20px;
    background-color: ${colors.verdeMain} !important;
    color: ${colors.azulObscuro} ;
    border: none;
    border-radius: 3rem;
    display:flex;
    justify-content:center;
    &:hover{
        text-decoration: none;
        opacity: 70%;
        background: var(--text);
        color: var(--text-inverse);
        border-color: var(--text);
    }
`;
