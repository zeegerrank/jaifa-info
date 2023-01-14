import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Products from "../data/Products";

const ProductDetail = () => {
  // Detect used param
  let { productId } = useParams();

  const findProductById = (prodId) =>
    Products.find((prod) => prod.id == prodId);

  const foundProduct = findProductById(productId);

  return (
    <Container className="pt-1">
      <div className=" text-center mb-3">
        <h1>{foundProduct.name}</h1>
        <a href={foundProduct.category.path} style={{ textDecoration: "none" }}>
          <h6 className="text-secondary">
            ประเภท: {foundProduct.category.text}
          </h6>
        </a>
      </div>
      <Container>
        <Row className="justify-content-lg-around justify-content-md-center">
          <Col lg={4} md={6} className="text-center text-md-start text-lg-end">
            <Col md={12} className="mb-3">
              <img
                className="img-fluid"
                src={foundProduct.imgSrc[0]}
                alt={foundProduct.imgName}
              />
            </Col>
            <Col md={12} className="mb-3">
              <img
                className="img-fluid"
                src={foundProduct.imgSrc[1]}
                alt={foundProduct.imgName}
              />
            </Col>
          </Col>
          <Col
            lg={6}
            md={6}
            className="align-self-md-center justify-content-md-center align-self-lg-start mt-lg-5">
            <p style={{ textIndent: "45px" }}>
              {foundProduct.description.main}
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default ProductDetail;
