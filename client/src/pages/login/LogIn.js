import React, { Component } from "react";
import { MyContext } from "../../context";
import { Link } from "react-router-dom";
import {LogInStyles, MyInput} from "./Login.Styles";
import {SecondaryButton} from "../../styledComponents/GenericStyles"
// import dataInsight from "../../assets/images/data_insight.jpg";



export default class LogIn extends Component {
  componentDidMount() {
    if (this.context.loggedUser) {
      return this.props.history.push("/profile");
    }
  }
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <LogInStyles
            onSubmit={e => {
              context.handleLogin(e, () => {
                this.props.history.push("/profile");
              });
            }}
          >
            <div className="duo-div">
              <h1>Ingresa a la plataforma</h1>
              <div className="form-container">
                <tag>Email</tag>
                <MyInput
                  type="email"
                  name="email"
                  onChange={e => context.handleInput(e, "loginForm")}
                  value={context.loginForm.email}
                  required
                />
              </div>
              <div className="form-container">
                <tag>Password</tag>
                <MyInput
                  name="password"
                  type="password"
                  onChange={e => context.handleInput(e, "loginForm")}
                  value={context.loginForm.password}
                  required
                />
              </div>
              <p>
                Si aun no tienes una cuenta, crea una {" "}
                <Link to="/signup">aqui</Link>
              </p>
              <SecondaryButton type="submit">Log In</SecondaryButton>
            </div>
            <div className="duo-div">
              {/* <img src={dataInsight} alt="" /> */}
            </div>
          </LogInStyles>
        )}
      </MyContext.Consumer>
    );
  }
}
LogIn.contextType = MyContext;
