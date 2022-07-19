import React, { Component } from "react";
import Footer from "../templates/Footer";
import Carrusel from "../templates/Carrusel";
import NavLink from "react-bootstrap/esm/NavLink";
import { IoLogoWhatsapp } from "@react-icons/all-files/io/IoLogoWhatsapp";
export default class Home extends Component {

  
  render() {
    return (
      <div>
        <Carrusel />
        <br />
        <NavLink
          className="nodeco"
          href="https://api.whatsapp.com/send?phone=+573226822968&text=Hola, Quiero programar un servicio!"
        >
          <h4 className="titlereg4">
            <span className="padtop3">Programa tu servicio</span>
          </h4>
          <div className="contactHome">
            <div className="contactHomeText">
              <p className="contactText">
                Contactanos por whatsapp donde uno de nuestros asesores atenderá
                tu solicitud
              </p>
            </div>
            <div className="contactHomeWA">
              <span>
                <IoLogoWhatsapp className="homeWA" />
              </span>
            </div>
          </div>
        </NavLink>

        <br />
        <h4 className="titlereg2">
          <span className="padtop3">Nuestras marcas de confianza</span>
        </h4>
        <br />
        <div className="logocont">
          <img
            src={require("../assets/cinta-marca.jpg")}
            // src="https://drive.google.com/uc?export=view&id=1lZVkwEaqkzb9XZfQBb_O3cl-v9GkjyQE"
            alt="mundo refrigeracion marcas"
            className="logoban"
          />
        </div>
        <br />
        <h4 className="titlereg3">
          <span className="padtop3">Ubicanos en Cartagena</span>
        </h4>
        <br />
        <iframe
          title="google maps 2"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1962.127428591376!2d-75.46208818270989!3d10.40132177280635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd4b7c446cfa2ce1c!2zMTDCsDI0JzA4LjEiTiA3NcKwMjcnMzkuOSJX!5e0!3m2!1ses-419!2sco!4v1654910782367!5m2!1ses-419!2sco"
          width="90%"
          height="300"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy={"no-referrer-when-downgrade"}
        ></iframe>
        <br />
        <Footer />
      </div>
    );
  }
}
