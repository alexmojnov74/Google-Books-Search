import React from "react";
import { ListItem } from "../List";
import { Row, Col } from "../Grid";
import { Link } from "react-router-dom";
import "./style.css";

function Book({ title, subtitle, authors, link, description, image, Button }) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="h3font">{title}</h3>
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        </Col>
        <Col size="md-4">
          <div className="btn-container">
            <Link className="btn btn-light" target="_blank" rel="noopener noreferrer" to={link}>
              View
            </Link>
            <Button />
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <p className="font-italic small">Written by {authors}</p>
        </Col>
      </Row>
      <Row>
        <Col size="12 sm-4 md-2">
          <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
        </Col>
        <Col size="12 sm-8 md-10">
          <p className="pstyle">{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

export default Book;
