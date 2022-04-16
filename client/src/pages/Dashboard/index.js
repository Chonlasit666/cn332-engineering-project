import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

const Dashboard = () => (
  <ListGroup as="ol" numbered>
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">Subheading</div>
        Something
      </div>
      <Badge bg="primary" pill>
        14
      </Badge>
    </ListGroup.Item>
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">Subheading</div>
        Cras justo odio
      </div>
      <Badge bg="primary" pill>
        14
      </Badge>
    </ListGroup.Item>
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">Subheading</div>
        Cras justo odio
      </div>
      <Badge bg="primary" pill>
        14
      </Badge>
    </ListGroup.Item>
  </ListGroup>
);

export default Dashboard;
