// import images
import TestimonialImg from "../assets/img/testimonial.png";
import Avatar1Img from "../assets/img/avatar-1.png";
import Avatar2Img from "../assets/img/avatar-2.png";
import Avatar3Img from "../assets/img/avatar-3.png";

export const testimonial = {
  title: "مذا قال العملاء عن السوق الليبي؟",
  image: <TestimonialImg />,
  persons: [
    {
      avatar: <Avatar1Img />,
      name: "فراس الدويني",
      occupation: "من مصراتة",
      message:
        "“لقد قمت بالبحث طويلاً عن طاولة مخصصة، بالصدفة عثرت على السوق الليبي وقد كان أفضل مكان يلبي كل متطلباتي .”",
    },
    {
      avatar: <Avatar2Img />,
      name: "فاطمة عبد الله",
      occupation: "من طرابلس",
      message:
        "“لم اكن اتوقع أننا نملك صناعة محلية بهذه الجودة، لأول مرة أثق في المنتج المحلي اكثر من الأجنبي وذلك بفضل السوق الليبي .”",
    },
    {
      avatar: <Avatar3Img />,
      name: "سندس منصور",
      occupation: "من سبها",
      message:
        "“كنت أعاني من بعض الأعمال المنزلية التي تحتاج إلى فك وتركيب، حتى وجدت السوق الليبي، في أي وقت يمكنه تلبية كل الطلبات، شكراً لفريق العمل .”",
    },
  ],
};
