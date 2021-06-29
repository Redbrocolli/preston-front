import React from "react";

export default function Support() {
  const data = [
    {
      id: 3,
      title: "Customer Service",
      content: "\nmail@mail.vn",
    },
    {
      id: 4,
      title: "IT Support",
      content: "\nmail@mail.vn",
    },
  ];
  return (
    <div style={{ paddingTop: "2rem" }}>
      <div className="text-left">
        <h4 className="font-weight-bold text-left text-secondary border-bottom border-secondary">
          SUPPORT
        </h4>
      </div>
      <div className="row" style={{ paddingTop: "1rem" }}>
        {!!data &&
          data.map((i) => (
            <div key={i.id} className="col-sm">
              <div className="card card-support">
                <div className="card-header card-custom">
                  <p className="font-weight-bold text-white text-uppercase">
                    {i.title}
                  </p>
                </div>
                <div className="card-body trans-card">
                  <h1 className="card-title">
                    24 <small className="text-muted">/ 7</small>
                  </h1>
                  <p className="lead font-weight-normal">{i.content}</p>
                  <a className="btn btn-success" href="/contact">
                    Contact now
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
