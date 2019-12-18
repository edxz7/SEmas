import React, { Component } from "react";
import  {OnBooaerdingForm, SubmitButton} from "./SignUp.Styles"
import {MainButton} from "../../styledComponents/GenericStyles"
import {withRouter} from "react-router-dom";
import { MyContext } from "../../context";

class MasterForm extends Component {
   state = {
        currentStep: 1
    }
  
    // handleChange = event => {
    //   const {name, value} = event.target
    //   this.setState({
    //     [name]: value
    //   })    
    // }
     
    // handleSubmit = event => {
    //   event.preventDefault()
    //   const { username, userLastName, email, password, name, address,  category, numEmployees} = this.state
    // //   alert(`Your registration detail: \n 
    // //          Email: ${email} \n 
    // //          Username: ${username} \n
    // //          Password: ${password}`)
    // }
    
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
          className="btn  float-right" 
          type="button" onClick={
            e=>{
              e.preventDefault();
              this._next()
            }
            }
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
    return null;
  }
    
    render() {    
      return (
        <MyContext.Consumer>
        {context => (
        <OnBooaerdingForm>
          <h1>Registra  tus datos</h1>
          <h2>Paso {this.state.currentStep} </h2> 
    
          <form onSubmit={e => {
              e.preventDefault()
              context.handleSignup(e);
              this.props.history.push("/profile");
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
              address={context.formSignup.address}
              category={context.formSignup.category}
              numEmployees={context.formSignup.numEmployees}
            />
            {/* <Step3 
              currentStep={this.state.currentStep} 
              handleChange={this.handleChange}
              password={this.state.password}
            /> */}
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
            />
        </div>
        <div className="form-group">
            <label htmlFor="address">Direccion física del comercio</label>
            <input
            className="form-control"
            id="address"
            name="address"
            type="text"
            placeholder="Dirección del comercio"
            value={props.address}
            onChange={props.handleChange}
            />
        </div>
        </>
      
    );
  }
  
//   function Step3(props) {
//     if (props.currentStep !== 3) {
//       return null
//     } 
//     return(
//       <React.Fragment>
//       <div className="form-group">
//         <label htmlFor="password">Password</label>
//         <input
//           className="form-control"
//           id="password"
//           name="password"
//           type="password"
//           placeholder="Enter password"
//           value={props.password}
//           onChange={props.handleChange}
//           />      
//       </div>
//       <button className="btn btn-success btn-block">Sign up</button>
//       </React.Fragment>
//     );
 // }
  
  export default withRouter(MasterForm);