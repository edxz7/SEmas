import React, { Component } from "react";
import  {OnBooaerdingForm, SubmitButton} from "./SignUp.Styles"
import {MainButton} from "../../styledComponents/GenericStyles"


class MasterForm extends Component {
   state = {
        currentStep: 1,
        email:  '',
        username: '',
        password: '', 
    }
  
    handleChange = event => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })    
    }
     
    handleSubmit = event => {
      event.preventDefault()
      const { email, username, password } = this.state
    //   alert(`Your registration detail: \n 
    //          Email: ${email} \n 
    //          Username: ${username} \n
    //          Password: ${password}`)
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
          className="btn  float-right" 
          type="button" onClick={this._next}
          style={{ backgroundColor: "#0ad5a0", color: "sblack"}}
          >
          
        Siguiente
        </button>        
      )
    } else {
        return (
            <button 
              className="btn float-right" 
              type="button" 
              style={{ backgroundColor: "#e40b81", color: "#fff"}}
            //   onClick={}
            >
            Crear Cuentaa
            </button>        
          )
    }
    return null;
  }
    
    render() {    
      return (
        <OnBooaerdingForm>
        <h1>Sign up Situationn</h1>
        <h2>Paso {this.state.currentStep} </h2> 
  
        <form onSubmit={this.handleSubmit}>
        {/* 
          render the form steps and pass required props in
        */}
          <Step1 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            email={this.state.email}

          />
          <Step2 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            username={this.state.username}
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
          id="email"
          name="username"
          type="text"
          placeholder="Nombre"
          value={props.email}
          onChange={props.handleChange}
          />
      </div>
      <div className="form-group">
        <label htmlFor="username">Apellido</label>
        <input
          className="form-control"
          id="email"
          name="userLastName"
          type="text"
          placeholder="Apellido"
          value={props.email}
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
          value={props.email}
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
            <label htmlFor="username">Nombre del Comercio</label>
            <input
            className="form-control"
            id="name"
            name="name"
            type="text"
            placeholder="Nombre del cmoercio"
            value={props.username}
            onChange={props.handleChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="username">Tipo de mercancia</label>
            <input
            className="form-control"
            id="category"
            name="category"
            type="text"
            placeholder="Tipo de mercancia"
            value={props.username}
            onChange={props.handleChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="username">Numero de empleados</label>
            <input
            className="form-control"
            id="category"
            name="numEmployees"
            type="number"
            placeholder="No. de empleados en tu empresaa"
            value={props.username}
            onChange={props.handleChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="username">Direccion</label>
            <input
            className="form-control"
            id="adress"
            name="adress"
            type="text"
            placeholder="No. de empleados en tu empresaa"
            value={props.username}
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
  
  export default MasterForm;