import styled from 'styled-components';

export const MainNavbarStyle = styled.nav`
    --text: #f4f4f4;
    --text-inverse: #333;
    --background: transparent;
    .bg-color {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
        transition:500ms ease;
        background-color:var(--background) !important;
        
    }
    .bg-color-scrolled {
        --text: #333;
        --text-inverse: #f4f4f4;
        --background: #f4f4f4;

        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
        transition:500ms ease;
        background-color:var(--background) !important;
 

        box-shadow: 0 3px 20px rgba(black, 0.2) !important;
        ${'' /* background-color:#0f252b !important; */}
    }
    & .links{
        font-size: 1em;
        color: var(--text) !important;
        padding:10px 20px !important;
    }
`;
