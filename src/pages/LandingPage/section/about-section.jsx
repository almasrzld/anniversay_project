import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";
import { debounce } from "lodash";

function AboutSection() {
  const y = useMotionValue(0);
  const x1 = useTransform(y, [3000, 1000], [500, -120]);
  const x2 = useTransform(y, [3000, 1000], [-1000, 120]);
  const skewY = useTransform(y, [3000, 2000, 500], [8, 0, -8]);

  useEffect(() => {
    const handleScroll = debounce(() => {
      y.set(window.scrollY);
    }, 10);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [y]);

  return (
    <section className="w-full h-full bg-red-100">
      <div className="container pt-24">
        <h1 className="text-red-600 font-semibold text-xs font-francois">
          ABOUT US
        </h1>
        <p className="text-red-600 text-lg max-w-[345px] pt-4 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          harum provident at ex sit blanditiis similique fugiat ipsam
          necessitatibus minus cumque esse veritatis porro facilis.
        </p>
      </div>
      <div className="flex flex-col items-center space-y-[-65px] shrink-0 overflow-hidden py-40">
        <motion.div
          className="text-red-600 text-[350px] font-bold font-anton leading-none whitespace-nowrap"
          style={{
            x: x1,
            skewY: skewY,
            perspective: 1200,
            willChange: "transform",
            letterSpacing: "-20px",
          }}
        >
          <p>ALMAS • SEPTIANA</p>
        </motion.div>
        <motion.div
          className="text-red-600 text-[350px] font-bold font-anton leading-none whitespace-nowrap"
          style={{
            x: x2,
            skewY: skewY,
            perspective: 1200,
            willChange: "transform",
            letterSpacing: "-20px",
          }}
        >
          <p>OUR MOMENT • 2023 - 2024</p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
