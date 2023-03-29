import React from "react";
import { dataCardEvent } from "../../assets/data/data";
import { Row, Col } from "react-bootstrap";

export const Card = () => {
  return (
    <Col lg="3" md="6" sm="12">
      {dataCardEvent.map((item, index) => (
        <div class="card" key={index}>
          <img src={item.img} alt="" className="img-fluid" />
          <div className="card-info">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </Col>
  );
};
