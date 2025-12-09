import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Picture1 from "@/assets/images/picture1.jpg";
import Picture2 from "@/assets/images/picture2.jpg";
import Picture3 from "@/assets/images/picture3.png";
import Picture4 from "@/assets/images/picture4.jpg";
import Picture5 from "@/assets/images/picture5.jpg";
import Picture6 from "@/assets/images/picture6.jpg";
import Picture7 from "@/assets/images/picture7.jpg";

const ZoomParallaxSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Picture1,
      scale: scale4,
    },
    {
      src: Picture5,
      scale: scale5,
    },
    {
      src: Picture3,
      scale: scale6,
    },
    {
      src: Picture2,
      scale: scale5,
    },
    {
      src: Picture7,
      scale: scale6,
    },
    {
      src: Picture6,
      scale: scale8,
    },
    {
      src: Picture4,
      scale: scale9,
    },
  ];

  const positions = [
    { top: "0vh", left: "0vw", w: "25vw", h: "25vh" },
    { top: "-30vh", left: "5vw", w: "35vw", h: "30vh" },
    { top: "-10vh", left: "-25vw", w: "20vw", h: "45vh" },
    { top: "0vh", left: "27.5vw", w: "25vw", h: "25vh" },
    { top: "27.5vh", left: "5vw", w: "20vw", h: "25vh" },
    { top: "27.5vh", left: "-22.5vw", w: "30vw", h: "25vh" },
    { top: "22.5vh", left: "25vw", w: "15vw", h: "15vh" },
  ];

  return (
    <div ref={container} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {pictures.map(({ src, scale }, index) => (
          <motion.div
            key={index}
            style={{ scale }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div
              className="relative"
              style={{
                top: positions[index].top,
                left: positions[index].left,
                width: positions[index].w,
                height: positions[index].h,
              }}
            >
              <img
                src={src}
                alt={`image-${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ZoomParallaxSection;
