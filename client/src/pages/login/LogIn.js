import React, { Component } from "react";
import { MyContext } from "../../context";
import { Link } from "react-router-dom";
import LogInStyles from "./Login.Styles";
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
              <h1>Log In</h1>
              <div className="form-container">
                <tag>Email</tag>
                <input
                  type="email"
                  name="email"
                  onChange={e => context.handleInput(e, "loginForm")}
                  value={context.loginForm.email}
                  required
                />
              </div>
              <div className="form-container">
                <tag>Password</tag>
                <input
                  name="password"
                  type="password"
                  onChange={e => context.handleInput(e, "loginForm")}
                  value={context.loginForm.password}
                  required
                />
              </div>
              <p>
                If you don't have an account yet, you can create your account{" "}
                <Link to="/signup">here</Link>
              </p>
              <button type="submit">Log In</button>
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
