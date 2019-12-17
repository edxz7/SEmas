import React, { Component } from "react";
import { ProfileStyle } from "./Profile.Styles";
import { MyContext } from "../../context";
import FormInput from "../FormInput/FormInput"


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
          <ProfileStyle id="dashboard" class="profile-container" style={{ color: "white", display: "flex" }}>
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
              <div id="commerce-info">
              <h3>Información del comercio</h3>
                <h5>Nombre del comercio</h5>
                <h5>Dirección:</h5>
              </div>
            </div>
            <div id="inventory-form">
  
                <h4>Para registrar tu actividad y crear "insights" manten actualizado tu inventario</h4>
  
                <p>Puedes usar google sheets para mantener tu inventario organizado,</p>
                <p>Usa el siguiente enlace para avilitar los permisos necesarios
                   {" "}
                  <a href="https://support.google.com/a/answer/60757?hl=es-419" target="_blank">aqui</a>
                </p>
                <form onSubmit={context.handleSubmitSpreadSheet}>
                  <FormInput
                    name='apiKey'
                    type='text'
                    handleChange={context.handleChangeSpreadSheet}
                    value={context.state.apiKey}
                    label='Llave de autorización'
                    required
                  />
                  <FormInput
                    name='spreadsheetId'
                    type='text'
                    handleChange={context.handleChangeSpreadSheet}
                    value={context.state.spreadsheetId}
                    label='Id de la hoja de calculo'
                    required
                  />
                  <button onClick={(e) => {
                    this.getData(e, context.state.apiKey, context.state.spreadsheetId, context.state.user);
                    }} type="submit">Actualizar</button>
                  { this.state.submited ?  <div>Tu inventario  a sido registrado, ahora puedes registrar tus ventas en la sección registrar -> ventas</div> : <div></div> }
                </form>
                <h4 id="option"> o sube tu inventario en formato .csv</h4>
            </div>
          </ProfileStyle>
        )}
      </MyContext.Consumer>
    );
  }
}

Profile.contextType=MyContext;

export default Profile;