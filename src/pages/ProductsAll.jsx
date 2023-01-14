import React from "react";
import ProductsGetAll from "../components/ProductsGetAll";

const ProductsAll = () => {
  return (
    <>
      <ProductsGetAll pathNameReq="/products/salads" />
      <ProductsGetAll pathNameReq="/products/vegetables" />
      <ProductsGetAll pathNameReq="/products/charcoal" />
      <ProductsGetAll pathNameReq="/products/fertilizer" />
    </>
  );
};

export default ProductsAll;
