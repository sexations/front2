import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

import "../Style/css/bootstrap.min.css";
import "../Style/css/style.css";

export default function SpecificProduct() {
  let { id } = useParams();

  const [producto, setProducto] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    peticionProductGet();
  }, []);

  const agregarAlCarrito = () => {
    const token = localStorage.getItem("ref1");
    if (token) {
      fetch("https://mundoref-back.herokuapp.com/api/carrito", {
        method: "POST",
        body: JSON.stringify(carrito),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          //console.log(data);
          window.location.href="/tienda"
        })
        .then(alert("Producto registrado"))
        .catch((err) => console.error(err));
    } else {
      alert("Debes iniciar sesion");
    }
  };

  const peticionProductGet = async () => {
    await axios
      .get("https://mundoref-back.herokuapp.com/api/producto/" + id)
      .then((response) => {
        setProducto(response.data);
        setCarrito({
          email: localStorage.getItem("email1"),
          id_dbproducto: response.data.id_dbproducto,
          nombre: response.data.nombre,
          cantidad: 1,
          productId: response.data.productId,
          precio_venta: response.data.precio_venta,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div class="page-wrapper">
        <main class="main">
          <br />
          <br />

          <div class="page-content">
            <div class="container">
              <div class="product-details-top">
                <div class="row">
                  <div class="col-md-6">
                    <div class="product-gallery product-gallery-vertical">
                      <div class="row">
                        <figure class="product-main-image">
                          <img
                            id="product-zoom"
                            src={producto.imagen}
                            data-zoom-image="assets/images/products/single/1-big.jpg"
                            alt="product"
                          />
                        </figure>

                        <div
                          id="product-zoom-gallery"
                          class="product-image-gallery"
                        >
                          <a
                            class="product-gallery-item active"
                            href="#"
                            data-image="assets/images/products/single/1.jpg"
                            data-zoom-image="assets/images/products/single/1-big.jpg"
                          >
                            <img
                              src={producto.imagen}
                              alt="producto Mundo Refrigeracion"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="product-details">
                      <h1 class="product-title">{producto.nombre}</h1>

                      <div class="ratings-container">
                        <div class="ratings">
                          <div class="ratings-val"></div>
                        </div>
                        <span class="ratings-text" href="" id="review-link">
                          PRODUCTO DE CALIDAD
                        </span>
                      </div>

                      <div class="product-price">
                        PRECIO {producto.precio_venta}$
                      </div>

                      <div class="product-content">
                        <p>{producto.detalle} </p>
                      </div>

                      <div class="product-details-action">
                        <button
                          onClick={() => agregarAlCarrito()}
                          className="btn-product btn-cart"
                        >
                          <span>añadir al carro</span>
                        </button>
                      </div>

                      <div class="product-details-footer">
                        <div class="product-cat">
                          <span>Categoria:</span>
                          {producto.categoria}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
