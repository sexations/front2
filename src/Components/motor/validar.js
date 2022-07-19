import React, { Component } from 'react'
import Footer from '../../templates/Footer'
import axios from 'axios'

export default class validar extends Component {

    constructor() {
        super();
        this.state={
            codigo:'',
            mailcode:'',
            clienteT:[],          
            };
          
           
            this.handleChange = this.handleChange.bind(this);
            this.validar = this.validar.bind(this);
            // this.componentDidMount = this.componentDidMount.bind(this)
    }

   async validar(){
        const codigo=this.state.codigo
        let url='https://mundoref-back.herokuapp.com/api/validar/'+codigo;
        await axios.get(url)
        .then(res => {
            this.state.mailcode=res.data[0].mailcode
            this.state.clienteT=res.data[0]
        })
        .catch((error) => {
        //console.log(error); 
        });  
        if(codigo===this.state.mailcode){  
            const id = this.state.clienteT._id
            let url='https://mundoref-back.herokuapp.com/api/validar/'+id;
            fetch(url,{
            method:'PUT',
            body: JSON.stringify(this.state),
            mode:'cors',
            headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        }
        }).then(res => res.json())
        .then(data => {
            //console.log(data);
            this.setState({
            nombre:'',
            apellido: '',
            email: '',
            telefono: '',
            pais: '',
            ciudad: '',
            direccion: '',
            clasificacion: '',
            password: ''            
        })
        alert('Email Verificado')
        window.location.href="./login" 
  })
  .catch(err => console.error(err))

            this.state.codigo=''
            this.state.clienteT=[]
            
        }
    }

    handleChange(e){
        const {name,value} = e.target; 
        this.setState({
            [name]:value
        }); 
        // console.log(e.target.value);
    }


    render() {
        return (
            <div>
                <br/>
                <div class="home container">
                <h2 class="text-center bg-secondary fw-bold super-container text-white mt-3">VALIDACION</h2>
                <h3 class="text-center fw-bold super-container mt-3">Introduce tu codigo</h3>
   
   
          <form>
                <div className="container">
                
                <div class="mb-3 row">
                    <label for="nombre" class="col-sm-2 col-form-label">CODIGO</label>
                    <div class="col-sm-10">
                         <input name="codigo" onChange={this.handleChange} type="email" class="form-control" id="email" autocomplete="nope" required/>
                         
                    </div>
                </div>

                <button type="button" onClick={()=> this.validar() } className="btn btn-success">VALIDAR</button>

                </div>
                </form>
                </div>
                <br/>
                <Footer/>
            </div>
        )
    }
}
