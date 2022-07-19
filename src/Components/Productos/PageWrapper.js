
export default function PageWrapper(props) {

  return (
    <div>
      <main className="main">
      <h4 className="titlereg2">Todos nuestros productos</h4>
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