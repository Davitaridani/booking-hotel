import React from "react";
import { dataCardEvent } from "../../assets/data/data";
import { Row, Col } from "react-bootstrap";

const Card = () => {
  return (
    <Row>
      {dataCardEvent.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="">
          <div class="items-card text-center h-100" key={index}>
            <img src={item.img} alt="" className="img-fluid animate-hithere" />
            <div className="card-info">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Card;
