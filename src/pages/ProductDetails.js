import React, { useContext } from "react";
// import useParams
import { useParams } from "react-router-dom";
// import cart context
import { CartContext } from "../contexts/CartContext";
// import product context
import { products } from "../data/ProductsData";

const ProductDetails = () => {
  // get the product id from the url
  const { id } = useParams();
  const cards = products.map((card) => card);
  const { addToCart } = useContext(CartContext);

  // get the single product based on the id
  const product = cards.find((item) => {
    return item.id === parseInt(id);
  });

  console.log(product);

  // if product is not found
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  // destructure product
  const { name, price, details, image } = product;
  return (
    <section className="pb-12 lg:py-16 flex items-center">
      <div className="container mx-auto">
        {/* image & text wrapper */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* image */}
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              className="max-w-[200px] lg:max-w-sm"
              src={image.type}
              alt=""
            />
          </div>
          {/* text */}
          <div className="flex-1 text-center lg:text-right">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {name}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              $ {price}
            </div>
            <p className="mb-8">{details}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-primary py-4 px-8 text-white"
            >
              أضف إلى الحقيبة
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
