import React, { Component } from "react";
import Footer from "../templates/Footer";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

export default class Registrar extends Component {
  constructor() {
    super();
    this.state = {
      nombre: "",
      apellido: "",
      email: "",
      email2: "",
      telefono: "",
      pais: "",
      ciudad: "",
      direccion: "",
      documento: "",
      clasificacion: "",
      echeck: false,
      celcheck: false,
      regcomp: false,
      fiscaltype: "",
      password: "",
      password2: "",
      emailComp: "",
      mailcode: "",
      ipreg: "",
      timereg: "",
      datereg: "",
      propbutton: "REGISTRAR",
    };
    this.agregarCliente = this.agregarCliente.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.cambio = this.cambio.bind(this);
  }

  async componentDidMount(e) {
    localStorage.removeItem("shared");
    const res = await axios.get("https://geolocation-db.com/json/");
    this.setState({ ipreg: res.data.IPv4 });
    var hoy = new Date();
    var horacalc =
      hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds();
    this.setState({ timereg: horacalc });
    var fechacalc =
      hoy.getDate() + "-" + hoy.getMonth() + "-" + hoy.getFullYear();
    this.setState({ datereg: fechacalc });
  }

  async agregarCliente(e) {
    if (this.state.password.length < 5) {
      alert("La contraseña debe tener 5 caracteres");
      window.location.reload();
    } else {
      const captchacheck = localStorage.getItem("shared");

      if (!captchacheck) {
        alert("VERIFICA TU CAPTCHA !!");
        e.preventDefault();
        this.setState({ propbutton: "REGISTRAR" });
      } else {
        if (this.state.email !== this.state.email2) {
          alert("los correos son diferentes !");
          e.preventDefault();
          this.setState({ propbutton: "REGISTRAR" });
        } else {
          if (this.state.password !== this.state.password2) {
            alert("Las constraseñas son diferentes");
            e.preventDefault();
            this.setState({ propbutton: "REGISTRAR" });
          } else {
            const URIsms = "http://api.ckpnd.com:5000/v1/sms/send"

            fetch(URIsms,{
              method:'POST',
              body:{
                "campaign_name": "SMS de verificacion mundo refrigeracion",
                "message": "Codigo #: "+this.state.mailcode,
                "mobile_numbers": [
                    this.state.telefono.toString
                ]
            },
              headers:{
                "Authorization": "Bearer {ef7458f3.e429413ea8b908653634e073}",
                "Content-Type": "application/json"
            }
            }).then((res)=>console.log(res))
          
            const uri = "https://mundoref-back.herokuapp.com/api/cliente";
            await axios
              .post(uri, this.state)
              .then(function (response) {
                //console.log(response);
              })
              .then(alert("Usuario registrado, verifica tu email para validar"))
              .then((data) => {
                this.setState({
                  nombre: "",
                  apellido: "",
                  email: "",
                  email2: "",
                  telefono: "",
                  pais: "",
                  ciudad: "",
                  direccion: "",
                  clasificacion: "",
                  echeck: false,
                  celcheck: false,
                  regcomp: false,
                  fiscaltype: "",
                  password: "",
                  password2: "",
                });
                window.location.replace("/Login");
              })
              .catch(function (error) {
                console.log(error);
              });
          }
        }
      }
    }
  }

  handleChange(e, text) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      clasificacion: "h1z34rft_algt_2048",
      pais: "colombia",
      echeck: false,
      celcheck: false,
      regcomp: false,
      mailcode: Math.floor(Math.random() * 1000001),
    });
    //console.log(e.target.name);
    //console.log(e.target.value);

  }

  cambio = (value) => {
    //console.log("Captcha value:", value);
  };

  render() {
    const recaptchaRef = React.createRef();
    function onChange() {
      const recaptchaValue = recaptchaRef.current.getValue();
      localStorage.setItem("shared", recaptchaValue);
    }
    return (
      <div>
        <br />
        <h4 className="titlereg3">
          <span className="padtop3">Registro en Mundo Refrigeracion</span>
        </h4>
        <br />
        <h3 class="text-center fw-bold super-container mt-3">
          Registrate y recibiras un correo con un codigo de verificacion, si no
          ves el correo recuerda revisar la carpeta SPAM
        </h3>
        <br />
        <br />

        <form onSubmit={this.agregarCliente}>
          <div className="container">
            <div className="mb-3 row">
              <label for="nombre" className="col-sm-2 col-form-label">
                <h4>Nombre</h4>
              </label>
              <div className="col-sm-10">
                <input
                  name="nombre"
                  onChange={this.handleChange}
                  type="text"
                  className="form-control"
                  id="nombre"
                  placeholder="Tu Nombre..."
                  required
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label for="apellido" className="col-sm-2 col-form-label">
                <h4>Apellido</h4>
              </label>
              <div className="col-sm-10">
                <input
                  name="apellido"
                  onChange={this.handleChange}
                  type="text"
                  className="form-control"
                  id="apellido"
                  placeholder="Tu Apellido..."
                  required
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label for="Email" className="col-sm-2 col-form-label">
                <h4>Email</h4>
              </label>
              <div className="col-sm-10">
                <input
                  name="email"
                  onChange={this.handleChange}
                  type="email"
                  pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
                  className="form-control"
                  id="Email"
                  placeholder="Tu Email..."
                  required
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label for="Email2" className="col-sm-2 col-form-label">
                <h4> verificar Email</h4>
              </label>
              <div className="col-sm-10">
                <input
                  name="email2"
                  onChange={this.handleChange}
                  type="email"
                  pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}"
                  className="form-control"
                  id="Email2"
                  placeholder="Verifica el email del paso anterior..."
                  required
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label for="Email2" className="col-sm-2 col-form-label">
                <h4> Telefono</h4>
              </label>
              <div className="col-sm-10">
                <input
                  name="telefono"
                  onChange={this.handleChange}
                  type="number"
                  className="form-control"
                  id="telefono"
                  placeholder="Telefono ej: 3001010101..."
                  required
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label for="password" className="col-sm-2 col-form-label">
                <h4>Password</h4>
              </label>
              <div className="col-sm-10">
                <input
                  name="password"
                  onChange={this.handleChange}
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Tu Contraseña... min 5 caracteres)"
                  required
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label for="password2" className="col-sm-2 col-form-label">
                <h4>Verificar Password</h4>
              </label>
              <div className="col-sm-10">
                <input
                  name="password2"
                  onChange={this.handleChange}
                  type="password"
                  className="form-control"
                  id="password2"
                  placeholder="Verifica la contraseña del paso anterior..."
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn btn-success">
              {this.state.propbutton}
            </button>

            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LdFalYgAAAAABvBlwcVKwqCNNUv1H3Lp5734pVN"
              onChange={onChange}
            />
          </div>
        </form>
        <br />

        <Footer />
      </div>
    );
  }
}
