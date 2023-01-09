import React from "react";import { Container, Carousel } from "react-bootstrap";
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
            ประเภท: {foundProduct.category.text}
          </h6>
        </a>
      </div>

      <Container className="w-50">
        <Carousel className="carousel mx-auto" variant="dark">
          <Carousel.Item>
            <img
              className="carouselInner "
              src={foundProduct.imgSrc[0]}
              alt={foundProduct.imgName}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carouselInner "
              src={foundProduct.imgSrc[1]}
              alt={foundProduct.imgName}
            />
          </Carousel.Item>
        </Carousel>
      </Container>

      <p style={{ textIndent: "50px" }}>{foundProduct.description.intro}</p>
      <p style={{ textIndent: "50px" }}>{foundProduct.description.body}</p>
      <p style={{ textIndent: "50px" }}>{foundProduct.description.conclude}</p>
    </Container>
  );
};

export default ProductDetail;
