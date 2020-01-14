import styled from "styled-components";
import { colors } from "../../styledComponents/GenericStyles";


export const MyInput = styled.input`
  color: ${colors.azulClaro}!important;
    padding: 14px;
    border: none;
    margin: 5px 0;
    width: 100%;
    border-radius: 4px;
` 
  

 export const LogInStyles = styled.form`
 color:white;
  width: 100vw;
  height: 100vh;
  padding: 6% 10%;
  text-align: left;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content:center;
  @media (max-width: 768px) {
        align-items:center;
        justify-content:center;
        flex-direction: column;
    }
  p {
    font-size: 1.2rem;
    color:#97989a;
  }
  h1 {
      font-size: 3rem;
      color:${colors.verdeMain};
    }
  .duo-div {
    ${'' /* button {
      width: 90%;
      height: 60px;
      font-size: 1.3rem;
      font-weight: 600;
      border: none;
      border-radius: 8px;
      background-color:#e40b81;
      color:white;
    } */}
    img{
      height:300px;
      padding:10px;
    }

  }
  .duo-div:last-of-type {
    ${'' /* padding-left: 30%; */}
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    h3 {
      font-size: 2rem;
      font-weight: 300;
      margin: 5px 0;
    }
    h2 {
      font-size: 2.4rem;
      margin: 0;
    }
  }
  .form-container {
    display: flex;
    flex-direction: column;
    margin: 40px 0;
    tag {
      color: #949494;
    }
    input {
      padding: 14px;
      border: none;
      background: #ececec;
      margin: 5px 0;
      width: 100%;
    }
  }
`;

export const LogInTag = styled.form`
  width: 100vw;
  height: 100vh;
  padding: 6% 10%;
  text-align: left;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content:center;
  @media (max-width: 768px) {
        align-items:center;
        justify-content:center;
        flex-direction: column;
    }
  p {
    font-size: 1.2rem;
    color:#97989a;
  }
  h1 {
      font-size: 3rem;
      color:#e40b81;
    }
  .duo-div {
    img{
      height:300px;
      padding:10px;
    }

  }
  .duo-div:last-of-type {
    ${'' /* padding-left: 30%; */}
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    h3 {
      font-size: 2rem;
      font-weight: 300;
      margin: 5px 0;
    }
    h2 {
      font-size: 2.4rem;
      margin: 0;
    }
  }
  .form-container {
    display: flex;
    flex-direction: column;
    margin: 40px 0;
    tag {
      color: #949494;
    }

  }
`;

