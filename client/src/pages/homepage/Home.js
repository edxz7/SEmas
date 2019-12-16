import React, { Component } from "react";
import { Link } from "react-router-dom";
import barRaise from "../../assets/images/bar_raise.png";
import pie from "../../assets/images/pie.png";
import currency from "../../assets/images/currency.png";
import {HomeStyles, MyBlocks} from "./Home.Styles";
import { MainButton } from "../../styledComponents/GenericStyles"


export default class Home extends Component {
  render() {
    return (
      <HomeStyles>
        <header>
          <h1>Crece +</h1>
        </header>
        <section className="main-container">
          <MyBlocks className="subcontainer">
            <img src={barRaise} alt="" />
            <h2>Tus datos crecen tu negocio</h2>
            <p>La información de tus ventas te ayudara a tomar las mejores decisiones para tu negocio</p>
          </MyBlocks>
          <MyBlocks className="subcontainer">
            <img src={pie} alt="" />
            <h2>AI a tu servicio</h2>
            <p>Usa modelos predictivos para crecer tu negocio</p>
          </MyBlocks>
          <MyBlocks className="subcontainer">
            <img src={currency} alt="" />
            <h2>Maximizar tus ganancias </h2>
            <p>Obten recomendaciones en tiempo real para maximizar tus ganancias</p>
          </MyBlocks>
        </section>
        <section className="btn-container">
          <Link to="/signup">
            <MainButton>Sign Up</MainButton>
          </Link>
          <Link to="/login">
            <MainButton>Log In</MainButton>
          </Link>
        </section>
      </HomeStyles>

    );
  }
}


