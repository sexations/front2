import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export default class administrar extends Component {
    render() {
      if(localStorage.getItem('class1')==='sdg35633$#%$&'){
        return (
        <div>
          <div className="containerProduct d-lg-flex" id="contserv">

            <div className="card rounded bg-gray " style={{width: '18rem'}}>
              <img id="doscientos" src="https://img.freepik.com/vector-gratis/icono-usuario_6091-78.jpg?size=338&ext=jpg" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">EDITAR CLIENTE</h5>
                  <p className="card-text">En esta seccion podras editar el nombre informacion del cliente</p>
                 <Link className="btn btn-primary" to="/Editar">EDITAR</Link> 
               </div>
            </div>

            <div className="card rounded bg-gray ms-5" style={{width: '18rem'}}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5IPJXeZLdosZk49nTz076duNkeobwAFoT3A&usqp=CAU" class="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">EDITAR PRODUCTO</h5>
                  <p className="card-text">En esta seccion podras editar informacion del producto</p>
                 <Link className="btn btn-primary" to="/Products/edit">EDITAR</Link> 
               </div>
            </div>

            <div className="card bg-gray ms-5" style={{width: '18rem'}}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9C2yhxuis7OPC_X1ZYjHI6jAruBt1VzQ-KUeo4Ls2Rd9w10I6_jCgO7vwvCHCwixTsJ4&usqp=CAU" class="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">AGREGAR PRODUCTO</h5>
                  <p className="card-text">En esta seccion podras agregar un producto nuevo</p>
                 <Link className="btn btn-primary" to="/products/create">AGREGAR</Link> 
               </div>
            </div>

            <div className="card bg-gray ms-5" style={{width: '18rem'}}>
              <img src="https://tribunalsuperiordecali.gov.co/wp-content/uploads/2020/05/Consulta.jpg" class="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">CONSULTAR CARRITO</h5>
                  <p className="card-text">En esta seccion podras consultar un carrito procesado</p>
                 <Link className="btn btn-primary" to="/ConsultarVenta">CONSULTAR</Link> 
               </div>
            </div>

            <div className="card bg-gray ms-5" style={{width: '18rem'}}>
              <img src="https://retos-operaciones-logistica.eae.es/wp-content/uploads/2016/08/ser-distribuidor.jpg" class="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">AGREGAR DISTRIBUIDOR</h5>
                  <p className="card-text">En esta seccion podras consultar un carrito procesado</p>
                 <Link className="btn btn-primary" to="/createdist">AGREGAR</Link> 
               </div>
            </div>
              
            </div>
          </div>
          
        
        )}else{
          return(
          <div>
          <h1>NO ERES AADMINISTRADOR !!</h1>
          <div className="containerProduct">
          <img className="stopadmin" style={{height:"300px"}} alt="Stop admin" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Stop_hand.svg/1024px-Stop_hand.svg.png" />
          </div>
          </div>
          )
        }
      

    }
}
