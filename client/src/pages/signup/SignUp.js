import React from 'react';
import { Route, Link, useLocation } from "react-router-dom";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Verification from "./Verification";
import { StepperStyles, SingupStyles } from './SignupStyles';
const Singup = (props) =>{
    const location = useLocation();
    return (
      <SingupStyles>
        <h1>Registrate en SE+, la plataforma que impulsa a los negocios en México</h1>
        <span >
            Tienes una cuenta, {" "}
            <Link to="/login">ingresa</Link>
        </span>
        <StepperStyles style={{padding:'20px 0 0 0'}}>
          <ul className="steps">
            <li className={location.pathname === "/signup" ? "active" : ""}>
              <Link to="/signup">Tus datos </Link>
            </li>
            <li className={location.pathname === "/signup/step2" ? "active" : ""}>
              <Link to="/signup/step2">Los datos de tu negocio</Link>
            </li>
          </ul>
        </StepperStyles>
          <Route  exact path="/signup" component={Step1} />
          <Route  exact path="/signup/step2" component={Step2} />
          <Route  exact path="/signup/result" component={Verification} />
      </SingupStyles>
    );
}

export default Singup;