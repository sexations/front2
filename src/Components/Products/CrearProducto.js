import React, { Component } from 'react'

export default class CrearProducto extends Component {
   
    constructor() {
        super();
        this.state={
            productId:'',
            nombre: '',    
            unidades: '',
            precio_compra:'',
            precio_venta:'',
            detalle:'',
            categoria:'',
            imagen:'',
            marca:'',
            __v:''
            };
        this.agregarProducto = this.agregarProducto.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    
    componentDidMount(){
        if(localStorage.getItem('class1')==='h1z34rft_algt_2048'){
          alert('No eres administrador')
            window.location.href='/'
        }
        if(!localStorage.getItem('class1')){
          alert('No eres administrador')
          window.location.href='/'
        }
    }

    agregarProducto(e){
        
        fetch('https://mundoref-back.herokuapp.com/api/producto',{
            method:'POST',
            body: JSON.stringify(this.state),
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        }).then(res => res.json())
        .then(data => {
            //console.log(data);
            this.setState({
                productId:'',
                nombre: '',    
                unidades: '',
                precio_compra:'',
                precio_venta:'',
                detalle:'',
                categoria:'',
                imagen:'',
                marca:'',
                __v:''
                });
        })
        .then( alert('Producto registrado'))
        .then(window.location.reload)
        .catch(err => console.error(err))
        // console.log(this.state);
    }

    handleChange(e){
        const {name,value} = e.target;
        this.setState({
            [name]:value
        });
        console.log(e.target.value);
        console.log(e.target.name);

    }

    render() {
        return (
            <div class="container-fluid">
                <div class="row">      
                    {/*Módulo principal*/}
                    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 class="h2">Crear nuevo producto</h1>
                        </div>
                        {/*inicio del formulario*/}
                        <div class="col-md-7 col-lg-8">
                            <form class="needs-validation" onSubmit={this.agregarProducto}>
                                <div class="row g-3">
                                    <div class="col-sm-6">
                                        <label for="productId" class="form-label">Codigo de Producto</label>
                                        <input name="productId" onChange={this.handleChange} type="text" class="form-control" id="productId" required/> 
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="nombre" class="form-label">Nombre del Producto</label>
                                        <input name="nombre" onChange={this.handleChange} type="text" class="form-control" id="nombre" required/> 
                                    </div>
                                    <div class="col-sm-6">
                                        <label for="unidades" class="form-label">Unidades</label>
                                        <input name="unidades" onChange={this.handleChange} type="text" class="form-control" id="unidades" required/>
                                    </div>
                                    <div class="col-6">
                                        <label for="precio_compra" class="form-label">Precio de distribuidor </label>
                                        <input name="precio_compra" onChange={this.handleChange} type="text" class="form-control" id="precio_compra" required/>
                                     </div>
                                    <div class="col-6">
                                        <label for="precio_venta" class="form-label">Precio de Venta</label>
                                        <input name="precio_venta" onChange={this.handleChange} type="text" class="form-control" id="precio_venta" required/>
                                    </div>
                                    <div class="col-12">
                                        <label for="detalle" class="form-label">Detalle</label>
                                        <input name="detalle" onChange={this.handleChange} type="text" class="form-control" id="detalle" required/>
                                  </div>
                                    <div class="col-md-5">
                                        <label for="categoria" class="form-label">Categoria</label>
                                        <select name="categoria" onChange={this.handleChange} class="form-select" id="categoria" required>
                                            <option value="">Elige...</option>
                                            <option>Aire</option>
                                            <option>Refrigeracion</option>
                                            <option>Calefaccion</option>
                                            <option>Coccion</option>
                                            <option>Lavado</option>
                                        </select>
                                    </div>          
                                    <div class="col-12">
                                        <label for="imagen" class="form-label">URL de la imagen, para id de drive usar: http://drive.google.com/uc?export=view&id=</label>
                                        <input name="imagen" onChange={this.handleChange} type="text" class="form-control" id="imagen" required/>
                                    </div>
                                    <div class="col-12">
                                        <label for="marca" class="form-label">Marca</label>
                                        <input name="marca" onChange={this.handleChange} type="text" class="form-control" id="marca" required/>
                                  </div>
                                </div>
                                <hr class="my-4" />
                                <button class="w-100 btn btn-primary btn-lg" type="submit">Ingresar Producto</button>
                                <hr class="my-4" />
                            </form>
                        </div>
                        {/*fin del formulario*/}
                    </main>
                </div>
            </div>
        )
    }
}
