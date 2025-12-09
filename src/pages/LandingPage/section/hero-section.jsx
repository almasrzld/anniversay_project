import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Hero1 from "@/assets/images/hero1.jpg";
import Hero2 from "@/assets/images/hero2.jpg";
import Hero3 from "@/assets/images/hero3.jpg";
import Hero4 from "@/assets/images/hero4.jpg";
import Hero5 from "@/assets/images/hero5.gif";

const HeroSection = () => {
  const imageUrls = [Hero1, Hero2, Hero3, Hero4, Hero5];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const y = useMotionValue(0);
  const x = useMotionValue(0);
  const perspective = useTransform(y, [0, 1000], [1200, 1200]);
  const scaleIMG = useTransform(y, [0, 1000], [1.29, 1]);
  const topY = useTransform(y, [0, 1000], [0, -600]);
  const topX = useTransform(x, [0, 1000], [0, 0]);
  const bottomY = useTransform(y, [0, 1000], [0, 600]);
  const bottomX = useTransform(x, [0, 1000], [0, 0]);

  useEffect(() => {
    const handleScroll = () => {
      y.set(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [y]);

  return (
    <section className="relative h-[250vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.img
          src={imageUrls[currentImageIndex]}
          onClick={handleClick}
          alt="Hero"
          className="object-cover w-full h-full cursor-pointer"
          style={{ scale: scaleIMG }}
        />
        <motion.div
          style={{ perspective: perspective, x: topX, y: topY }}
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: topY, opacity: 1 }}
          className="absolute top-0 left-0 right-0 bg-red-100 z-10 flex items-center justify-center w-full h-1/2"
        >
          <h1 className="lg:text-9xl md:text-8xl sm:text-7xl text-5xl font-bold text-red-600 lg:pt-[190px] md:pt-[250px] sm:pt-[350px] pt-[270px]">
            HAPPY
          </h1>
        </motion.div>
        <motion.div
          style={{ perspective: perspective, x: bottomX, y: bottomY }}
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: bottomY, opacity: 1 }}
          className="absolute bottom-0 left-0 right-0 bg-red-100 z-10 flex items-center justify-center w-full h-1/2"
        >
          <h1 className="lg:text-9xl md:text-8xl sm:text-7xl text-5xl font-bold text-red-600 lg:pb-[190px] md:pb-[250px] sm:pb-[350px] pb-[270px]">
            ANNIVERSARY
          </h1>{" "}
          <div className="container absolute bottom-0 z-10 flex justify-between pb-10">
            <p className="text-red-600 font-bold lg:text-xs md:text-sm sm:text-xs text-[7.5px]">
              7 NOVEMBER 2023
            </p>
            <div className="flex flex-col items-center">
              <p className="text-red-600 font-light lg:text-xs md:text-sm sm:text-xs text-[7.5px]">
                " 2 Year "
              </p>
              <p className="text-red-600 font-bold lg:text-xs md:text-sm sm:text-xs text-[7.5px]">
                MUHAMMAD ALMAS RIZALDI
              </p>
              <p className="text-red-600 font-bold lg:text-xs md:text-sm sm:text-xs text-[7.5px]">
                SEPTIANA RATNAWATI
              </p>
            </div>
            <p className="text-red-600 font-bold lg:text-xs md:text-sm sm:text-xs text-[7.5px]">
              7 NOVEMBER 2024
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
