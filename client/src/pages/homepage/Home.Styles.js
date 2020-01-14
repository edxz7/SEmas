import styled from "styled-components";


export const CustomBlocks = styled.div` 
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  img{ 
    width: 40%;
    heigth: auto;
    margin: 20px;
  }
` 


 export const HomeStyles = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  padding-top: 2%;
  body{
    background-color: #fff !important;
  }
  header h1{
    font-family: Montserrat;
    color:#0ad5a0;
    font-size:4em;
    text-align:center;
  }
  h2 {
    font-family: Montserrat;
    color:#0ad5a0;
    font-size:1.3em;
    font-weight: 800;
    text-transform: uppercase;
    padding: 10px 0;

  }
  p {
    color:white;
    font-size:0.8em;

  }
  .main-container{
    display:flex;
    justify-content:space-evenly;
    margin:40px;
    @media (max-width: 768px) {
        align-items:center;
        justify-content:center;
        flex-direction: column;
      }
  }
  .btn-container{
    display:flex;
    justify-content:center;
    flex-wrap:wrap:
    margin-top:50px;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content:center;
        align-items:center;
      }
  }
  .subcontainer{
    font-family: Montserrat;
    font-size:1.4em;
    width:430px;
    padding:10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
  }
  .subcontainer:hover {
       box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
  }
`;

