
import styled from "styled-components";
import {colors} from "../../styledComponents/GenericStyles"


export const OnBooaerdingForm = styled.div`
    padding: 10% 20%;
    @media (max-width: 768px){
        padding: 20% 6%;
    }
    h1{
        color: white;}
    label, h2{
        color: ${colors.verdeMain};
    }
    form{
        margin: 30px 0;
    }
` 


