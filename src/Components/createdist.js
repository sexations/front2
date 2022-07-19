import React, { Component } from "react";
import axios from "axios";

export default class createdist extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("class1") === "h1z34rft_algt_2048") {
      alert("No eres administrador");
      window.location.href = "/";
    }
    if (!localStorage.getItem("class1")) {
      alert("No eres administrador");
      window.location.href = "/";
    }
  }

  handleChange(e, text) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    //  console.log(e.target.name);
    //console.log(e.target.value);
  }

  crear() {
    const url = "https://mundoref-back.herokuapp.com/api/distri";
    const body = {
      email: this.state.email,
    };
    axios.post(url, body).then((res) => {
      alert(res.data);
      window.location.href='/administrar'
    });
  }

  render() {
    return (
      <div>
        <br />
        <h4 className="titlereg3">
          <span className="padtop3">Crear distribuidor</span>
        </h4>
        <br />
        <br />
        <div className="mb-3 row">
          <label for="Email" className="col-sm-2 col-form-label">
            <h4>Email</h4>
          </label>
          <div className="col-sm-10">
            <input
              name="email"
              onChange={this.handleChange}
              type="email"
              className="form-control w-50"
              id="Email"
              placeholder="Email del distribuidor..."
              S
            />
          </div>
          <div className="center">
            <button
              onClick={() => this.crear()}
              className="btn btn-primary btn-sm w-25"
            >
              AUTORIZAR
            </button>
          </div>
        </div>
      </div>
    );
  }
}
