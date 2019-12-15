import styled from "styled-components";

const HomeStyles = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  header h1{
    font-family: Montserrat;
    color:#0ad5a0;
    font-size:4em;
  }
  h2 {
    font-family: Montserrat;
    color:#0ad5a0;
    font-size:2em;
  }
  p {
    color:white;
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
      }
  }
  .btn-container button{
    margin: 10px;
    font-size: 2em;
    padding:10px 50px;
    background:#e40b81;
    color:white;
    display:flex;
    justify-content:center;
    
  }
  .subcontainer{
    font-family: Montserrat;
    font-size:1.4em;
    width:400px;
    padding:10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

    img {
      width:200px;
      padding:20px;
    }
  }

  .subcontainer:hover {
       box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
  }
`;

export default HomeStyles;