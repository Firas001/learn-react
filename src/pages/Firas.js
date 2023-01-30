import React, { useContext } from "react";
// import useParams
import { useParams } from "react-router-dom";
// import product context
import { products } from "../contexts/ProductContext";
// import card
import Card from "../components/Card";

const Firas = () => {
  // get the product id from the url
  const { id } = useParams();
  //id = "5";

  const cards = products.map((card) => card);

  console.log(cards);
  const found = cards.find((obj) => {
    return obj.id === 2;
  });

  console.log(found);

  return <div>firas</div>;
};

export default Firas;
