import React from "react";
import car from "../../assets/img/car.jpg";
import amored_truck from "../../assets/img/amored_truck.jpg";
import heli from "../../assets/img/heli.jpg";

export default function Cover() {
  return (
    <div>
      <div className="mb-4"></div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={car} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={amored_truck}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={heli} alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
