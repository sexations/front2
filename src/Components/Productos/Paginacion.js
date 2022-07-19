

export default function Paginacion(props) {

  const getPaginas = () => {
    const resultado = [];
    for (let i = 0; i < props.total; i++) {
      let pagina = i + 1;
      resultado.push(
        <li key={1000+pagina} className={props.pagina === pagina ? 'page-item active' : 'page-item'} aria-current="page">
          <span onClick={() => props.onChange(pagina)} className="page-link" >{pagina}</span>
        </li>
      );
    }
    return resultado;
  }


  return (

  <nav aria-label="Page navigation">
      <ul className="pagination justify-content-center">

          {getPaginas()}

          <li className="page-item-total">de {props.total}</li>
          
      </ul>
  </nav>
  );
}