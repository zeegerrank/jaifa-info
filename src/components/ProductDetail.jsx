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
      <div className=" text-center">
        <h1>{foundProduct.name}</h1>
        <h6 className="text-secondary">Sub</h6>
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

      <p style={{ textIndent: "50px" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id obcaecati
        quam quasi accusamus! Maxime quo consectetur, quibusdam sunt
        consequuntur dicta est, reprehenderit saepe nemo, ipsa maiores nostrum
        iure deleniti voluptatibus sapiente quisquam esse. Ea laboriosam,
        necessitatibus quaerat autem fugiat perferendis nemo repellat, ratione
        voluptate atque, ad nobis minima iure possimus!
      </p>
    </Container>
  );
};

export default ProductDetail;
