// import images
import Features1Img from "../assets/img/features-1.png";
import Features2Img from "../assets/img/features-2.png";

//import icons
import { IoIosCheckmarkCircle } from "react-icons/io";

export const features = {
  image: <Features1Img />,
  title: "لسنا وحدنا ولكننا الأفضل بشهادة معظم زبائننا",
  subtitle:
    "نص افتراضي يتم عرض فيه نقاط القوة لدى الشركة وذكر بعض المزايا التي تقدمها حصراً للعملاء",
  buttonText: "Show Now",
  items: [
    {
      icon: <IoIosCheckmarkCircle />,
      title: "الميزة الأولى",
      subtitle:
        "نص افتراضي يعبر فيه عن إحدى المزايا التي يقدمها السوق الليبي للأثاث",
    },
    {
      icon: <IoIosCheckmarkCircle />,
      title: "الميزة الثانية",
      subtitle:
        "نص افتراضي يعبر فيه عن إحدى المزايا التي يقدمها السوق الليبي للأثاث",
    },
  ],
  feature2: {
    image: <Features2Img />,
    title: "مطابخ إيطالية بأفضل جودة وأنسب سعر ستجدها فقط لدى السوق الليبي",
    subtitle:
      "نص افتراضي يتم ذكر فيه الشركات التي تم عقد وكالة رسمية معها والتي نقدم عن طريقها أثاث مع ضمان يقدم للعميل لزيادة الثقة في المنتج الذي سيتم ترويجه.",
  },
};
