import React, {useContext} from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";
import {useStateContext} from '../../hooks/useStateContext';
import { LoginStyles } from './LoginStyles';
import { MyContext } from "../../contexts/context";

const Login = props => {
  const context = useContext(MyContext);
  const  [state, action]  = useStateContext();
  const { handleSubmit, register, errors } = useForm({
    defaultValues: state.formSignup
  });
  const { push } = useHistory();

  const onSubmit = data => {
    action(state, data);
    context.handleLogin(()=>{
      push("/profile");
    });
  };

  return (
    <LoginStyles onSubmit={handleSubmit(onSubmit)}>
      <h1>Ingresa</h1>
      <span>
          Si aun no tienes una cuenta, crea una {" "}
          <Link to="/signup">aqui</Link>
      </span>
      <label>
        Email:
        <input
          name="email"
          type="text"
          ref={register({
            required: "Este campo es requerido"
          })}
        />
        <ErrorMessage errors={errors} name="email" as="p" />
      </label>
      <label>
        password:
        <input
          name="password"
          type="password"
          ref={register({
            required: "Este campo es requerido"
          })}
        />
        <ErrorMessage errors={errors} name="password" as="p" />
      </label>
      <input type="submit" />
    </LoginStyles>
  );
};

export default Login;
