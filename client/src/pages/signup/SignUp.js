import React from "react";
import SignUpStyle from "./SignUp.Styles";
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

          </div>
        </SignUpStyle>
      )}
    </MyContext.Consumer>
  );
}
