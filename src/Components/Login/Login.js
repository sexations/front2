import React, { Component } from "react";
import Footer from "../../templates/Footer";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import bcrypt from "bcryptjs";
import Loading from '../../Components/motor/Loading'
import Aviso from "../motor/Aviso"

export default class logicLogin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      selector: false,
      clienteT: [],
      prueba:[],
      clave: "",
      emailC: "",
      count:0,
      propButtonEntrar:"ENTRAR",
      mensaje:"",
      mensaje1:"",
    };

    this.renderLogin = this.renderLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderRecoverPasword = this.renderRecoverPasword.bind(this);
    this.goToRecover = this.goToRecover.bind(this);
    this.comprar = this.comprar.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this)
  }

  // componentDidMount(){
  //     this.render();
  // }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
     //console.log(e.target.value);
  }

  buscarCliente = async () => {

    this.setState({propbutton:<Loading/>})
    
    if(this.state.email==='')
    {
      this.setState({mensaje:<Aviso mensaje={'noemail'} />})
    }else{
      if(this.state.password===''){
        this.setState({mensaje:<Aviso mensaje={'nopass'} />})
      }
    }

    const email = this.state.email;
    let url = "https://mundoref-back.herokuapp.com/api/login/" + email;

    await axios
      .get(url)
      .then((res) => {
        this.state.clienteT = res.data;
        this.clave = this.state.clienteT[0].password;
        this.state.emailC = this.state.clienteT[0].email;
      })
      .catch((error) => {
        //console.log(error);
      });

    const validPass = await bcrypt.compare(this.state.password, this.clave);
    
    if(this.clave===''){
      this.setState({mensaje:<Aviso mensaje={'noexist'} />})
    }

    if (!validPass) {
      this.setState({mensaje:<Aviso mensaje={'novalid'} />})
    } else {
      // alert('Si coinciden')
      var aleato = Math.floor(Math.random() * 10000000001);
      localStorage.setItem("ref1", aleato);
      localStorage.setItem("nombre1", this.state.clienteT[0].nombre);
      localStorage.setItem("apellido1", this.state.clienteT[0].apellido);
      localStorage.setItem("direccion1", this.state.clienteT[0].direccion);
      localStorage.setItem("email1", this.state.clienteT[0].email);
      localStorage.setItem("class1", this.state.clienteT[0].clasificacion);
      window.location.href="/Tienda";
    }
  };

  render() {
    if (this.state.selector === false) {
      return this.renderLogin();
    } else {
      return this.renderRecoverPasword();
    }
  }

  goToRecover() {
    this.setState({ selector: true });
  }

  goToLogin() {
    this.setState({ selector: false });
  }

  comprar() {
    window.location.replace("/Comprar2");
  }

  tienda() {
    window.location.replace("/Tienda");
  }

  recuperarPassword(){

    const email = this.state.email;
    const url = "https://mundoref-back.herokuapp.com/api/newcontra/" + email;
    axios.get(url)
    .then((res)=>{
      const body=res.data
      const url2 = "https://mundoref-back.herokuapp.com/api/postmail"
      axios.post(url2,body)
    })
  }

  renderRecoverPasword() {
    return (
      <div>
        <div class="home container">
          <h2 class="text-center bg-secondary fw-bold super-container text-white mt-3">
            RECUPERA TU CONTRASEÑA
          </h2>
          <h3 class="text-center fw-bold super-container mt-3">
            Introduce tu correo y recibiras instrucciones para la recuperacion,
            si no ves el correo recuerda revisar la carpeta SPAM
          </h3>

          <form
            onSubmit={() =>
              this.recuperarPassword()
            }
          >
            <div className="container">
              <div class="mb-3 row">
                <label for="nombre" class="col-sm-2 col-form-label">
                  <h5>Correo</h5>
                </label>
                <div class="col-sm-10">
                  <input
                    name="email"
                    onChange={this.handleChange}
                    type="email"
                    class="form-control"
                    id="email"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-success">
                ENVIAR
              </button>
            </div>
          </form>
          <br />
          <button onClick={() => this.goToLogin()} className="btn btn-warning">
            Regresar al Login
          </button>
        </div>

        <Footer />
      </div>
    );
  }

  renderLogin() {
    const ref = localStorage.getItem("ref1");
    if (!ref) {
      return (
        <div>
          <div class="home container">
            <h2 class="text-center bg-secondary fw-bold super-container text-white mt-3">
              INICIO DE SESION
            </h2>
            <h3 class="text-center fw-bold super-container mt-3">
              Introduce tu correo y contraseña
            </h3>

            <form>
              <div className="container">
                <div class="mb-3 row">
                  <label for="nombre" class="col-sm-2 col-form-label">
                    Correo
                  </label>
                  <div class="col-sm-10">
                    <input
                      name="email"
                      onChange={this.handleChange}
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="Introduce tu email"
                      required
                    />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label for="password" class="col-sm-2 col-form-label">
                    Password
                  </label>
                  <div class="col-sm-10">
                    <input
                      name="password"
                      onChange={this.handleChange}
                      type="password"
                      class="form-control"
                      id="password"
                      placeholder="Introduce tu password"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => this.buscarCliente()}
                  className="btn btn-success"
                >

                  {this.state.propButtonEntrar}

                </button>
                <div>{this.state.mensaje}</div>
              </div>
            </form>
            <br />
            <button
              onClick={() => this.goToRecover()}
              className="btn btn-primary"
            >
              OLVIDASTE TU CONTRASEÑA
            </button>
          </div>
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h3 className="titlereg">BIENVENIDO A MUNDO REFRIGERACION</h3>
          <br />
          <h4>
            Puedes ver tu carrito de compras, visitar nuestra tienda de
            repuestos y contratar nuestos servicios
          </h4>
          <br />

          <div className="products mb-3 row justify-content-center">
            <Card style={{ width: "20rem", marginLeft: "2rem", marginTop: "2rem"}}>
              <Card.Img
                variant="top"
                src="https://drive.google.com/uc?export=view&id=14PEbJ_27VfxUVLVxc0wBGMcXUY2jEuQK"
              />
              <Card.Body>
                <Card.Title>
                  <strong>CARRITO</strong>
                </Card.Title>
                <Card.Text>
                  Visita tu carrito para ajustar cantidades y procesar el pago
                  de tus productos seleccionados
                </Card.Text>
                <Button onClick={() => this.comprar()} variant="primary">
                  PROCESAR
                </Button>
              </Card.Body>
            </Card>

            <Card style={{ width: "20rem", marginLeft: "2rem" }}>
              <Card.Img
                style={{ marginTop: "2rem" }}
                variant="top"
                src="https://drive.google.com/uc?export=view&id=1HmtganY-Pbu40PBuD6v5HP_aGTexG9KP"
              />
              <Card.Body>
                <Card.Title>
                  <strong>TIENDA</strong>
                </Card.Title>
                <Card.Text>
                  Visita nuestra tienda donde encontraras una amplia variedad de
                  productos y repuestos
                </Card.Text>
                <Button onClick={() => this.tienda()} variant="primary">
                  COMPRAR
                </Button>
              </Card.Body>
            </Card>

          </div>
          <br />
          <Footer />
        </div>
      );
    }
  }
}
