import React from "react";
import { useParams } from "react-router";
import Category from "./Category";

const CategoryFilteredProduct = () => {
  const { category } = useParams();
  console.log(category);

  return (
    <div className="">
      <Category></Category>
      <h1>This is category filtered product page for {category}</h1>
      
    </div>
  );
};

export default CategoryFilteredProduct;
