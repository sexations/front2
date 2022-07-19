import React, { Component } from 'react';

export default class Editar extends Component {

    constructor(props) {
        super(props);
        this.state={
            nombre:'',
            apellido: '',
            email: '',
            telefono: '',
            pais: '',
            ciudad: '',
            direccion: '',
            clasificacion: '',
            password: '',   
            clientes:[],
            clientecarga:[],
            _id:'',        
            };
            
            this.eliminarCliente = this.eliminarCliente.bind(this)
            this.fetchClientes = this.fetchClientes.bind(this)
            this.handleChange = this.handleChange.bind(this);
            this.editarCliente = this.editarCliente.bind(this);
            this.llamarClientes = this.llamarCliente.bind(this);
            this.componentDidMount = this.componentDidMount.bind(this)
            this.render = this.render.bind(this)
           
    }

    componentDidMount(){
        this.fetchClientes();
        this.render();
        if(localStorage.getItem('class1')==='h1z34rft_algt_2048'){
          alert('No eres administrador')
            window.location.href='/'
        }
        if(!localStorage.getItem('class1')){
          alert('No eres administrador')
          window.location.href='/'
        }
    }


    handleChange(e){
      const {name,value} = e.target;      
      this.setState({
          [name]:value,
      });
      //console.log(e.target.value);
    
  }

    
    fetchClientes(){

        fetch('https://mundoref-back.herokuapp.com/api/cliente',{
          METHOD: 'GET',
          headers: {
            'Accept': 'aplication/json',
            'Content-Type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => {
            this.setState({clientes: data});
            //console.log(this.state.clientes);
            this.setState({
              nombre:'',
              apellido: '',
              email: '',
              telefono: '',
              pais: '',
              ciudad: '',
              direccion: '',
              clasificacion: '',
              password: ''   
          });

        });
   
        
    }



    llamarCliente(id){
      const url='https://mundoref-back.herokuapp.com/api/cliente/'+id;
      fetch(url,{
        METHOD: 'GET',
        headers: {
          'Accept': 'aplication/json',
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
        .then(data =>{
          this.setState({clientecarga: data});
          this.setState({
            email:  this.state.clientecarga.email,
            pais:  this.state.clientecarga.pais,
            ciudad:  this.state.clientecarga.ciudad,
            direccion:  this.state.clientecarga.direccion,
            clasificacion:  this.state.clientecarga.clasificacion,
            password:  this.state.clientecarga.password,
            nombre: this.state.clientecarga.nombre,
            apellido: this.state.clientecarga.apellido,
            telefono: this.state.clientecarga.telefono,
          })

        });
       
    }
     
    eliminarCliente(id){
      // eslint-disable-next-line no-restricted-globals
      if (confirm('Desea borrar este usuario ?')){

        //console.log('Eliminando',id);
        const url='https://mundoref-back.herokuapp.com/api/cliente/'+id;
        //console.log(url);
        fetch(url,{
          method: 'DELETE',
          mode:'cors',
          headers: {
            'Accept': 'aplication/json',
            'Content-Type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(data => {
          //console.log(data);
          this.fetchClientes();
        });

    }
  }

 editarCliente(id){
    let url='https://mundoref-back.herokuapp.com/api/cliente/'+id;
    
      fetch(url,{
      method:'PUT',
      body: JSON.stringify(this.state),
      mode:'cors',
      headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
      }
  }).then(res => res.json())
  .then(data => {
      //console.log(data);
      this.setState({
        nombre:'',
        apellido: '',
        email: '',
        telefono: '',
        pais: '',
        ciudad: '',
        direccion: '',
        clasificacion: '',
        password: ''            
        })
        alert('Usuario actualizado')
        id.preventDefault() 
        window.location.reload();
  })
  .catch(err => console.error(err))

}

    render() {
        return (
            <div>
                <div class="home container">
   <h2 class="text-center bg-secondary fw-bold super-container text-white mt-3">PANEL ADMINISTRATTIVO</h2>
   <h3 class="text-center fw-bold super-container mt-3">Actualizar nombre, apellido, telefono</h3>
   
   
   <form onSubmit={()=> this.editarCliente(this.state.clientecarga._id)}>
                <div className="container">
                
                <div class="mb-3 row">
                    <label for="nombre" class="col-sm-2 col-form-label">Nombre</label>
                    <div class="col-sm-10">
                         <input name="nombre" placeholder={this.state.clientecarga.nombre} onChange={this.handleChange} type="text" class="form-control" id="nombre" />
                         
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="apellido" class="col-sm-2 col-form-label">Apellido</label>
                    <div class="col-sm-10">
                         <input placeholder={this.state.clientecarga.apellido} name="apellido" onChange={this.handleChange} type="text" class="form-control" id="apellido" />
                    </div>
                </div>
                <div class="mb-3 row">
                    <label for="telefono" class="col-sm-2 col-form-label">Telefono</label>
                    <div class="col-sm-10">
                         <input placeholder={this.state.clientecarga.telefono} name="telefono" onChange={this.handleChange} type="text" class="form-control" id="telefono" />
                    </div>
                </div>
                <button type="submit" className="btn btn-dark">ACTUALIZAR</button>
               
          
                </div>
                </form>
   
   <table class="table">
            <thead class="bg--sucess">
              <tr>
                <th scope="col">Usuario</th>
                <th scope="col">Email</th>
                <th scope="col">Telefono</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
    </table>

  {
  this.state.clientes.map(cliente => {
        return(
            <table className="table">
            <tbody>
              <tr key={cliente._id}>
                <td> {cliente.nombre}</td>
                <td> {cliente.email} </td>
                <td> {cliente.telefono} </td>
                <td>
                <button className="btn btn-success" onClick={()=> this.llamarCliente(cliente._id) }>Editar</button>
                  <button className="btn btn-danger" onClick={()=> this.eliminarCliente(cliente._id) }>Eliminar</button>
                </td>
          
              </tr>
              </tbody>
          </table>

          
        )
  })
  
  }
 
  </div>
            </div>
        )
    }
    
}
