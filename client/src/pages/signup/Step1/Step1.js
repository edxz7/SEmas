import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {useStateContext} from '../../../hooks/useStateContext';
import { StepPageStyles } from '../SignupStyles'
const Step1 = () => {
    const [state, action] = useStateContext();
    const { handleSubmit, errors, register } = useForm({
        defaultValues: state.formSignup
      });
      const { push } = useHistory();
      const onSubmit = data => {
        action(state, data);
        push("/signup/step2");
      };
      return (
        <StepPageStyles onSubmit={handleSubmit(onSubmit)}>
          <h2>Ingresa tus datos personales</h2>
          <label>
            Primer nombre:
            <input
              name="username"
              placeholder="Nombre"
              ref={register({ required: "Este campo es requerido" })}
            />
            <ErrorMessage errors={errors} name="username" as="p" />
          </label>
          <label>
            Apellido:
            <input
              name="userLastName"
              placeholder="Apellido"
              ref={register({ required: "Este campo es requerido" })}
            />
            <ErrorMessage errors={errors} name="userLastName" as="p" />
          </label>
          <label>
            Email:
            <input
              name="email"
              type="text"
              placeholder="Ingresa tu email"
              ref={register({ required: "Este campo es requerido" })}
            />
            <ErrorMessage errors={errors} name="email" as="p" />
          </label>

          <label>
            Password:
            <input
              name="password"
              type="password"
              placeholder="********"
              ref={register({ required: "Este campo es requerido" })}
            />
            <ErrorMessage errors={errors} name="password" as="p" />
          </label>

          <button 
          className="btn float-right" 
          type="submit" 
          style={{ backgroundColor: "#0ad5a0", color: "sblack"}}
          >
           Siguiente
          </button> 
          {/* <input type="submit" /> */}
        </StepPageStyles>
      );
}

export default Step1;
