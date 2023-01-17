import { Carousel, Container, Row, Button, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Products from "../data/Products";
import ProductThumbnail from "./ProductThumbnail";
import ScrollTopButton from "../components/ScrollTopButton";

const ProductGroup = () => {
  // Receive param to call in data
  const { category } = useParams();
  const pathName = "/products/" + category;
  // Filter Products by category
  const filteredProducts = Products.filter(
    (productGroup) => productGroup.category.path === pathName
  );

  // List found product in thumbnail
  const listProductsFound = filteredProducts.map((products) => (
    <ProductThumbnail key={products.id} productName={products.name} />
  ));

  // find product category name
  const foundCategory = Products.find(
    (product) => product.category.path === pathName
  );
  const getCategoryName = foundCategory.category.text;

  return (
    <Container className="mb-3">
      <div>
        <h3 className="d-none d-md-flex text-center text-md-start text-decoration-underline text-secondary">
          ประเภท: {getCategoryName}
        </h3>
        <p className="d-none d-md-flex mb-3 text-secondary text-center text-md-start">
          {`(จำนวน ${filteredProducts.length} )`}
        </p>
        <Row className="justify-content-md-start justify-content-center d-md-flex d-none">
          {listProductsFound}
        </Row>
        <Row className="justify-content-md-start justify-content-center d-md-none ">
          <Carousel
            interval={10000}
            variant="dark"
            className="  rounded-2 w-100 pb-3"
            style={{ backgroundColor: "#D9FFE5" }}>
            {filteredProducts.map((products) => (
              <Carousel.Item
                className="text-center mt-2
              "
                key={products.id}>
                <div className=" mx-2">
                  <h4 className="text-start text-secondary mb-0">
                    ประเภท: {products.category.text}
                  </h4>
                  <p className="text-start text-secondary">
                    {`(จำนวน: ${filteredProducts.length} )`}
                  </p>
                </div>
                <a
                  className=" text-decoration-none"
                  href={"/product/" + products.id}>
                  <img
                    className="img-fluid"
                    src="https://via.placeholder.com/640x480.jpg"
                    alt=""
                  />
                  <Carousel.Caption className=" align-self-end opacity-50">
                    <h3>{products.name}</h3>
                    <p>{products.description.short}</p>
                  </Carousel.Caption>
                </a>
              </Carousel.Item>
            ))}
          </Carousel>
        </Row>
        <Row className="text-end mb-3 mt-3 text-md-center">
          <Col className="order-last">
            <Button id="call-for-action" href="/products">
              ดูสินค้าทั้งหมด
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ProductGroup;
