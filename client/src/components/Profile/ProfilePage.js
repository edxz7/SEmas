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

  render(){
    return (
      <MyContext.Consumer>
        {context => (
          <ProfileStyle id="dashboard" class="profile-container" style={{ color: "white", display: "flex" }}>
            <div id="profile-info">
              <div id="user-info">
                <h5>Nombre</h5>
                <p>{context.state.user.username}</p>
                <p>{context.state.user.userLastName}</p>
                <h5>Email</h5>
                <p>{context.state.user.email}</p>
              </div>
              <br />
              <div id="commerce-info">
                <h5>Nombre del comercio</h5>
                <h5>Dirección:</h5>
              </div>
            </div>
            <div id="inventory-form">
  
                <h4>Actualiza tu inventario</h4>
  
                <p>Usa google sheets para mantener tu inventario organizado</p>
                <p>Usa el siguiente enlace para avilitar permmisos
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
                  <button onClick={this.onPress} type="submit">Actualizar</button>
                  { this.state.submited ?  <div>Tu inventario  a sido registrado, ahora puedes registrar tus ventas en la sección registrar -> ventas</div> : <div></div> }
                </form>
                <h4> o sube un hoja de calculo con tu inventario</h4>
            </div>
          </ProfileStyle>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Profile;