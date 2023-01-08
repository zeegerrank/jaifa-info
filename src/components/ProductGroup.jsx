import { Card, Container } from "react-bootstrap";import { useParams } from "react-router-dom";
import Products from "../contexts/Products";
import CardInformation from "./ProductThumbnail";
const ProductGroup = () => {
  // Receive param to call in data
  const { category } = useParams();
  const pathName = "/products/" + category;

  const filteredProducts = Products.filter(
    (productGroup) => productGroup.category.path === pathName
  );
  // console.log(filteredProducts);

  const listProductFound = filteredProducts.map((products) => (
    <CardInformation key={products.id} productName={products.name} />
  ));
  return <Container className="d-flex">{listProductFound};</Container>;
};

export default ProductGroup;
