import React from "react";
import { useState } from "react";
import axios from 'axios'
import Footer from "../templates/Footer";

export default function ConsultarVenta() {

  var [datos, setDatos] = useState({
    codigo: "",
    consultado:[""],

  });

  
  const handleChange = (event) => {
    //console.log(event.target.name);
    //console.log(event.target.value);
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const Consultar = ()=>{
    const url = "https://mundoref-back.herokuapp.com/api/carrito/procesado/"+datos.codigo
    axios.get(url)
    .then((res)=>{
      //console.log(res.data)
      setDatos({consultado:res.data})
    })
  }

  return (
    <div>
      <div className="consultaVenta">
      <h3>Introduce el codigo del carrito</h3>
      <div className="mb-3 row">
        <div className="col-sm-10">
          <input
          onChange={handleChange}
            name="codigo"
            type="text"
            className="form-control"
            id="codigo"
            placeholder="introduce el codigo aqui..."
            required
          />
        </div>
      </div>
      <button 
        onClick={Consultar}
        className="btn btn-success btn-sm w-25">Consultar</button>
        <br />
        <h5><b>{"Nombre: "}</b><span>{datos.consultado[0].nombre_comprador}</span></h5>
        <h5><b>{"Apellido: "}</b><span>{datos.consultado[0].apellido_comprador}</span></h5>
        <h5><b>{"Tipo de documento: "}</b><span>{datos.consultado[0].tipo_documento}</span></h5>
        <h5><b>{"Numero de documento: "}</b><span>{datos.consultado[0].documento_comprador}</span></h5>
        <h5><b>{"Direccion: "}</b><span>{datos.consultado[0].direccion_envio}</span></h5>
        <br />

        <div className="contentconsult">

        {datos.consultado[0].carrito ? (
          datos.consultado[0].carrito.map((producto) => (
            <div className="showprod">
              <h5 className="borderlight"><b>{"Nombre: "}</b>{producto.nombre}</h5>
              <h5 className="borderlight"><b>{"Cantidad: "}</b>{producto.cantidad}</h5>
              <h5 className="borderlight"><b>{"Precio: "}</b>{producto.precio_venta}</h5>
              <h5 className="borderlight"><b>{"Id producto: "}</b>{producto.productId}</h5>
            </div>
          ))
        )
        :
          <div>INTRODUCE UN CODIGO DE CARRITO</div>
       
      

        }

        </div>
        <br />

    </div>
    <Footer />
    </div>

    
  );
}
