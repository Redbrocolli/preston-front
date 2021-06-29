import React from "react";
import logo from "../../assets/logo/logo.png";
import dubai from "../../assets/img/dubai.jpg";

export default function License() {
  return (
    <div
      style={{
        paddingTop: "1rem",
        paddingBottom: "1rem",
        paddingLeft: "5rem",
        paddingRight: "5rem",
        backgroundColor: "#106aef",
      }}
    >
      <div className="row">
        <div className="d-flex justify-content-end">
          <div className="img">
            <img src={logo} alt="logo" style={{ height: "10vh" }} />
          </div>
        </div>
        <div className="col text-left">
          <div className="font-weight-bold">PRESTON GENERAL TRADING FZE</div>
          <div className="text-light">
            {" "}
            <div className="fa fa-home"></div> ADDRESS
          </div>
          <div className="text-light">
            {" "}
            <div className="fa fa-envelope"></div> Email: mail@mail
          </div>
          <div className="text-light">
            {" "}
            <div className="fa fa-building"></div> Taxcode: 0123456
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <div className="img">
            <img src={dubai} alt="logo" style={{ height: "10vh" }} />
            <p className="font-weight-bold "> Preston U.A.E</p>
          </div>
        </div>
      </div>
    </div>
  );
}
