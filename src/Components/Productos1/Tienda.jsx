import React, { Component } from "react";
import Footer from "../../templates/Footer";
import LogicShop2 from "../Productos1/LogicShop";
import axios from "axios";
export default class Home extends Component {
  constructor() {
    super();
    this.state = {};
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    if(!localStorage.getItem('email1')){
        alert('Debes iniciar sesion')
        window.location.href='/login'
    }
    const url =
      "https://mundoref-back.herokuapp.com/api/distri/" + localStorage.getItem("email1");
    axios.get(url).then((res) => {

      if(res.data==="NO"){
        alert('No eres distribuidor')
        window.location.href="/tienda"
      }else{
        if(res.data[0].email_distribuidor===localStorage.getItem('email1')){
          
          }    
      }

      if(res.data[0].email_distribuidor===localStorage.getItem('email1')){

      }

    
    });
  }

  render() {
    return (
      <div>
        <br />
        <div>
          <LogicShop2 />
        </div>
        <br />
        <Footer />
      </div>
    );
  }
}
