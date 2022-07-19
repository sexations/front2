import React, { Component } from "react";
import Helmet from "react-helmet";
import Footer from "../templates/Footer";

import Modal from "react-bootstrap/Modal";
import bcrypt from "bcryptjs";

import Button from "react-bootstrap/Button";

import Login from "../Components/Login/Login";
import axios from "axios";
export default class comprar2 extends Component {
  constructor() {
    super();
    this.state = {
      suma: 0,
      carritos: [],
      transId: 0,
      show: false,
      show2: false,
      show3:false,
      tipdoc: "",
      numdoc: "",
      direnv: "",
      celular: "",
      procesado: [],
      hora:"",
      fecha:"",
      ip:"",
      clienteT:[],
      contra:""
    };
    this.eliminar = this.eliminar.bind(this);
    this.adding = this.adding.bind(this);
    this.restar = this.restar.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose2 = this.handleClose2.bind(this);
    this.handleClose3 = this.handleClose3.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
  }
  verifyPassword(){
    this.setState({show3:true})
  }

  handleClose() {
    this.setState({ show: false });
    this.setState({ tipdoc: "", numdoc: "", direnv: "", celular: "" });
    window.location.reload()
  }

  handleClose3() {
    this.setState({ show3: false });
    this.setState({ tipdoc: "", numdoc: "", direnv: "", celular: "" });
    window.location.reload()
  }

  handleClose2() {
    this.setState({ show2: false });
    this.setState({ tipdoc: "", numdoc: "", direnv: "", celular: "" });
    window.location.reload()
  }
  handleShow() {

    if(this.state.suma===0){
      alert('El carrito no puede estar vacio, intenta agregar un producto')
      window.location.href="/tienda"
    }else{
      this.setState({ show: true });
    }
  }

  async componentDidMount() {
    const email = localStorage.getItem("email1");
    let url = "https://mundoref-back.herokuapp.com/api/carrito/" + email;

    await fetch(url, {
      METHOD: "GET",
      headers: {
        Accept: "aplication/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ carritos: data });
      });
    this.CalcularTotal();
    var aleato = Math.floor(Math.random() * 1000001);
    this.setState({transId: aleato.toString()});

    const res = await axios.get("https://geolocation-db.com/json/");
    this.setState({ ip: res.data.IPv4 });
    var hoy = new Date();
    var horacalc = hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds();
    this.setState({ hora: horacalc });
    var fechacalc =
      hoy.getDate() + "-" + hoy.getMonth() + "-" + hoy.getFullYear();
    this.setState({ fecha: fechacalc });

    const uri = "https://mundoref-back.herokuapp.com/api/login/" + localStorage.getItem('email1');

    await axios
    .get(uri)
    .then((res) => {
      this.state.clienteT = res.data;
      //alert(JSON.stringify(this.state.clienteT))
    })
    .catch((error) => {
      //console.log(error);
    });

  }

  CalcularTotal() {
    var subtotal = 0;
    var carts = this.state.carritos;
    carts.map((element) => {
      if (element.email === localStorage.getItem("email1")) {
        // eslint-disable-next-line no-unused-vars
        const cartadd = this.state.procesado.push(element);
        subtotal = subtotal + element.cantidad * element.precio_venta;
      }
      return subtotal;
    });
    //console.log(this.state.procesado);
    this.setState({ suma: subtotal });
  }

  eliminar(id) {
    const url = "https://mundoref-back.herokuapp.com/api/carrito/" + id;
    //console.log(url);
    fetch(url, {
      method: "DELETE",
      mode: "cors",
      headers: {
        Accept: "aplication/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.reload();
      });
  }

  adding(id, nombre, cantidad, precio_venta, productId) {
    const cantidadMod = cantidad + 1;
    const url = "https://mundoref-back.herokuapp.com/api/carrito/" + id;
    const aumento = {
      email: localStorage.getItem("email1"),
      id_dbproducto: id,
      nombre: nombre,
      cantidad: cantidadMod,
      productId: productId,
      precio_venta: precio_venta,
      direnv: "",
    };

    fetch(url, {
      method: "PUT",
      body: JSON.stringify(aumento),
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.reload();
      })
      .catch((err) => console.error(err));
  }

  restar(id, nombre, cantidad, precio_venta, productId) {
    if (cantidad > 1) {
      const cantidadMod = cantidad - 1;
      const url = "https://mundoref-back.herokuapp.com/api/carrito/" + id;
      const aumento = {
        email: localStorage.getItem("email1"),
        id_dbproducto: id,
        nombre: nombre,
        cantidad: cantidadMod,
        productId: productId,
        precio_venta: precio_venta,
      };

      fetch(url, {
        method: "PUT",
        body: JSON.stringify(aumento),
        mode: "cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          //console.log(data);
        })
        .then(window.location.reload())
        .catch((err) => console.error(err));
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    //console.log(e.target.name);
    //console.log(e.target.value);
  }

  async checkPassword(){
    //alert('entre a check password')
    //alert(this.state.clienteT[0].password)
    //alert(this.state.contra)

    if(this.state.contra===""){
      alert('La contraseña no puede estar vacia')
    }else{
      const validPass = await bcrypt.compare(this.state.contra, this.state.clienteT[0].password);
      if(validPass){
        this.setState({show3:false})
        this.setState({show:true})
      }else{
        alert('contraseña invalida')
        window.location.reload()
      }
    }

  }

  checkout() {
    if (this.state.tipdoc === "") {
      alert("El tipo de documento no puede estar vacio");
      this.setState({ show2: false });
      this.setState({ show: true });
      this.setState({ tipdoc: "" });
    } else {
      if (this.state.numdoc === "") {
        alert("El numero de documento no puede estar vacio");
        this.setState({ show2: false });
        this.setState({ show: true });
      } else {
        if (this.state.direnv === "") {
          alert("La direccion no puede estar vacia");
          this.setState({ show2: false });
          this.setState({ show: true });
        } else {
          if (this.state.celular === "") {
            alert("El numero de celular no puede estar vacio");
            this.setState({ show2: false });
            this.setState({ show: true });
          } else {
            const url="https://mundoref-back.herokuapp.com/api/carrito/procesado"
            const body = {
              codigo_carrito: this.state.transId,
              nombre_comprador: localStorage.getItem("nombre1"),
              apellido_comprador: localStorage.getItem("apellido1"),
              tipo_documento: this.state.tipdoc,
              documento_comprador: this.state.numdoc,
              direccion_envio: this.state.direnv,
              email_comprador: localStorage.getItem("email1"),
              celular: this.state.celular,
              carrito: this.state.procesado,
              hora:this.state.hora,
              ip:this.state.ip,
              fecha:this.state.fecha,
            };
            //console.log(body);
            axios.post(url,body)
            
            // this.state.procesado.map((elemento)=>{
            //   const url = "https://mundoref-back.herokuapp.com/api/carrito/" + elemento._id;
            //   //console.log(url);
            //   fetch(url, {
            //     method: "DELETE",
            //     mode: "cors",
            //     headers: {
            //       Accept: "aplication/json",
            //       "Content-Type": "application/json",
            //     },
            //   })
            //     .then(
            //       (res) => console.log(res.json())
            //       )
               
            // })



            this.setState({ tipdoc: "", numdoc: "", direnv: "", celular: "" });
            this.setState({ show2: true });
            this.setState({ show: false });
          }
        }
      }
    }
  }

  revisarCarrito(){
    window.location.href='/ConsultarVenta'
  }

  render() {
    if(!localStorage.getItem('email1')){
      return(
        <div>
          <Login />
        </div>
      )
    }else{
      return (
        <div>
          <br />
          <h4 className="titlereg2">
            VERIFICA LA INFORMACION Y PROCESA EL PAGO
          </h4>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  <h4><b>Nombre</b></h4>
                </th>
                <th scope="col">
                  <h4><b>Apellido</b></h4>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <h4>{localStorage.getItem("nombre1")}</h4>
                </td>
                <td>
                  <h4>{localStorage.getItem("apellido1")}</h4>
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />

          <button
            className="btn btn-success"
            onClick={() => {
              this.verifyPassword();
            }}
          >
            PROCESAR
          </button>
            <br />
            <br />
          <button
            className="btn btn-primary"
            onClick={() => {
              this.revisarCarrito();
            }}
          >
              MIS COMPRAS
          </button>

          <Modal
            show={this.state.show3}
            onHide={() => {
              this.handleClose2();
            }}
            animation={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>
               VERIFICA TU CONTRASEÑA PARA CONTINUAR
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
         
       
              <div className="mb-3 row">
                <label for="numdoc" className="col-sm-2 col-form-label">
                 Intruduce tu contraseña
                </label>
                <div className="col-sm-10">
                  <input
                    placeholder="Contraseña..."
                    name="contra"
                    onChange={this.handleChange}
                    type="password"
                    className="form-control"
                    id="contra"
                    required
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.handleClose3()}>
                Cancelar
              </Button>
              <Button variant="primary" onClick={() => this.checkPassword()}>
                Continuar
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal
            show={this.state.show}
            onHide={() => {
              this.handleClose();
            }}
            animation={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>
                Completa la siguiente informacion y procesa tu pago
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="col-md-5">
                <label for="tipdoc" class="form-label">
                  Tipo de documento
                </label>
                <select
                  name="tipdoc"
                  onChange={this.handleChange}
                  className="form-select"
                  id="tipdoc"
                  required
                >
                  <option value="">Elige...</option>
                  <option value={"CC"}>CC</option>
                  <option value={"NIT"}>NIT</option>
                </select>
              </div>
              <br />
              <div className="mb-3 row">
                <label for="numdoc" className="col-sm-2 col-form-label">
                  Numero de documento
                </label>
                <div className="col-sm-10">
                  <input
                    placeholder="numero de documento..."
                    name="numdoc"
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    id="numdoc"
                    required
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="direnv" className="col-sm-2 col-form-label">
                  Direcciion de envio
                </label>
                <div className="col-sm-10">
                  <input
                    placeholder="direccion de envio..."
                    name="direnv"
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    id="direnv"
                    required
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label for="celular" className="col-sm-2 col-form-label">
                  Celular
                </label>
                <div className="col-sm-10">
                  <input
                    placeholder="Numero de celula... Ej:3201010101"
                    name="celular"
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    id="celular"
                    required
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.handleClose()}>
                Cancelar
              </Button>
              <Button variant="primary" onClick={() => this.checkout()}>
                Checkout
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal
            show={this.state.show2}
            onHide={() => {
              this.handleClose2();
            }}
            animation={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Selecciona el procesador de pago</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Helmet>
                <script
                  src="https://checkout.epayco.co/checkout.js"
                  data-epayco-key="bf78c09944130cd3220c5c81eb101f0b"
                  className="epayco-button"
                  data-epayco-amount={this.state.suma.toString()}
                  data-epayco-tax="0.00"
                  data-epayco-tax-ico="0.00"
                  data-epayco-tax-base={this.state.suma.toString()}
                  data-epayco-name={"Carrito: "+this.state.transId}
                  data-epayco-description={"Carrito: "+this.state.transId}
                  data-epayco-currency="cop"
                  data-epayco-country="CO"
                  data-epayco-test="false"
                  data-epayco-external="false"
                  data-epayco-response="https://mundorefrigeracion.co/carritos/cancelado"
                  data-epayco-confirmation={"https://mundorefrigeracion.co/carritos/"+this.state.transId}
                  data-epayco-button="https://multimedia.epayco.co/dashboard/btns/btn5.png"
                ></script>
              </Helmet>
              <form>
                <script
                  src="https://checkout.epayco.co/checkout.js"
                  data-epayco-key="bf78c09944130cd3220c5c81eb101f0b"
                  className="epayco-button"
                  data-epayco-amount={this.state.suma.toString()}
                  data-epayco-tax="0.00"
                  data-epayco-tax-ico="0.00"
                  data-epayco-tax-base={this.state.suma.toString()}
                  data-epayco-name={"Carrito: "+this.state.transId}
                  data-epayco-description={"Carrito: "+this.state.transId}
                  data-epayco-currency="cop"
                  data-epayco-country="CO"
                  data-epayco-test="false"
                  data-epayco-external="false"
                  data-epayco-response="https://mundorefrigeracion.co/carritos/cancelado"
                  data-epayco-confirmation={"https://mundorefrigeracion.co/carritos/"+this.state.transId}
                  data-epayco-button="https://multimedia.epayco.co/dashboard/btns/btn5.png"
                ></script>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.handleClose2()}>
                Cancelar
              </Button>
            </Modal.Footer>
          </Modal>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  <h2>TOTAL</h2>
                  <h3>{this.state.suma}</h3>
                </th>
              </tr>
            </thead>

              <h4 className="titlereg3">
                En esta seccion podras eliminar productos y modificar cantidades
                antes de procesar el pago
              </h4>
          
          </table>

          <div className="CienCart">
            <div className="namecart">NOMBRE DEL ARTICULO</div>

            <div className="cantidadCart">CANTIDAD</div>
            <div className="precioUnit">PRECIO UNITARIO</div>
            <div className="precioUnit">TOTAL</div>
            <div className="eliminar">ELIMINAR</div>
          </div>

          {
            // eslint-disable-next-line array-callback-return
            this.state.carritos.map((item) => {
              if (item.email === localStorage.getItem("email1"))
                return (
                  <div>
                    <div className="CienCart" key={item._id}>
                      <div className="namecart">{item.nombre}</div>

                      <div className="cantidadCart">
                        {item.cantidad}
                        <button
                          onClick={() => {
                            this.adding(
                              item._id,
                              item.nombre,
                              item.cantidad,
                              item.precio_venta,
                              item.productId
                            );
                          }}
                          className="mx-2"
                        >
                          +
                        </button>
                        <button
                          onClick={() => {
                            this.restar(
                              item._id,
                              item.nombre,
                              item.cantidad,
                              item.precio_venta,
                              item.productId
                            );
                          }}
                          className=" button mx-2"
                        >
                          -
                        </button>
                      </div>
                      <div className="precioUnit">{item.precio_venta}</div>
                      <div className="precioUnit">
                        {item.precio_venta * item.cantidad}
                      </div>
                      <div className="eliminar">
                        <button
                          onClick={() => this.eliminar(item._id)}
                          className="btn-info btn-sm"
                        >
                          ELIMINAR
                        </button>
                      </div>
                    </div>
                  </div>
                );
            })
          }
          <Footer />
        </div>
      );
    }    
  }
}
