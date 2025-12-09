import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-50%", "20%"]);
  const skewY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["8deg", "0deg", "-8deg"]
  );

  return (
    <section
      ref={ref}
      className="relative min-h-[150vh] bg-red-100 overflow-hidden"
    >
      <div className="container pt-24 relative z-10">
        <h1 className="text-red-600 font-extrabold text-xs font-francois tracking-wide uppercase">
          ABOUT US
        </h1>
        <p className="text-red-600 text-lg max-w-[400px] pt-3 font-medium tracking-normal leading-[1.2em]">
          Kami adalah dua jiwa yang dipertemukan oleh waktu dan perjalanan. Dari
          pertemuan pertama hingga hari ini, setiap detik bersama adalah
          anugerah, tawa, doa, dan cerita yang menjadikan cinta ini tumbuh lebih
          dalam.
        </p>
      </div>

      <div className="absolute top-[35%] left-0 w-full flex flex-col items-center space-y-[-60px] pointer-events-none">
        <motion.div
          className="text-red-600 text-[310px] font-extrabold font-anton leading-none whitespace-nowrap"
          style={{
            x: x1,
            skewY: skewY,
            letterSpacing: "-0.05em",
          }}
        >
          ALMAS • SEPTIANA
        </motion.div>

        <motion.div
          className="text-red-600 text-[310px] font-extrabold font-anton leading-none whitespace-nowrap"
          style={{
            x: x2,
            skewY: skewY,
            letterSpacing: "-0.05em",
          }}
        >
          OUR MOMENT • 2023 - 2025
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
