import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Products from "../contexts/Products";

const ProductDetail = () => {
  // Detect used param
  let { productId } = useParams;

  const findProductById = (prodId) => Products.find(({ Id }) => Id === prodId);

  const foundProduct = findProductById(productId);

  return (
    <Container className="pt-3">
      <div className=" text-center mb-3">
        <h1>{foundProduct.name}</h1>
        <a href={foundProduct.category.path} style={{ textDecoration: "none" }}>
          <h6 className="text-secondary">
            Category: {foundProduct.category.text}
          </h6>
        </a>
      </div>

      <div className="d-flex justify-content-around">
        <img
          className="rounded"
          src={foundProduct.imgSrc}
          alt={foundProduct.imgName}
        />
        <img
          className="rounded"
          src={foundProduct.imgSrc}
          alt={foundProduct.imgName}
        />
      </div>

      <p style={{ textIndent: "50px" }}>{foundProduct.description.intro}</p>
      <p style={{ textIndent: "50px" }}>{foundProduct.description.body}</p>
      <p style={{ textIndent: "50px" }}>{foundProduct.description.conclude}</p>
    </Container>
  );
};

export default ProductDetail;
