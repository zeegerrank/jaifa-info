import React from "react";
import CardInformation from "../components/CardInformation";

const TestProduct = () => {
  return (
    <div>
      <CardInformation
        productName="Product"
        category="Category"
        description="description"
        imgSrc="https://via.placeholder.com/200x200"
        imgName="test"
      />
    </div>
  );
};

export default TestProduct;
