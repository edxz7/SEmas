import styled from 'styled-components';

export const SingupStyles = styled.div`
    max-width: 500px;
    margin: 0 auto;
    
    h1 {
    font-weight: 100;
    color: #0e101c;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid rgb(79, 98, 148);
    margin-top: 100px;
    }

    hr {
    margin: 40px;
    }

    h2 {
    color: #0e101c;
    font-weight: 200;
    }
    span {
        padding:50px 0;
    }
`

export const StepperStyles = styled.nav`
    .steps {
    color: #0e101c;
    display: flex;
    list-style: none;
    margin: 10;
    padding: 0;
    }

    .steps a {
    color: #0e101c;
    text-decoration: none;
    font-size: 14px;
    line-height: 2;
    }

    .steps li {
    /* background: black; */
    padding: 3px 15px;
    border-right: 1px solid #333;
    }

    .steps li:last-child {
    border: none;
    }

    .active {
    border-bottom: 2px solid #ec5990 !important;
    }
`



export const StepPageStyles = styled.form`
    p {
    color: #bf1650;
    }

    p::before {
    display: inline;
    content: "⚠ ";
    }

    input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #0e101c;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
    }

    label {
    line-height: 2;
    text-align: left;
    display: block;
    margin-bottom: 13px;
    margin-top: 20px;
    color: #0e101c;
    font-size: 14px;
    font-weight: 200;
    }

    button[type="submit"],
    input[type="submit"] {
    background: #ec5990;
    color: #0e101c;
    text-transform: uppercase;
    border: none;
    margin-top: 40px;
    padding: 20px;
    font-size: 16px;
    font-weight: 100;
    letter-spacing: 10px;
    }

    button[type="submit"]:hover,
    input[type="submit"]:hover {
    background: #bf1650;
    }

    button[type="submit"]:active, 
    input[type="button"]:active,
    input[type="submit"]:active {
    transition: 0.3s all;
    transform: translateY(3px);
    border: 1px solid transparent;
    opacity: 0.8;
    }

    input:disabled {
    opacity: 0.4;
    }

    button[type="submit"],
    input[type="button"],
    input[type="submit"] {
    -webkit-appearance: none;
    }
`

