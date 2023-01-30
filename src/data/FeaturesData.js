// import images
import Features1Img from "../assets/img/features-1.png";
import Features2Img from "../assets/img/features-2.png";

//import icons
import { IoIosCheckmarkCircle } from "react-icons/io";

export const features = {
  image: <Features1Img />,
  title: "We Create your home more aesthetic",
  subtitle:
    "Furniture power is a software as services for multipurpose business management system",
  buttonText: "Show Now",
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: "Valuation Services",
      subtitle:
        "Sometimes features require a short description.  This can be detailed description",
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: "Development of Furniture Models",
      subtitle:
        "Sometimes features require a short description.  This can be detailed description",
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: "The Best Furniture Manufacturer of your choice",
    subtitle:
      "Furnitre power is a software as services for multiperpose business management system, expecially for them who are running two or more business exploree the future Furnitre power is a software as services.",
  },
};
