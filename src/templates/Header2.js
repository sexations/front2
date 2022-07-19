import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import axios from "axios";


import { TiShoppingCart } from "@react-icons/all-files/ti/TiShoppingCart";
import { GoSignIn } from "@react-icons/all-files/go/GoSignIn";
import { BiLogInCircle } from "@react-icons/all-files/bi/BiLogInCircle";
import { HiLogout } from "@react-icons/all-files/hi/HiLogout";
import { AiTwotoneTool } from "@react-icons/all-files/ai/AiTwotoneTool";
import { GiShoppingCart } from "@react-icons/all-files/gi/GiShoppingCart";
import { SiFacebook } from "@react-icons/all-files/si/SiFacebook";
import { FaTruckPickup } from "@react-icons/all-files/fa/FaTruckPickup";
import Clock from '../Components/motor/clock'

let navbar;
let sticky;
export default class Header2 extends Component {
  constructor() {
    super();
    this.state = {
      user: localStorage.getItem("email1"),
      carritos: [],
      articulos: 0,
    };
    this.buscarCarritos = this.buscarCarritos.bind(this);
  }

  componentDidMount() {
    if (!this.state.user) {
      this.setState({ user: "" });
    }
    this.buscarCarritos();
  }

  handleSticky = () => {
    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  };

  async buscarCarritos() {
    const email = localStorage.getItem("email1");
    let url = "https://mundoref-back.herokuapp.com/api/carrito/" + email;
    await axios
      .get(url)
      .then((res) => {
        this.setState({ carritos: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
    var articulos = 0;

    this.state.carritos.forEach((element) => {
      articulos = articulos + element.cantidad;
      this.setState({ articulos: articulos });
    });
  }

  onClicDs = () => {
    localStorage.removeItem("nombre1");
    localStorage.removeItem("apellido1");
    localStorage.removeItem("direccion1");
    localStorage.removeItem("ref1");
    localStorage.removeItem("email1");
    localStorage.removeItem("class1");
    localStorage.removeItem("shared");
    localStorage.removeItem("_grecaptcha");
    window.location.href='/login';
  };

  render() {
    const mensaje = "USUARIO: " + this.state.user;
    return (
      <div className="sticky-top">
        <Navbar bg="white" expand="lg" id="center">
          <Container fluid>
            <Navbar.Brand href="/">
              <img
                src={require("../assets/logocomp.jpg")}
                id="logo"
                alt="mundo refrigeracion logo"
                width={"300 px"}
                padding={"20px"}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0 ml-5">
                <Nav.Link id="navMenu" href="/Tienda">
                  <span className="menutext">
                    Repuestos <TiShoppingCart />
                  </span>
                </Nav.Link>
                <Nav.Link id="navMenu" href="/Tienda2">
                  <span className="menutext">
                    Distribuidor <FaTruckPickup />
                  </span>
                </Nav.Link>
                <Nav.Link id="navMenu" href="/Servicio">
                  <span className="menutext">
                    Servicios <AiTwotoneTool />
                  </span>
                </Nav.Link>
                <Nav.Link id="navMenu" href="/registrar">
                  Registrar <GoSignIn />
                </Nav.Link>
                <Nav.Link id="navMenu" href="/Login">
                  Entrar <BiLogInCircle />
                </Nav.Link>
                <Nav.Link id="navMenu" onClick={this.onClicDs}>
                  Salir <HiLogout />
                </Nav.Link>
                <Nav.Link id="navMenu" href="/Comprar2">
                  Carrito <GiShoppingCart />
                  {this.state.articulos}
                </Nav.Link>
                <Clock className="clock" />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className="grayline"></div>

        <div className="secondBcont">
         
          <Nav.Link id="navMenu2" href="/comprar2">
            <GiShoppingCart /><span className="minicart">{this.state.articulos}</span>
          </Nav.Link>
          <Nav.Link
            id="navMenu2"
            href="https://www.facebook.com/M-REFRI-102886175769793/"
            target="_blank"
            rel="noreferrer"
          >
            <SiFacebook />
          </Nav.Link>

          <div className="secondB">
            <h6 className="cart">{mensaje}</h6>
          </div>
        </div>
      </div>
    );
  }
}
