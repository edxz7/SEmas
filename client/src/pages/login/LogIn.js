import React, { useState, useEffect, useContext } from "react";
import { MyContext } from "../../context";
import { Link } from "react-router-dom";
import {LogInStyles, MyInput} from "./Login.Styles";
import {SecondaryButton} from "../../styledComponents/GenericStyles"
// import dataInsight from "../../assets/images/data_insight.jpg";



export const LogIn = (props) => {
  const context = useContext(MyContext);

  const [ formValues, setFormValues ] = useState(context.loginForm);
  const {email, password} = formValues;

  const formDefaultErrors = {
    email:[],
    password:[],
  }
  const [ formErrors, setFormErrors ] = useState(formDefaultErrors);

  useEffect(()=>{
    if (context.loggedUser) {
      return props.history.push("/profile");
    }
  }, []);

  function handleChange(e, validators) {
    const target = e.target;
    setFormValues(prevState =>({
      ...prevState,
      [target.name]: target.value
    }))
    handleValidations(target, validators);
  }

  function handleValidations(target, validators) {
    validators.forEach(validation => {
      const result = validation(target.value);
      const errors = formErrors[target.name]
      if(result.valid){
        if(errors.includes(result.message)) {
          setFormErrors(prevState => ({
            ...prevState, 
            [target.name]: errors.filter(error => {
              return errors.length!==0 ? error !== result.message : true})
          }))
        }
      } else {
        if(!errors.includes(result.message)){
          setFormErrors(prevState => ({
            ...prevState,
            [target.name]: [...errors, result.message]
          }))
        }
      } 
    })
  }

  function noBlanks(value) {
    return {
      valid: value.replace(/\s+/,"").length > 0,
      message:"Este campo es requerido"
    }
  }

  function validEmailField(value){
    const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    return {
      valid: regex.test(value),
      message:"Debes ingresar un email valido"
    }
  }

  function validUserLogin(){
    const { data } = context.state.errors
    let valid = data==="Unauthorized" ? false : true
    return {
      valid: valid,
      message:"Email o contraseña invalidos"
    }
  }

  return (
    <>
      <LogInStyles
        onSubmit={e => {
          e.preventDefault();
          context.handleLogin(e, () => {
            props.history.push("/profile");
          });
        }}
      >
      <div className="duo-div">
        <h1>Ingresa a la plataforma</h1>
        <p>
          Si aun no tienes una cuenta, crea una {" "}
          <Link to="/signup">aqui</Link>
        </p>
        {
          !validUserLogin().valid  ? 
          <div style={{boder:`2px line red`, padding:"10px 10px 0 0"}}>{validUserLogin().message}</div> 
          : null 
        }
        <div className="form-container">
          <div>Email</div>
          <MyInput
            type="email"
            name="email"
            onChange={e => {
              e.preventDefault();
              handleChange(e,[noBlanks,validEmailField])
              context.handleInput(e, "loginForm")
              }}
            value={email}
            required
          />
          {
            formErrors['email'][0]  ? <span>{formErrors['email'][0] }</span> 
            : formErrors['email'][1]  ? <span>{formErrors['email'][1] }</span> 
            : null 
          }
        </div>
        <div className="form-container">
          <div>Password</div>
          <MyInput
            name="password"
            type="password"
            onChange={e => {
              handleChange(e,[])
              context.handleInput(e, "loginForm")
              }}
            value={password}
            required
          />
        </div>

        <SecondaryButton type="submit">Log In</SecondaryButton>
        </div>
        <div className="duo-div">
          {/* <img src={dataInsight} alt="" /> */}
        </div>
      </LogInStyles>
    </>
  );
}

