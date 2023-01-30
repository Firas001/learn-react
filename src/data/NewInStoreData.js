// import images
import ChairImg from "../assets/img/chair.png";
import BedImg from "../assets/img/bed.png";
import CupboardImg from "../assets/img/cupboard.png";
import LightingImg from "../assets/img/lighting.png";

//import icons

import { IoIosArrowRoundBack } from "react-icons/io";

export const newInStore = {
  title: "جديدنا دلى السوق الليبي",
  subtitle:
    "تعرف على احدث الموديلات من الأثاث لمختلف الأنواع فقط لدى السوق الليبي",
  link: "عرض المزيد",
  icon: <IoIosArrowRoundBack />,
  products: [
    {
      name: "غرف معيشة",
      image: <ChairImg />,
    },
    {
      name: "غرف نوم",
      image: <BedImg />,
    },
    {
      name: "دواليب",
      image: <CupboardImg />,
    },
    {
      name: "إنارة منزلية",
      image: <LightingImg />,
    },
  ],
};
