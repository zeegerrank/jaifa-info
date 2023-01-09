import React from "react";import ProductsGetAll from "../components/ProductsGetAll";

const ProductsAll = () => {
  return (
    <div>
      <ProductsGetAll pathNameReq="/products/vegetables" />
      {/* <ProductsGetAll pathNameReq="/products/charcoal" />
      <ProductsGetAll pathNameReq="/products/fertilizer" /> */}
    </div>
  );
};

export default ProductsAll;
