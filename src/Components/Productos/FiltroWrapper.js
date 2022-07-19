import { useState } from 'react';

export default function FiltroWrapper(props) {

	const [busqueda, setBusqueda]= useState("");

	const handleChange=e=>{
		props.onChange(e.target.value)
		setBusqueda(e.target.value);
	  }

  return (
		<div>
		<br />
		<form>
          	<div className="form-group">
            <label htmlFor="inputtxt">FILTRO: TERMINO DE BUSQUEDA</label>
				<input 
					type="text" 
					className="form-control" 
					id="inputtxt" 
					aria-describedby="nombreHelp" 
					placeholder="Tu termino de busqueda..." 
					value={busqueda}
					onChange={handleChange}/>
          </div>
      </form>
	  </div>
  );
}