import React, { Component } from "react";
import  {OnBooaerdingForm } from "./SignUp.Styles";
import { Link } from "react-router-dom";
// import {MainButton} from "../../styledComponents/GenericStyles"
import {withRouter} from "react-router-dom";
import { MyContext } from "../../context";
import MapComponent from '../../components/Map';

class MasterForm extends Component {
   state = {
        currentStep: 1,
        messages:["Registra tu cuenta", "Registra tu comercio"]
    }
    
    _next = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep >= 2? 3: currentStep + 1
      this.setState({
        currentStep: currentStep
      })
    }
      
    _prev = () => {
      let currentStep = this.state.currentStep 
      currentStep = currentStep <= 1? 1: currentStep - 1
      this.setState({
        currentStep: currentStep
      })
    }
  
  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <button 
          className="btn btn-secondary" 
          type="button" onClick={this._prev}>
        Anterior
        </button>
      )
    }
    return null;
  }
  
  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <2){
      return (
        <button 
          className="btn float-right" 
          type="submit" 
          onClick={e=>{
              e.preventDefault();
              this._next()
            }}
          style={{ backgroundColor: "#0ad5a0", color: "sblack"}}
          >
        Siguiente
        </button>        
      )
    } else {
        return (
            <button 
              className="btn float-right" 
              type="submit"
              style={{ backgroundColor: "#e40b81", color: "#fff"}}
            >
            Crear Cuenta
            </button>        
          )
    }
  }
    
    render() {    
      return (
        <MyContext.Consumer>
        {context => (
        <OnBooaerdingForm>
          <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", color:"white"}}>
            <h1>Registrate</h1>
            <span>
              Tienes una cuenta, {" "}
              <Link to="/login">ingresa</Link>
            </span>
          </div>

          <h2>{this.state.messages[this.state.currentStep - 1]} </h2> 
          <form onSubmit={e => {
              e.preventDefault()
              context.handleSignup(e, () => {
                this.props.history.push("/profile");
              });
            }}>
            {/* 
              render the form steps and pass required props in
            */}
            <Step1 
              currentStep={this.state.currentStep} 
              handleChange={e => context.handleInput(e, "formSignup")}
              username={context.formSignup.username}
              userLastName={context.formSignup.userLastName}
              email={context.formSignup.email}
              password={context.formSignup.password}

            />
            <Step2 
              currentStep={this.state.currentStep} 
              handleChange={e => context.handleInput(e, "formSignup")}
              name={context.formSignup.name}
              category={context.formSignup.category}
              numEmployees={context.formSignup.numEmployees}
            />
            {this.previousButton()}
            {this.nextButton()}
        </form>
        </OnBooaerdingForm>
        )}
    </MyContext.Consumer>
      );
    }
  }
  
  function Step1(props) {
    if (props.currentStep !== 1) {
      return null
    } 
    return(
      <>
       <div className="form-group">
        <label htmlFor="username">Nombre</label>
        <input
          className="form-control"
          id="username"
          name="username"
          type="text"
          placeholder="Nombre"
          value={props.username}
          onChange={props.handleChange}
          required
          />
        </div>
        <div className="form-group">
          <label htmlFor="userLastName">Apellido</label>
          <input
            className="form-control"
            id="userLastName"
            name="userLastName"
            type="text"
            placeholder="Apellido"
            value={props.userLastName}
            onChange={props.handleChange}
            />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            id="email"
            name="email"
            type="text"
            placeholder="Enter email"
            value={props.email}
            onChange={props.handleChange}
            required
            />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
            value={props.password}
            onChange={props.handleChange}
            required
            />
        </div>
      </>
    );
  }
  
  function Step2(props) {
    if (props.currentStep !== 2) {
      return null
    } 
    return(
        <>
        <div className="form-group">
            <label htmlFor="name">Nombre del Comercio</label>
            <input
            className="form-control"
            id="name"
            name="name"
            type="text"
            placeholder="Nombre del cmoercio"
            value={props.name}
            onChange={props.handleChange}
            required
            />
        </div>
        <div className="form-group">
            <label htmlFor="numEmployees">Numero de empleados</label>
            <input
            className="form-control"
            id="numEmployees"
            name="numEmployees"
            type="number"
            placeholder="No. de empleados en tu empresa"
            value={props.numEmployees}
            onChange={props.handleChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="category">Giro del comercio</label>
            <input
            className="form-control"
            id="category"
            name="category"
            type="text"
            placeholder="Giro del comercio"
            value={props.category}
            onChange={props.handleChange}
            required
            />
        </div>
        <div className="form-group">
            <label htmlFor="address">Direccion del comercio</label>
            <MapComponent {...props}/>
        </div>
        </>
      
    );
  }

  MasterForm.contextType=MyContext;
  
  export default withRouter(MasterForm);