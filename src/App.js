import React from 'react';
import { useEffect } from 'react';
import './App.css';

import { Routes, Route} from 'react-router-dom';

import Comprar2 from "./Components/comprar2";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound";
import ProductWrap from "./Components/Products/ProductWrap";
import ProductWrap2 from "./Components/Products1/ProductWrap";
import CrearProducto from "./Components/Products/CrearProducto";
import SpecificProduct from "./Components/Products/SpecificProduct1";
import SpecificProduct2 from "./Components/Products1/SpecificProduct1";
import Registrar from './Components/Registrar';
import Administrar from './Components/Administrar';
import Tienda from './Components/Productos/Tienda';
import Tienda2 from './Components/Productos1/Tienda';
import Createdist from './Components/createdist';

import EditarProducto from './Components/Products/EditarProducto';
import Editar from './Components/Editar';
import Favoritos from './Components/Favoritos'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header2 from './templates/Header2';
import Validar from './Components/motor/validar';
import Servicio from './Components/servicio'
import ConsultarVenta from './Components/ConsultarVenta';
import Recpass from './Components/motor/recpass';
import CarritoWrap from './Components/carrito/carritoWrap'
import SpecificCarrito from './Components/carrito/SpecificCarrito'
import CarritoCancelado from './Components/carrito/cancelado'
import Term from './Components/termandcond'

import Prueba from './templates/Prueba';




function App() {

  useEffect(()=>{
    const prot = window.location.protocol
    if(prot==="http:"){
      window.location.href="https://mundorefrigeracion.co"
    }
  },[])

  return (
    <div className="App">

      <Header2 />


      <Routes>
         <Route path='/' element={<Home />}></Route>
         <Route path='/login' element={<Login />}></Route>

          <Route path='/Products' element={<ProductWrap />}>
              <Route path='/Products/:id' element={<SpecificProduct />}></Route>
              <Route path='/Products/create' caseSensitive={false} element={<CrearProducto />}></Route>
              <Route path='/Products/edit' caseSensitive={false} element={<EditarProducto />}></Route>
          </Route>

          <Route path='/carritos' element={<CarritoWrap />}>
             <Route path='/carritos/:id' element={<SpecificCarrito />}></Route>
             <Route path='/carritos/cancelado' element={<CarritoCancelado />}></Route>
         </Route>

          <Route path='/Products2' element={<ProductWrap2 />}>
             
             <Route path='/Products2/:id' element={<SpecificProduct2 />}></Route>
           
         </Route>
          
         <Route path='*' element={<NotFound />}></Route>
         <Route path='/Comprar2' element={<Comprar2 />}></Route>
         <Route path='/Registrar' element={<Registrar />}></Route>
         <Route path='/Administrar' element={<Administrar />}></Route>
         <Route path='/Editar' element={<Editar />}></Route>
         <Route path='/Favoritos' element={<Favoritos />}></Route>
         <Route path='/Validar' element={<Validar />}></Route>
         <Route path='/Tienda' element={<Tienda />}></Route>
         <Route path='/Tienda2' element={<Tienda2 />}></Route>
         <Route path='/Carrito' element={<Tienda />}></Route>
         <Route path='/Servicio' element={<Servicio />}></Route>
         <Route path='/ConsultarVenta' element={<ConsultarVenta />}></Route>
         <Route path='/recpass' element={<Recpass />}></Route>
         <Route path='/createdist' element={<Createdist />}></Route>
         <Route path='/terminos' element={<Term />}></Route>

         <Route path='/probar' element={<Prueba />}></Route>

         
       </Routes>
    </div>
  );
}

export default App;