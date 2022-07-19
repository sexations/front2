import React, { Component } from "react";
import Footer from "../../templates/Footer";
import LogicShop from "../Productos/LogicShop";
import axios from "axios";
export default class Home extends Component {
  componentDidMount() {
    const url =
      "https://mundoref-back.herokuapp.com/api/distri/" +
      localStorage.getItem("email1");

    axios.get(url).then((res) => {
      const ex = res.data.email_distribuidor;
      if (ex === localStorage.getItem("email1")) {
      //  alert("Bienvenido distribuidor");
        window.location.href = "/tienda2";
      }
    });
  }

  render() {
    return (
      <div>
        <br />
        <div>
          <LogicShop />
        </div>
        <br />
        <Footer />
      </div>
    );
  }
}
