import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <br />
        <br />

        <footer className="py-5" id="footer">
          <div className="container">
            <p className="m-0 text-center text-white fs-4">
              Copyright &copy; Mundo Refrigeracion
            </p>
          </div>
          <div className="col-auto text-center">
            <p className="m-0 text-center text-white fs-5">
              Diseño y plataforma:{" "}
              <span>
                <a
                  className="diseño"
                  href="https://solucionesamtec.com.co"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Soluciones AMTEC
                </a>
              </span>
            </p>
          </div>
          <div className="col-auto text-center">
            
            <a target={"_blank"} href="/terminos" className="m-0 text-center text-white fs-5">
              Terminos y condiciones
            </a>
            
          </div>
          {/* <div className="col-auto text-center">
            <p className="m-0 text-center text-white fs-5">
              Politicas de privacidad
            </p>
          </div> */}
        </footer>
      </div>
    );
  }
}
