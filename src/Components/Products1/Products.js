import React, { Component } from 'react'
import {db} from "../../db";
import '../../App.css'
import { Link } from 'react-router-dom';

export default class Products extends Component {
    handleClick(){
        alert('Alert click event')
    }

    render() {
        let componentReference = this;
        return (
            <div>
            <h2>All products</h2>
           
           <div className="containerProduct">
             {
              //  alert('Alerta')
              Object.entries(db).map(function(k){
                return(
      
                <div className='productElement'>
                  <h3>{k[1].productName.toLocaleUpperCase()}</h3>

                  <Link to={'/Products/'+ k[1].productId}>
                  <img 
                  src={k[1].productImage} 
                  alt={k[1].productName} 
                  className='productImg' 
                  onClick={componentReference.handleClick}
                  />
                  </Link>
               </div>   
                
                );
              
              })}
             </div>
          </div>
        )
    }
}
