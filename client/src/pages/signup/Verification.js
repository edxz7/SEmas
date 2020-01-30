import React, {useContext} from "react";
import { useForm } from "react-hook-form";
import { useStateContext } from "../../hooks/useStateContext";
import { useHistory } from "react-router-dom";
import { StepPageStyles } from './SignupStyles'
import { MyContext } from "../../contexts/context";

const Result = props => {
  const context = useContext(MyContext);
  const  [state, action]  = useStateContext();
  const { handleSubmit } = useForm({
    defaultValues: state.formSignup
  });

  const { push } = useHistory();
  const onSubmit = data => {  
    action(state, data);
    context.handleSignup(()=>{
      push("/profile");
    })
  };
  return (
    <StepPageStyles className="container" onSubmit={handleSubmit(onSubmit)}>
      <h2>Verifica tu información</h2>
      <div>
        {state.formSignup.username ? <div>Nombre: {state.formSignup.username } </div> :  <p> Nombre: Este campo es requerido</p>}
        {state.formSignup.userLastName ? <div>Apellido: {state.formSignup.userLastName } </div> :  <p>Apellido: Este campo es requerido</p>}
        {state.formSignup.email ? <div>Email: {state.formSignup.email } </div> :  <p>Email: Este campo es requerido</p>}
        {state.formSignup.name ? <div>Nombre del comercio: {state.formSignup.name } </div> :  <div> </div>}
        {state.formSignup.numEmployees ? <div>Numero de empleados: {state.formSignup.numEmployees} </div> :  <p>Numero de empleados: Este campo es requerido</p>}
        {state.formSignup.category ? <div>Giro del comercio: {state.formSignup.category} </div> :  <p>Giro del comercio: Este campo es requerido</p>}
        {state.address ? <div>Dirección: {state.address} </div> :  <p>Dirección: Este campo es requerido</p>}
      </div>
      <input type="submit" />
    </StepPageStyles>
  );
};

export default Result;