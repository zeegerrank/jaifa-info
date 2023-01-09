import { Container } from "react-bootstrap";import Products from "../contexts/Products";
import ProductThumbnail from "./ProductThumbnail";
const ProductsGetAll = (props) => {
  // get path name from props
  const pathName = props.pathNameReq;

  // Filter Products by category
  const filteredProducts = Products.filter(
    (productGroup) => productGroup.category.path === pathName
  );

  // List found product in thumbnail
  const listProductFound = filteredProducts.map((products) => (
    <div>
      <ProductThumbnail key={products.id} productName={products.name} />
    </div>
  ));

  // find product category name
  const foundCategory = Products.find(
    (product) => product.category.path === pathName
  );
  const getCategoryName = foundCategory.category.text;

  return (
    <Container>
      <h3 className="mb-3">{getCategoryName}</h3>
      <div className="d-flex">{listProductFound}</div>
    </Container>
  );
};

export default ProductsGetAll;
