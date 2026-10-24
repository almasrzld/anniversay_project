import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function AboutSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const skewY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["5deg", "0deg", "-5deg"],
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

      <div className="absolute top-[35%] left-0 w-full flex flex-col items-center space-y-[-9px] sm:space-y-[-14px] md:space-y-[-18px] pointer-events-none">
        <motion.div
          className="text-red-600 text-[clamp(160px,18vw,280px)] font-extrabold font-anton leading-none whitespace-nowrap"
          style={{
            x: x1,
            skewY: skewY,
            letterSpacing: "0.02em",
            willChange: "transform",
          }}
        >
          ALMAS • SEPTIANA
        </motion.div>

        <motion.div
          className="text-red-600 text-[clamp(160px,18vw,280px)] font-extrabold font-anton leading-none whitespace-nowrap"
          style={{
            x: x2,
            skewY: skewY,
            letterSpacing: "0.02em",
            willChange: "transform",
          }}
        >
          OUR MOMENT • 2023 - 2026
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
