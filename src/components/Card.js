import React, { useContext } from "react";
// import link
import { Link } from "react-router-dom";
// import icons
import { BsPlus, BsEyeFill } from "react-icons/bs";
// import cart context
import { CartContext } from "../contexts/CartContext";

const Card = (product) => {
  const { addToCart } = useContext(CartContext);
  // destructure product
  const { id, image, name, price, oldPrice } = product;
  return (
    <div className="w-full max-w-[290px] h-[380px] text-right" key={id}>
      <div className="border hover:border-accent rounded-[18px] w-full max-w-[285px] h-full max-h-[292px] flex items-center justify-center mb-[15px] relative transition group overflow-hidden">
        <img
          src={image.type}
          alt=""
          className="group-hover:scale-110 transition duration-300"
        />

        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(product, id)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-accent rounded-lg">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-gray-100 flex justify-center items-center text-primary drop-shadow-xl rounded-lg"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <Link to={`/product/${id}`}>
        <div className="font-semibold lg:text-xl">{name}</div>
      </Link>
      <div className="flex items-center gap-x-3">
        <div>$ {price}</div>
        <div className="text-[15px] text-grey line-through">$ {oldPrice}</div>
      </div>
    </div>
  );
};

export default Card;
