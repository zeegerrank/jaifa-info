import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import Products from "../contexts/Products";

const CardInformation = (props) => {
  // find product object in Products array inside context by name
  const findProductByName = (productName) =>
    Products.find(({ name }) => name === productName);

  // set function input via props
  const foundProduct = findProductByName(props.productName);

  return (
    <Col lg={4} md={6} sm={12}>
      <Card className="mb-3">
        <a href={"/product/" + foundProduct.id}>
          <Card.Img
            className=""
            src={foundProduct.imgSrc[0]}
            alt={foundProduct.imgName}
          />
        </a>

        <Card.Body>
          <a
            href={"/product/" + foundProduct.id}
            style={{ textDecoration: "none" }}>
            <Card.Title className="my-1">{foundProduct.name}</Card.Title>
          </a>

          <a
            href={"/products/" + foundProduct.category.path}
            style={{ textDecoration: "none" }}>
            <Card.Subtitle className="my-2 text-secondary">
              ประเภท: {foundProduct.category.text}
            </Card.Subtitle>
          </a>

          <Card.Text>{foundProduct.shortDescribe}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardInformation;
