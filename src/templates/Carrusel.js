import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Nav } from "react-bootstrap";

export default class Carrusel extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../assets/img_car/banner1.jpg")}
              alt="mundo refrigeracion"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../assets/img_car/banner4.jpg")}
              alt="mundo refrigeracion"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../assets/img_car/banner3.jpg")}
              alt="mundo refrigeracion"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../assets/img_car/banner2.jpg")}
              alt="mundo refrigeracion"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
