import React,{useEffect} from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {useStateContext} from '../../../hooks/useStateContext';
import { StepPageStyles } from '../SignupStyles'
import MapComponent from '../../../components/Map';

const Step2 = props => {
  const  [state, action]  = useStateContext();
  const { handleSubmit, register, errors } = useForm({
    defaultValues: state.formSignup
  });
  const { push } = useHistory();
  useEffect(()=>{
    console.log(state.formSignup)
  }, [state])
  const onSubmit = data => {
    action(state, data);
    push("/signup/result");
  };

  return (
    <StepPageStyles onSubmit={handleSubmit(onSubmit)}>
      <h2>Ingresa los datos de tu comercio</h2>
      <label>
        Nombre del comercio:
        <input
          name="name"
          type="text"
          ref={register}
        />
        <ErrorMessage errors={errors} name="name" as="p" />
      </label>
      <label>
        Numero de empleados:
        <input
          name="numEmployees"
          type="number"
          ref={register({
            required: "Este campo es requerido"
          })}
        />
        <ErrorMessage errors={errors} name="numEmployees" as="p" />
      </label>
      <label>
        Giro del comercio:
        <input
          name="category"
          type="text"
          ref={register({
            required: "Este campo es requerido"
          })}
        />
        <ErrorMessage errors={errors} name="category" as="p" />
      </label>
      <label htmlFor="address">Direccion del comercio</label>
      <input 
        name='map'
        type='text' 
        ref={register({
            required: "Este campo es requerido"
          })}
        value={state.address}
        hidden/>
        <ErrorMessage errors={errors} name="map" as="p" />
      <MapComponent {...props}  />
      <input type="submit" />
    </StepPageStyles>
  );
};

export default Step2;
