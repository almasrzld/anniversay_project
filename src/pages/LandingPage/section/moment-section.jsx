"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Momen2 from "@/assets/images/momen2.jpg";
import Momen4 from "@/assets/images/momen4.jpg";
import Hover1 from "@/assets/images/hover1.jpg";
import Hover2 from "@/assets/images/hover2.jpg";
import ZoomParallaxSection from "../../../components/common/zoom-parallax";

const MomentSection = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const cardsRef = useRef(null);

  // Lacak scroll spesifik pada container kartu momen (hanya saat berada di viewport)
  const { scrollYProgress } = useScroll({
    target: cardsRef,
    offset: ["start end", "end start"],
  });

  // Parallax halus yang sejajar dan seragam untuk kedua kartu agar posisinya selalu rata
  const y = useTransform(scrollYProgress, [0, 1], [25, -25]);

  return (
    <section className="w-full h-auto bg-red-100">
      <div className="container">
        <h1 className="text-red-600 font-semibold text-base font-francois tracking-wide uppercase">
          OUR MOMENT
        </h1>
        <p className="pt-3 font-medium text-lg text-red-600 max-w-[400px] tracking-normal leading-[1.2em]">
          Jejak langkah kita dimulai dari pertemuan sederhana — tumbuh bersama
          dalam tawa, doa, dan harapan. Inilah kisah yang ingin kami abadikan.
        </p>
      </div>

      <div
        ref={cardsRef}
        className="container flex flex-row flex-nowrap items-start justify-start gap-4 py-14"
      >
        {/* Card 1 */}
        <div
          className="w-1/2 cursor-pointer flex flex-col"
          onMouseEnter={() => setHoverIndex(0)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <motion.div
            style={{ y, willChange: "transform" }}
            className={`w-full aspect-[4/5] overflow-hidden transform-gpu ${
              hoverIndex === 0 ? "bg-[#D9D9D9]" : "bg-[#1C2E4A]"
            }`}
          >
            <motion.img
              src={hoverIndex === 0 ? Hover1 : Momen4}
              alt="Momen 1"
              decoding="async"
              className="w-full h-full object-cover transform-gpu"
              animate={{ scale: hoverIndex === 0 ? 1.06 : 1 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            />
          </motion.div>

          <p className="text-red-600 font-bold text-xs pt-3 inline-flex items-center">
            HOLIDAY{" "}
            <span className="inline-block w-1 h-1 rounded-full bg-red-600 mx-1"></span>{" "}
            PACITAN
          </p>
        </div>

        {/* Card 2 */}
        <div
          className="w-1/2 cursor-pointer flex flex-col"
          onMouseEnter={() => setHoverIndex(1)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <motion.div
            style={{ y, willChange: "transform" }}
            className={`w-full aspect-[4/5] overflow-hidden transform-gpu ${
              hoverIndex === 1 ? "bg-[#FCC58D]" : "bg-[#FFB8B0]"
            }`}
          >
            <motion.img
              src={hoverIndex === 1 ? Hover2 : Momen2}
              alt="Momen 2"
              decoding="async"
              className="w-full h-full object-cover transform-gpu"
              animate={{ scale: hoverIndex === 1 ? 1.06 : 1 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
            />
          </motion.div>

          <p className="text-red-600 font-bold text-xs pt-3 inline-flex items-center">
            PHOTOBOX{" "}
            <span className="inline-block w-1 h-1 rounded-full bg-red-600 mx-1"></span>{" "}
            SOLO
          </p>
        </div>
      </div>

      <div className="mt-[20vh] pb-10">
        <ZoomParallaxSection />
      </div>
    </section>
  );
};

export default MomentSection;
