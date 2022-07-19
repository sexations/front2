import React from "react";
import Image from "react-bootstrap/esm/Image";
import { IoLogoWhatsapp } from "@react-icons/all-files/io/IoLogoWhatsapp";

export default function ServiceA() {
  return (
    <div>
      <div id="services" class="services-area area-padding">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="section-headline services-head text-center">
                <h2 className="minus">Nuestros Servicios</h2>
                <p>
                  Somos un equipo de profesionales con mas de doce años de
                  experiencia que desde hace 5 años decidimos fundar MUNDO
                  REFRIGERACION para ofrecer al publico repuestos de primera
                  calidad y servicios cumpliendo los mas exigentes protocolos de
                  seguridad. Nuestro compromiso con la excelencia de nuestros
                  productos y servicios nos han convertido en lideres y
                  referentes en el medio.
                </p>
              </div>
            </div>
          </div>


          <a className="nodeco" href="https://api.whatsapp.com/send?phone=+573226822968&text=Hola, Quiero programar un servicio!">
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
              <a
                href="https://api.whatsapp.com/send?phone=+573226822968&text=Hola, Quiero programar un servicio!"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoWhatsapp className="homeWA" />
              </a>
            </div>
          </div>
          </a>
          

          <div class="row text-center">
            <div class="services-contents">
              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="about-move">
                  <div class="services-details">
                    <div class="single-services">
                      <div class="services-icon" href="#">
                        <div className="serviceIcon">
                          <i class="fa fa-briefcase"></i>
                        </div>
                      </div>
                      <h4>Neveras y nevecones</h4>
                      <div className="serviceImageCont">
                        <Image
                          src={require("../assets/work/w1.jpg")}
                          alt="Product"
                          className="serviceImage"
                          rounded
                          fluid
                        />
                      </div>
                      <p>
                        Servicio técnico especializado en neveras y nevecones,
                        mantenimiento, recarga de gas y repuestos en general.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="about-move">
                  <div class="services-details">
                    <div class="single-services">
                      <div class="services-icon" href="#">
                        <div className="serviceIcon">
                          <i class="fa fa-wrench"></i>
                        </div>
                      </div>
                      <h4>Estufas</h4>
                      <div className="serviceImageCont">
                        <Image
                          src={require("../assets/work/w2.jpg")}
                          alt="Product"
                          className="serviceImage"
                          rounded
                          fluid
                        />
                      </div>
                      <p>
                        Mantenimiento e instalación de estufas residenciales e
                        industriales.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="about-move">
                  <div class="services-details">
                    <div class="single-services">
                      <div class="services-icon" href="#">
                        <div className="serviceIcon">
                          <i class="fa fa-briefcase"></i>
                        </div>
                      </div>
                      <h4>Split</h4>
                      <div className="serviceImageCont">
                        <Image
                          src={require("../assets/work/w3.jpg")}
                          alt="Product"
                          className="serviceImage"
                          rounded
                          fluid
                        />
                      </div>
                      <p>
                        Servicio especializado en limpieza y reparacion de aires
                        acondicionados tipo split.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a className="nodeco" href="https://api.whatsapp.com/send?phone=+573226822968&text=Hola, Quiero programar un servicio!">
          <h4 className="titlereg4">
           <span classname="padtop3">Programa tu servicio</span>
          </h4>
          <div className="contactHome">
            <div className="contactHomeText">
              <p className="contactText">
                Contactanos por whatsapp donde uno de nuestros asesores atenderá
                tu solicitud
              </p>
            </div>
            <div className="contactHomeWA">
              <a
                href="https://api.whatsapp.com/send?phone=+573226822968&text=Hola, Quiero programar un servicio!"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoWhatsapp className="homeWA" />
              </a>
            </div>
          </div>
          </a>
          

          <div class="row text-center">
            <div class="services-contents">
              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="about-move">
                  <div class="services-details">
                    <div class="single-services">
                      <div class="services-icon" href="#">
                        <div className="serviceIcon">
                          <i class="fa fa-wrench"></i>
                        </div>
                      </div>
                      <h4>Campanas</h4>
                      <div className="serviceImageCont">
                        <Image
                          src={require("../assets/work/w4.jpg")}
                          alt="Product"
                          className="serviceImage"
                          rounded
                          fluid
                        />
                      </div>
                      <p>
                        Tenemos amplia experiencia en la instalacion y
                        mantenimiento de la campana de tu cocina, siempre con
                        los maximos controles de calidad
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="about-move">
                  <div class="services-details">
                    <div class="single-services">
                      <div class="services-icon" href="#">
                        <div className="serviceIcon">
                          <i class="fa fa-briefcase"></i>
                        </div>
                      </div>
                      <h4>Calentadores</h4>
                      <div className="serviceImageCont">
                        <Image
                          src={require("../assets/work/w5.jpg")}
                          alt="Product"
                          className="serviceImage"
                          rounded
                          fluid
                        />
                      </div>
                      <p>
                        Cumulacion, natural o forzado, mundo refrigeracion es tu
                        mejor opcion para mantenimiento y suministro de
                        repuestos de tu sistema de calefaccion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-4 col-xs-12">
                <div class="about-move">
                  <div class="services-details">
                    <div class="single-services">
                      <div class="services-icon" href="#">
                        <div className="serviceIcon">
                          <i class="fa fa-wrench"></i>
                        </div>
                      </div>
                      <h4>Lavadoras y Secadoras</h4>
                      <div className="serviceImageCont">
                        <Image
                          src={require("../assets/work/w6.jpg")}
                          alt="Product"
                          className="serviceImage"
                          rounded
                          fluid
                        />
                      </div>
                      <p>
                        Atendemos emergencias a domicilio y reparamos lavadoras
                        y secadoras de todas las marcas, con un amplio surtido
                        de repuestos, Mundo Refrogeracion es lider en reparacion
                        y mantenimiento de equipos de lavado.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
