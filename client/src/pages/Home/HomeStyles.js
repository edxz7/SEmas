import styled from 'styled-components';

export const HomeStyles = styled.section`
    h2 {
        color:#f82201;
    }
    p{
        color:#758290;
    }
`;

export const Intro = styled.section`
    background:#123 url("images/pyme.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: multiply;
    padding: 30vh 0;
    color: white;
    text-align: center;
    h1{
        font-size:3rem;
        padding: 0 0 40px 0;
    }
    p{
        font-size:1.5rem;
        padding: 40px 0
    }
`;

export const AboutUs = styled.section`
    color: black;
    display:flex;
    height:70vh;
    align-text:center;
    background-color:#fafafa;
    font-size:1.5rem;
    padding:30px 0;
    position: relative;
    .about-left{
        flex: 1;
        align-items:center;
        margin: 80px 0;
        padding: 1rem;
        & h2{
            padding:20px 0;
        }
    }
    .about-right{
        background:url("images/21249.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-blend-mode: multiply;
        padding: 50vh 0;
        flex: 1;
        padding: 1rem;
    }
`;

export const HowItWorks = styled.section`
    margin:50px 0;
    p {
        font-size:1.4rem;
    }
    h4{
        color:green;
    }
    .steps{
        display:flex;
        justify-content:space-between;
        align-items:center;
        padding:20px;
        .text-container{
            width:60%;
        }
        .icon-container{
            max-width:30%;
        }
        .icon{
            height:150px;
            width:auto;
        }
    }
`;

export const Blog = styled.section`
    background-color:#eaeaea;
    display:flex;
    justify-content:space-between;
    padding:80px;
    .icon{
            height:150px;
            width:auto;
        }
`;

export const Footer = styled.footer`
    background-color:#0f252b;
    color:white;
    padding:30vh;
`;