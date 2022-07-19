import Footer from '../templates/Footer'
import Carrusel from '../templates/Carrusel';
import Login from './Login/Login';
import {useEffect, useState} from 'react';
import axios from 'axios';


export default function Favoritos(){
 
  const [deseados, setDeseados]=useState([]);
  var [carrito, setCarrito]= useState([]);
 
  useEffect(()=>{
   llenarFavoritos()
  }, []);

  const llenarFavoritos= async ()=>{
    const email=localStorage.getItem('email1')
    let url = 'https://mundoref-back.herokuapp.com/api/favoritos/'+email;
    await axios.get(url)
    .then(res => {
        setDeseados(res.data); 
    })
    .catch((error) => {
      //console.log('error en la función llenarFavoritos');
      console.log(error);
    });
}                 

  var agregarAlCarrito =(id_dbproducto,nombre,productoId,precio_venta) => {
    
    setCarrito({ 
      email: localStorage.getItem('email1'),
      id_dbproducto: id_dbproducto,
      nombre:nombre,
      cantidad: 1,
      productId: productoId,
      precio_venta: precio_venta
    })

    alert(JSON.stringify(carrito));

    fetch('https://mundoref-back.herokuapp.com/api/carrito',{
      method:'POST',
      body: JSON.stringify(carrito),
      headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
      }
    }).then(res => res.json())
    .then(data => {
        //console.log(data);
    })
    .then( alert(carrito.nombre + ' se agregó al carrito.'))
    .catch(err => console.error(err))   
  }

  const generarComponente = () => {
  return(
      <div>
        <Carrusel />
        <h3 className="mt-5">Todos tus favoritos</h3>
      <div className="container-product d-flex mt-5">
          { 
        deseados.map(function(item,i){ 
        return(
          <div className="container py-3">
          <div className="card dieciocho py-3">
            <div className="card-body">
              <h5 className="card-title">{item.nombre}</h5>
              <p className="card-text">precio:</p>
              <p className="card-text">{item.precio_venta}</p>
            </div>
            <button className="btn btn-cart btn-product" onClick={()=> agregarAlCarrito(item.id_dbproducto,item.nombre,item.productoId,item.precio_venta) } >Añadir al carro</button>
        </div>
        </div>
                  )})  
      }
      </div>
      <Footer />
      </div>
  )
  }

  const generarLogin = () => {
    return(
      <div>
        <Login />
      </div>
    );
  }

  const chequearLogin = () => {
    let token = localStorage.getItem('token');
    if(token){
      return generarComponente();
    } else{
      return generarLogin();
    }
  }

  return(
    <div>
      {chequearLogin()}
    </div>
    );
}
