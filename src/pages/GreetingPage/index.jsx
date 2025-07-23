import { motion } from "framer-motion";
import myLoveMineAllMine from "@/assets/audio/my-love-mine-all-mine.mp3";
import { FaHeart } from "react-icons/fa";

const GretingPage = () => {
  return (
    <section className="relative bg-red-600 h-[300vh]">
      <audio src={myLoveMineAllMine} autoPlay loop />
      <div className="relative h-full">
        <div className="sticky top-0 h-screen flex justify-center items-center overflow-hidden">
          <div className="flex flex-col items-center lg:h-1/2 md:h-1/3">
            <motion.p
              className="relative lg:text-[120px] md:text-8xl sm:text-7xl text-5xl text-white text-center font-serif cursor-pointer"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              LOVE
              <motion.span
                className="absolute bottom-0 left-0 bg-white w-full h-[2px]"
                variants={{
                  rest: { width: 0, opacity: 0 },
                  hover: { width: "100%", opacity: 1 },
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              <motion.span
                className="absolute top-0 md:mt-10 sm:mt-3 mt-3 ml-2"
                variants={{
                  rest: { width: 0, opacity: 0 },
                  hover: { width: "100%", opacity: 1 },
                }}
                transition={{ duration: 0.1, delay: 0.5, ease: "easeInOut" }}
              >
                <FaHeart className="md:w-10 sm:w-8 w-6 md:h-10 sm:h-8 h-6" />
              </motion.span>
            </motion.p>
            <motion.p
              className="relative lg:text-[120px] md:text-8xl sm:text-7xl text-5xl text-white text-center font-serif cursor-pointer"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              YOU
              <motion.span
                className="absolute bottom-0 left-0 bg-white w-full h-[2px]"
                variants={{
                  rest: { width: 0, opacity: 0 },
                  hover: { width: "100%", opacity: 1 },
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              <motion.span
                className="absolute top-0 md:mt-10 sm:mt-3 mt-3 ml-2"
                variants={{
                  rest: { width: 0, opacity: 0 },
                  hover: { width: "100%", opacity: 1 },
                }}
                transition={{ duration: 0.1, delay: 0.5, ease: "easeInOut" }}
              >
                <FaHeart className="md:w-10 sm:w-8 w-6 md:h-10 sm:h-8 h-6" />
              </motion.span>
            </motion.p>
            <motion.p
              className="relative lg:text-[120px] md:text-8xl sm:text-7xl text-5xl text-white text-center font-serif cursor-pointer"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              FOREVER
              <motion.span
                className="absolute bottom-0 left-0 bg-white w-full h-[2px]"
                variants={{
                  rest: { width: 0, opacity: 0 },
                  hover: { width: "100%", opacity: 1 },
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
              <motion.span
                className="absolute top-0 md:mt-10 sm:mt-3 mt-3 ml-2"
                variants={{
                  rest: { width: 0, opacity: 0 },
                  hover: { width: "100%", opacity: 1 },
                }}
                transition={{ duration: 0.1, delay: 0.5, ease: "easeInOut" }}
              >
                <FaHeart className="md:w-10 sm:w-8 w-6 md:h-10 sm:h-8 h-6" />
              </motion.span>
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GretingPage;
