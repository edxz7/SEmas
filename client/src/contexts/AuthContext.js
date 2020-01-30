import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        address:'',
        formSignup: {
            username: "",
            userLastName: "",
            email: "",
            password: "",
       
            name:"",
            category:"",
            numEmployees:"",
            place: {
              coordinates:[]
            }
          }
    }

    update = (prevState, payload) => {
        this.setState({
            ...prevState,
            formSignup:{
                ...prevState.formSignup,
                ...payload
            }
        })
    }

    handleLoc = (coordinates, address) => {
        this.setState(prevState => ({
          ...prevState,
          address:address,
          formSignup:{
            ...prevState.formSignup,
            place:{
              coordinates:coordinates
            }
          }
        }));
      };

    render(){
        return(
            <AuthContext.Provider
                value={{
                    state:this.state,
                    updateAction:this.update,
                    handleLoc:this.handleLoc
                }}
            >
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider;