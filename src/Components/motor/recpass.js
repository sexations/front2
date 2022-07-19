import React, { Component } from 'react';
import axios from 'axios';
import Footer from '../../templates/Footer';

import Modal from "react-bootstrap/Modal";

import Button from "react-bootstrap/Button";
export default class recpass extends Component {

  constructor() {
    super();
    this.state={
        codigo:'',
        mailcode:'',
        clienteT:[],
        show:false,
        password1:"",
        password2:""          
        };
      
       
        this.handleChange = this.handleChange.bind(this);
        this.validar = this.validar.bind(this);
        this.actualizar = this.actualizar.bind(this);
        // this.componentDidMount = this.componentDidMount.bind(this)
}

handleClose() {
  this.setState({ show: false });
}

actualizar(){
  if(this.state.password1===this.state.password2){
    const url="https://mundoref-back.herokuapp.com/api/newcontra"
    const body = {password:this.state.password1,id:this.state.clienteT._id}
    axios.post(url,body)
      .then((res)=>{//console.log(res.data)
        alert('Password actualizado')
        window.location.href="/Login"
      })
   
  }else{
    alert('Las contraseñas son diferentes')
  }

}

async validar(){
    const codigo=this.state.codigo
    let url='https://mundoref-back.herokuapp.com/api/validar/'+codigo;
    await axios.get(url)
    .then(res => {
        this.state.mailcode=res.data[0].mailcode
        this.state.clienteT=res.data[0]
    })
    .catch((error) => {
    //console.log(error); 
    });  
    if(codigo===this.state.mailcode){  
    this.setState({show:true})
    }else{
      alert('Este codigo no existe, intenta de nuevo' )
    }
}

handleChange(e){
    const {name,value} = e.target; 
    this.setState({
        [name]:value
    }); 
    //console.log(e.target.value);
    //console.log(e.target.name);
}
  render() {
    return (
      <div>
      <br/>
      <div class="home container">
      <h2 class="text-center bg-secondary fw-bold super-container text-white mt-3">VALIDACION</h2>
      <h3 class="text-center fw-bold super-container mt-3">Introduce tu codigo</h3>

      <Modal
            show={this.state.show}
            onHide={() => {
              this.handleClose();
            }}
            animation={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>
               Tu codigo fue validado, introduce un nuevo password
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div class="mb-3 row">
                <label for="numdoc" class="col-sm-2 col-form-label">
                  Password
                </label>
                <div class="col-sm-10">
                  <input
                    placeholder="tu nuevo password..."
                    name="password1"
                    onChange={this.handleChange}
                    type="password"
                    class="form-control"
                    id="numdoc"
                    required
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="direnv" class="col-sm-2 col-form-label">
                 Verifica tu password
                </label>
                <div class="col-sm-10">
                  <input
                    placeholder="confirma el password..."
                    name="password2"
                    onChange={this.handleChange}
                    type="password"
                    class="form-control"
                    id="direnv"
                    required
                  />
                </div>
              </div>
       
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.handleClose()}>
                Cancelar
              </Button>
              <Button variant="primary" onClick={() => this.actualizar()}>
                Actualizar
              </Button>
            </Modal.Footer>
          </Modal>



<form>
      <div className="container">
      
      <div class="mb-3 row">
          <label for="nombre" class="col-sm-2 col-form-label">CODIGO</label>
          <div class="col-sm-10">
               <input name="codigo" onChange={this.handleChange} type="email" class="form-control" id="email" autocomplete="nope" required/>
               
          </div>
      </div>

      <button type="button" onClick={()=> this.validar() } className="btn btn-success">VALIDAR</button>

      </div>
      </form>
      </div>
      <br/>
      <Footer/>
  </div>
    )
  }
}
