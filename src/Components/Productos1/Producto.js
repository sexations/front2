
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import '../../App.css'

import { FiTruck } from "@react-icons/all-files/fi/FiTruck";



export default function Producto(props) {

  return (      
    <div className="col-6 col-md-4 col-lg-4" id="producto2">
    <div className="product product-7 text-center"  id="producto1">
        <figure className="product-media"  id="producto1">
          <Link to={'/Products/'+ props.identidad}>
              <div className="h300"> 
                  <Image src={props.img}  alt="Product" className="product-image" id="wimage" rounded fluid /> 
              </div>              
              <div className="product-action-vertical">
                  <div className="btn-product-icon btn-quickview" title="Vista Rapida">                  
                      <span>
                          Vista Rapida
                      </span>
                  </div>      
              </div>              
              <div className="product-action">
                  <a href="prueba.html" className="btn-product btn-cart"><span>Ver detalle</span></a>
              </div>
          </Link>   
        </figure>
        <div className="product-body"  id="producto1">
            <div className="product-cat">
              <span className="cardFont">Categoria:<b className='cardFont2'>{' '+props.categoria}</b></span>
            </div>
            <div className="product-cat">
              <span className="cardFont">Nombre:<b className='cardFont2'>{' '+props.nombre}</b></span>
            </div>
            <div className="product-price">
                PRECIO {props.precio}$
                <p className="pdist">{"Precio Distribuidor"}</p>
                <p className="gsend">{"Envio Gratis "}<FiTruck /></p>
            </div>       
            <div className="ratings-container">
                <div className="ratings">
                    <div className="ratings-val"></div>                    
                </div>
                <span className="ratings-text">PRODUCTO DE CALIDAD</span>
            </div>
        </div>
    </div>
</div>
  )
}