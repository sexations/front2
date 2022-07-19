import { useState } from 'react';

import axios from 'axios';


export default function Logi() {

    const [archivos, setArchivos] = useState(null);


    const subirArchivos=e=>{
      setArchivos(e);
      console.log(archivos)
    }

    const insertarArchivos=async(e)=>{
      const f=new FormData();
      for (let index = 0; index < archivos.length; index++ ){
        f.append("files",archivos[index]);
      }
      console.log(f)
      e.preventDefault()
      // await axios.post("url",f)
      // .then(response=>{
      //   console.log(response.data)
      // }).catch(error =>{
      //   console.log(error)
      // })
    }

    
  

   
    return (
      <div>
        <form>
        <input onChange={(e)=>subirArchivos(e.target.files)} type="file" name="files" multiple></input>
        <button onClick={()=>insertarArchivos()} >Insertar</button>
        <button type='reset'>borrar</button>
        </form>
      </div>
      
    );
  }