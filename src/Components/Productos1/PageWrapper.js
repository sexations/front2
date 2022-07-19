
export default function PageWrapper(props) {

  return (
    <div>
      <main className="main">
      <h4 className="titlereg2">Bienvenido a la tienda de distribuidor</h4>
			<br />

            <div className="page-content">
                <div className="container">
                	<div className="row"> 		
					          {props.children}
                	</div>
                </div>
            </div>
      </main>
      
    </div>
  
  );
}