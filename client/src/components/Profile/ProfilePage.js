import React, { Component } from "react";
import { ProfileStyle } from "./Profile.Styles";
import { MyContext } from "../../context";

class Profile extends Component {
  state = {
    submited: false,  
  };
  onPress = () => {
    this.setState({ submited: !this.state.submited });
  };
  getData = (e, apiKey, spreadsheetId, user) => {
    this.setState({ submited: !this.state.submited })
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${
      spreadsheetId
      }/values:batchGet?ranges=Inventario&majorDimension=ROWS&key=${apiKey}`
    fetch(url)
    .then(response => response.json())
    .then(data => {
      let batchRowValues = data.valueRanges[0].values;
      const rows = [];
      for (let i = 1; i < batchRowValues.length; i++) {
        let rowObject = {
          author:user._id
        };
        for (let j = 0; j < batchRowValues[i].length; j++) {
          rowObject[batchRowValues[0][j]] = batchRowValues[i][j];
        }
        rows.push(rowObject);
      }
      this.context.handleInventory(rows, e);
    })
  } 

  render(){
    return (
      <MyContext.Consumer>
        {context => (
          <ProfileStyle id="dashboard" className="profile-container" style={{ color: "white", display: "flex" }}>
            <div id="profile-info">
              <div id="user-info">
              <h3>Información del usuario</h3>
                <h5>Nombre</h5>
                <p>{context.state.user.username}</p>
                <p>{context.state.user.userLastName}</p>
                <h5>Email</h5>
                <p>{context.state.user.email}</p>
              </div>
              <br />
            </div>
              <br />
            <div id="commerce-info">
              <h3>Información del comercio</h3>
              <h5>Nombre del comercio</h5>
              <p>{context.state.commerce.name}</p>
              <h5>Categoria:</h5>
              <p>{context.state.commerce.category}</p>
              <h5>Numero de empleados:</h5>
              <p>{context.state.commerce.numEmployees}</p>
              <h5>Dirección:</h5>
              <p>{context.state.commerce.address}</p>
            </div>
          </ProfileStyle>
        )}
      </MyContext.Consumer>
    );
  }
}

Profile.contextType=MyContext;

export default Profile;