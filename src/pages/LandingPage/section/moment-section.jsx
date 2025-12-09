"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Momen2 from "@/assets/images/momen2.jpg";
import Momen4 from "@/assets/images/momen4.jpg";
import Hover1 from "@/assets/images/hover1.jpg";
import Hover2 from "@/assets/images/hover2.jpg";
import ZoomParallaxSection from "../../../components/common/zoom-parallax";
import Lenis from "lenis";

const MomentSection = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 5], [1, 1.4]);
  const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <section ref={ref} className="w-full h-auto bg-red-100">
      <div className="container">
        <h1 className="text-red-600 font-semibold text-base font-francois tracking-wide uppercase">
          OUR MOMENT
        </h1>
        <p className="pt-3 font-medium text-lg text-red-600 max-w-[400px] tracking-normal leading-[1.2em]">
          Jejak langkah kita dimulai dari pertemuan sederhana — tumbuh bersama
          dalam tawa, doa, dan harapan. Inilah kisah yang ingin kami abadikan.
        </p>
      </div>

      <div className="container flex flex-row flex-nowrap items-start justify-start gap-3 py-14">
        <motion.div
          className=" w-1/2 cursor-pointer flex flex-col"
          onMouseEnter={() => setHoverIndex(0)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <div
            className={`w-full aspect-[4/5] overflow-hidden ${
              hoverIndex === 0 ? "bg-[#D9D9D9]" : "bg-[#1C2E4A]"
            }`}
          >
            <motion.img
              src={hoverIndex === 0 ? Hover1 : Momen4}
              alt="Momen 1"
              className="w-full h-full object-cover transition-transform duration-500"
              animate={{ scale: hoverIndex === 0 ? 1.05 : 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ scale, y }}
            />
          </div>

          <p className="text-red-600 font-bold text-xs pt-3 inline-flex items-center">
            HOLIDAY{" "}
            <span className="inline-block w-1 h-1 rounded-full bg-red-600 mx-1"></span>{" "}
            PACITAN
          </p>
        </motion.div>

        <motion.div
          className="w-1/2 cursor-pointer flex flex-col"
          onMouseEnter={() => setHoverIndex(1)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <div
            className={`w-full aspect-[4/5] overflow-hidden ${
              hoverIndex === 1 ? "bg-[#FCC58D]" : "bg-[#FFB8B0]"
            }`}
          >
            <motion.img
              src={hoverIndex === 1 ? Hover2 : Momen2}
              alt="Momen 2"
              className="w-full h-full object-cover transition-transform duration-500"
              animate={{ scale: hoverIndex === 1 ? 1.05 : 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ scale, y }}
            />
          </div>

          <p className="text-red-600 font-bold text-xs pt-3 inline-flex items-center">
            PHOTOBOX{" "}
            <span className="inline-block w-1 h-1 rounded-full bg-red-600 mx-1"></span>{" "}
            SOLO
          </p>
        </motion.div>
      </div>

      <div className="mt-[50vh] mb-[100vh]">
        <ZoomParallaxSection />
      </div>
    </section>
  );
};

export default MomentSection;
