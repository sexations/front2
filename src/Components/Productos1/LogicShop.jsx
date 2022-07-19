import React from "react";
import { useEffect, useState } from "react";
import PageWrapper from "./PageWrapper";
import Paginacion from "./Paginacion";
import Producto from "./Producto";

import axios from "axios";
import FiltroWrapper from "./FiltroWrapper";

export default function LogicShop() {
  const [paginaActual, setPaginaActual] = useState(1);
  const [productos, setProductos] = useState([]);
  const [tablaProductos, setTablaProductos] = useState([]);

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = tablaProductos.filter((elemento) => {
      if (
        elemento.nombre
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setProductos(resultadosBusqueda);
  };

  const TOTAL_POR_PAGINA = 8;

  useEffect(() => {
    buscarProductos();
  }, []);

  const buscarProductos = () => {
    let url = "https://mundoref-back.herokuapp.com/api/producto";
    axios
      .get(url)
      .then((res) => {
        setProductos(res.data);
        setTablaProductos(res.data);
      })
      .catch((error) => {
        //console.log(error);
      });
  };

  const getTotalPaginas = () => {
    let cantidadTotalDeProductos = productos.length;
    return Math.ceil(cantidadTotalDeProductos / TOTAL_POR_PAGINA);
  };

  let productPagina = productos.slice(
    (paginaActual - 1) * TOTAL_POR_PAGINA,
    paginaActual * TOTAL_POR_PAGINA
  );

  const handleInputChange = (event) => {
    //console.log(event.target.name);
    //console.log(event.target.value);

    var resultadosBusqueda = tablaProductos.filter((elemento) => {
      if (
        elemento.categoria
          .toString()
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      ) {
        return elemento;
      }
    });
    setProductos(resultadosBusqueda);
  };

  return (
    <PageWrapper>
      <div className="" id="filterCategoria">
        <div className="col-md-5" id="filter">
          <label htmlFor="categoria" class="form-label">
            CATEGORIA
          </label>
          <select
            name="categoria"
            onChange={handleInputChange}
            className="form-select"
            id="categoria"
            required
          >
            <option value="">Elige...</option>
            <option>Aire</option>
            <option>Refrigeracion</option>
            <option>Calefaccion</option>
            <option>Coccion</option>
            <option>Lavado</option>
          </select>
        </div>
      </div>

      <FiltroWrapper
        onChange={(word) => {
          filtrar(word);
        }}
      />

      <br />

      <div className="page-content">
        <div>
          <div className="row">
            <div className="col12 col-lg-12">
              <div className="products mb-3">
                <div className="row justify-content-center">
                  {productPagina.map((producto) => (
                    <Producto
                      key={producto._id}
                      identidad={producto._id}
                      nombre={producto.nombre}
                      categoria={producto.categoria}
                      precio={producto.precio_compra}
                      img={producto.imagen}
                    >
                      {producto.detalle}
                    </Producto>
                  ))}
                </div>
              </div>
            </div>
            <Paginacion
              pagina={paginaActual}
              total={getTotalPaginas()}
              onChange={(pagina) => {
                setPaginaActual(pagina);
              }}
            />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
