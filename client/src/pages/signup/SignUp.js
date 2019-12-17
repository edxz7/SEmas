import React from "react";
import SignUpStyle from "./SignUp.Styles";
import FormInput from "../../components/FormInput/FormInput"
import { MyContext } from "../../context";


export default function SignupContainer(props) {
  return (
    <MyContext.Consumer>
      {context => (
        <SignUpStyle
          onSubmit={e => {
            e.preventDefault()
            context.handleSignup(e);
            props.history.push("/profile");
          }}
        >
          <div div className="duo-div">
            <h1>Registrate</h1>
            <div className="form-container">
              <div>Nombre</div>
              <input
                type="text"
                name="username"
                onChange={e => context.handleInput(e, "formSignup")}
                value={context.formSignup.username}
              />
            </div>

            <div className="form-container">
              <div>Apellido</div>
              <input
                type="text"
                name="userLastName"
                onChange={e => context.handleInput(e, "formSignup")}
                value={context.formSignup.course}
              />
            </div>

            <div className="form-container">
              <div>Email</div>
              <input
                type="text"
                name="email"
                onChange={e => context.handleInput(e, "formSignup")}
                value={context.formSignup.campus}
              />
            </div>

            <div className="form-container">
              <div>Password</div>
              <input
                type="password"
                name="password"
                onChange={e => context.handleInput(e, "formSignup")}
                value={context.formSignup.password}
              />
            </div>
            <button type="submit">Crea una cuenta</button>
          </div>
          <div div className="duo-div">
            <form onSubmit={context.handleSubmitSpreadSheet}>
              <FormInput
                name='name'
                type='text'
                handleChange={e => context.handleInput(e, "formSignup")}
                value={context.state.apiKey}
                label='Nombre del comercio'
                required
              />
              <FormInput
                name='category'
                type='text'
                handleChange={e => context.handleInput(e, "formSignup")}
                value={context.state.spreadsheetId}
                label='Giro del negocio'
                required
              />
              <FormInput
                name='numEmployees'
                type='number'
                handleChange={e => context.handleInput(e, "formSignup")}
                value={context.state.spreadsheetId}
                label='Numero de empleados'
                required
              />
              <FormInput
                name='numEmployees'
                type='adress'
                handleChange={e => context.handleInput(e, "formSignup")}
                value={context.state.spreadsheetId}
                label='Dirección'
                required
              />
              <button type="submit">Crea una cuenta</button>
            </form>
          </div>
        </SignUpStyle>
      )}
    </MyContext.Consumer>
  );
}
