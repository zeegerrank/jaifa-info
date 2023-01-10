import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Products from "../contexts/Products";
import ProductThumbnail from "./ProductThumbnail";
const ProductGroup = () => {
  // Receive param to call in data
  const { category } = useParams();
  const pathName = "/products/" + category;
  // Filter Products by category
  const filteredProducts = Products.filter(
    (productGroup) => productGroup.category.path === pathName
  );

  // List found product in thumbnail
  const listProductFound = filteredProducts.map((products) => (
    <ProductThumbnail key={products.id} productName={products.name} />
  ));

  // find product category name
  const foundCategory = Products.find(
    (product) => product.category.path === pathName
  );
  const getCategoryName = foundCategory.category.text;

  return (
    <Container>
      <h3 className="mb-3">{getCategoryName}</h3>
      <Container className="row">{listProductFound}</Container>;
    </Container>
  );
};

export default ProductGroup;
