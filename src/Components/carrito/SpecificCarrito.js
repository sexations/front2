import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

import "../Style/css/bootstrap.min.css";
import "../Style/css/style.css";

import Loading from "../motor/Loading";

export default function SpecificProduct() {
  const { id } = useParams();

  var [datos, setDatos] = useState({
    consultado: [""],
  });
  const [activador, setActivador] = useState(false);

  useEffect(() => {
        peticionCarritoGet();
  }, '');

  const eliminar = (productos)=>{
    const url='https://mundoref-back.herokuapp.com/api/carrito2/'+localStorage.getItem('email1')
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
      console.log(data);
    });
    
  }

  const peticionCarritoGet = () => {
    const url =
      "https://mundoref-back.herokuapp.com/api/carrito/procesado/" + id;
    axios.get(url).then((res) => {
      setDatos({ consultado: res.data });
      setActivador(true);
      eliminar(datos.consultado[0].carrito)
    });
  
  };


  return (
    <div>
      {activador === false ? (
        <Loading />
      ) : 

      (
      
        <div className="consultaVenta">
          <h3>
            Gracias por tu compra, recuerda tu número de carrito para futuras
            referencias: {id}
          </h3>
          <div className="mb-3 row"></div>

          <br />
          <h5>
            <b>{"Nombre: "}</b>
            <span>{datos.consultado[0].nombre_comprador}</span>
          </h5>
          <h5>
            <b>{"Apellido: "}</b>
            <span>{datos.consultado[0].apellido_comprador}</span>
          </h5>
          <h5>
            <b>{"Tipo de documento: "}</b>
            <span>{datos.consultado[0].tipo_documento}</span>
          </h5>
          <h5>
            <b>{"Numero de documento: "}</b>
            <span>{datos.consultado[0].documento_comprador}</span>
          </h5>
          <h5>
            <b>{"Direccion: "}</b>
            <span>{datos.consultado[0].direccion_envio}</span>
          </h5>
          <br />

          <div className="contentconsult">
            {datos.consultado[0].carrito.map((producto, index) => (
              <div key={index} className="showprod">
                <h5 className="borderlight">
                  <b>{"Nombre: "}</b>
                  {producto.nombre}
                </h5>
                <h5 className="borderlight">
                  <b>{"Cantidad: "}</b>
                  {producto.cantidad}
                </h5>
                <h5 className="borderlight">
                  <b>{"Precio: "}</b>
                  {producto.precio_venta}
                </h5>
                <h5 className="borderlight">
                  <b>{"Id producto: "}</b>
                  {producto.productId}
                </h5>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
