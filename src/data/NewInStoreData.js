// import images
import ChairImg from "../assets/img/chair.png";
import BedImg from "../assets/img/bed.png";
import CupboardImg from "../assets/img/cupboard.png";
import LightingImg from "../assets/img/lighting.png";

//import icons

import { IoIosArrowRoundBack } from "react-icons/io";

export const newInStore = {
  title: "New In Store Now",
  subtitle: "Get the latest items immediately with promo prices",
  link: "Check all",
  icon: <IoIosArrowRoundBack />,
  products: [
    {
      name: "chair",
      image: <ChairImg />,
    },
    {
      name: "bed",
      image: <BedImg />,
    },
    {
      name: "cupboard",
      image: <CupboardImg />,
    },
    {
      name: "lighting",
      image: <LightingImg />,
    },
  ],
};
