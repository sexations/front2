import React, { Component } from "react";

export default class Aviso extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mss: props,
      palabra: "",
    };
  }

  componentDidMount() {
    switch (this.state.mss.mensaje) {
        case 'noemail':
            this.setState({ palabra: "El email no puede estar vacio !" });
            break;
            case 'nopass':
                this.setState({ palabra: "Password no puede estar vacio !" });
                break;
                case 'novalid':
                    this.setState({ palabra: "Contraseña invalida !" });
                    break;
                    case 'noexist':
                        this.setState({ palabra: "Este email no existe verifica tus datos" });
                        break;
        
    
        default:
            break;
    }
  }

  render() {
    return (
      <div className="d-flex justify-content-center mt-2">
        <div className="alert alert-danger w-25" role="alert">
          {this.state.palabra}
        </div>
      </div>
    );
  }
}
