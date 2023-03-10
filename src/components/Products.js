import React from "react";

// import data
import { products_title } from "../data/ProductsTitleData";

// import components
import ProductSlider from "./ProductSlider";

const Products = () => {
  const { title, subtitle } = products_title;
  return (
    <section className="section text-center" id="products">
      <div className="container mx-auto">
        <div>
          <h2 className="title">{title}</h2>
          <p className="max-w-[639px] mx-auto mb-[50px] lg:mb-[70px]">
            {subtitle}
          </p>
        </div>
        <ProductSlider />
      </div>
    </section>
  );
};

export default Products;
