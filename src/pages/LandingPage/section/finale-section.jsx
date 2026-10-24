import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaHeart } from "react-icons/fa";

// Komponen Lentera Terbang Reusable dengan animasi hembusan angin malam
const LanternItem = ({
  size = "md",
  left,
  right,
  top,
  bottomOffset,
  swayDuration = 4,
  swayX = 3,
  delay = 0,
  opacity = 1,
}) => {
  const sizeClasses = {
    sm: "w-4 h-6 rounded-t-sm shadow-[0_0_14px_#f59e0b]",
    md: "w-6 h-9 sm:w-7 sm:h-10 rounded-t-md shadow-[0_0_20px_#f59e0b]",
    lg: "w-8 h-11 sm:w-10 sm:h-14 rounded-t-lg shadow-[0_0_26px_#f59e0b]",
    xl: "w-10 h-13 sm:w-12 sm:h-16 rounded-t-xl shadow-[0_0_32px_#f59e0b]",
  }[size] || "w-6 h-9 rounded-t-md shadow-[0_0_20px_#f59e0b]";

  const style = { left, right, opacity };
  if (top !== undefined) style.top = top;
  if (bottomOffset !== undefined) style.bottom = `${bottomOffset}px`;

  return (
    <div
      style={style}
      className="absolute flex flex-col items-center pointer-events-none transform-gpu"
    >
      <motion.div
        animate={{
          y: [-3, 3, -3],
          x: [-swayX, swayX, -swayX],
          rotate: [-1.5, 1.5, -1.5],
        }}
        transition={{
          duration: swayDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }}
        className="flex flex-col items-center"
      >
        <div
          className={`${sizeClasses} bg-gradient-to-t from-amber-400 via-amber-200 to-orange-100 rounded-b-xs opacity-95 animate-pulse`}
        />
        {size !== "sm" && (
          <div className="w-2.5 h-1 bg-amber-500 rounded-full mt-0.5" />
        )}
      </motion.div>
    </div>
  );
};

const FinaleSection = () => {
  const containerRef = useRef(null);

  // Scroll timeline panjang (880vh) agar lampion dapat melintas bertahap dan gelombang terakhir menetap anggun
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 1. Siluet bukit & stickman couple di bawah (selalu tampak sejak awal menyatu dari LetterSection)
  const hillOpacity = useTransform(scrollYProgress, [0, 0.95, 1], [1, 1, 0.8]);

  // =========================================================================
  // 3 GELOMBANG LAMPION TERBANG + LENTERA PEMBUKA
  // - Lentera Pertama: Melayang langsung dari genggaman tangan pasangan di bukit
  // - Gelombang 1 & 2: Melayang naik dari bawah dan lewat ke atas layar
  // - Gelombang 3 (Terakhir): Naik dari bawah lalu BERHENTI MENGAPUNG DI ATAS TEKS
  // =========================================================================

  // LENTERA PERTAMA (LEAD LANTERN): Terlepas dari tangan pasangan saat malam mulai tiba (Scroll 0.0 -> 0.16)
  const firstLanternY = useTransform(scrollYProgress, [0.0, 0.16], ["40vh", "-50vh"]);
  const firstLanternScale = useTransform(scrollYProgress, [0.0, 0.16], [0.75, 1.25]);
  const firstLanternOpacity = useTransform(
    scrollYProgress,
    [0.0, 0.02, 0.12, 0.16],
    [0.9, 1, 1, 0],
  );

  // GELOMBANG 1: Mulai melayang naik sejak awal scroll tanpa jeda kosong (Scroll 0.01 -> 0.32)
  const wave1Y = useTransform(scrollYProgress, [0.01, 0.32], ["15vh", "-135vh"]);
  const wave1Opacity = useTransform(
    scrollYProgress,
    [0.01, 0.05, 0.28, 0.32],
    [0, 1, 1, 0],
  );

  // GELOMBANG 2: Lewat kedua kalinya mengitari rasi bintang cinta (Scroll 0.28 -> 0.58)
  const wave2Y = useTransform(scrollYProgress, [0.28, 0.58], ["15vh", "-135vh"]);
  const wave2Opacity = useTransform(
    scrollYProgress,
    [0.26, 0.30, 0.54, 0.58],
    [0, 1, 1, 0],
  );

  // GELOMBANG 3 (TERAKHIR): Naik dari bawah lalu STOP & MENGAPUNG DI ATAS TEKS (Scroll 0.56 -> 0.76)
  // Tidak keluar layar, melainkan menetap di posisi top (0vh) hingga akhir scroll
  const wave3Y = useTransform(scrollYProgress, [0.56, 0.76], ["105vh", "0vh"]);
  const wave3Opacity = useTransform(scrollYProgress, [0.55, 0.62], [0, 1]);

  // =========================================================================
  // RASI BINTANG "A & S 3" & TEKS FINALE
  // =========================================================================

  // Rasi Bintang "A & S 3": berkilau dan membesar di tengah langit malam (Scroll 0.20 -> 0.34)
  const constellationOpacity = useTransform(
    scrollYProgress,
    [0.20, 0.32, 0.92, 1],
    [0, 1, 1, 0.75],
  );
  const constellationScale = useTransform(scrollYProgress, [0.20, 0.36], [0.75, 1]);

  // Header teks finale: muncul saat pertengahan malam dan bertahan hingga akhir (Scroll 0.42 -> 0.54)
  const titleOpacity = useTransform(
    scrollYProgress,
    [0.42, 0.54, 0.92, 1],
    [0, 1, 1, 0.85],
  );
  const titleY = useTransform(scrollYProgress, [0.42, 0.54], [30, 0]);

  // Generator titik bintang latar belakang
  const backgroundStars = [
    { top: "12%", left: "15%", size: 2, delay: 0 },
    { top: "18%", left: "82%", size: 3, delay: 0.5 },
    { top: "25%", left: "28%", size: 2, delay: 1 },
    { top: "32%", left: "75%", size: 2.5, delay: 0.3 },
    { top: "40%", left: "10%", size: 3, delay: 0.7 },
    { top: "48%", left: "90%", size: 2, delay: 1.2 },
    { top: "60%", left: "22%", size: 2.5, delay: 0.2 },
    { top: "68%", left: "80%", size: 2, delay: 0.8 },
    { top: "15%", left: "50%", size: 3, delay: 1.5 },
    { top: "8%", left: "35%", size: 2, delay: 0.9 },
    { top: "22%", left: "62%", size: 2.5, delay: 1.1 },
    { top: "54%", left: "12%", size: 2, delay: 0.4 },
    { top: "58%", left: "70%", size: 2.5, delay: 1.3 },
  ];

  return (
    <div ref={containerRef} className="relative h-[880vh] bg-[#080210]">
      {/* Sticky Fullscreen Night Stage - Langit Malam Menyatu 100% dari Sunset LetterSection */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center px-4 bg-[#080210]">
        {/* Layer 1: Night Sky Twilight Gradient - 100% Identik dengan akhir LetterSection */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080210] via-[#120822] to-[#080210] pointer-events-none z-0 transform-gpu" />

        {/* Layer 2: Twinkling Background Stars */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {backgroundStars.map((star, idx) => (
            <motion.div
              key={idx}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: star.delay,
                ease: "easeInOut",
              }}
              style={{
                top: star.top,
                left: star.left,
                width: `${star.size}px`,
                height: `${star.size}px`,
              }}
              className="absolute rounded-full bg-amber-100 shadow-[0_0_8px_#fde68a]"
            />
          ))}
        </div>

        {/* Layer 2.5: Lentera Pertama (Lead Lantern) Terlepas dari Genggaman Pasangan */}
        <motion.div
          style={{
            y: firstLanternY,
            scale: firstLanternScale,
            opacity: firstLanternOpacity,
            willChange: "transform, opacity",
          }}
          className="absolute inset-0 flex justify-center items-center pointer-events-none z-22 transform-gpu"
        >
          <LanternItem size="lg" bottomOffset={45} swayDuration={3.5} swayX={2} delay={0} />
        </motion.div>

        {/* ============================================================== */}
        {/* Layer 3: GELOMBANG 1 LAMPION TERBANG (LEWAT PERTAMA KALI)      */}
        {/* ============================================================== */}
        <motion.div
          style={{
            y: wave1Y,
            opacity: wave1Opacity,
            willChange: "transform, opacity",
          }}
          className="absolute inset-0 pointer-events-none z-20"
        >
          <LanternItem size="lg" left="10%" bottomOffset={-20} swayDuration={4} swayX={3.5} delay={0} />
          <LanternItem size="xl" right="12%" bottomOffset={10} swayDuration={4.5} swayX={3} delay={0.3} />
          <LanternItem size="md" left="26%" bottomOffset={-40} swayDuration={3.6} swayX={2.5} delay={0.6} />
          <LanternItem size="md" right="28%" bottomOffset={25} swayDuration={3.8} swayX={2.8} delay={0.2} />
          <LanternItem size="sm" left="48%" bottomOffset={-60} swayDuration={3.2} swayX={2} delay={0.8} opacity={0.7} />
        </motion.div>

        {/* ============================================================== */}
        {/* Layer 3: GELOMBANG 2 LAMPION TERBANG (LEWAT KEDUA KALINYA)     */}
        {/* ============================================================== */}
        <motion.div
          style={{
            y: wave2Y,
            opacity: wave2Opacity,
            willChange: "transform, opacity",
          }}
          className="absolute inset-0 pointer-events-none z-20"
        >
          <LanternItem size="md" left="6%" bottomOffset={15} swayDuration={3.7} swayX={3} delay={0.2} />
          <LanternItem size="xl" left="18%" bottomOffset={-30} swayDuration={4.2} swayX={3.2} delay={0.5} />
          <LanternItem size="sm" left="38%" bottomOffset={-50} swayDuration={3.1} swayX={2} delay={0.7} opacity={0.65} />
          <LanternItem size="sm" right="36%" bottomOffset={-20} swayDuration={3.4} swayX={2} delay={0.4} opacity={0.65} />
          <LanternItem size="xl" right="18%" bottomOffset={-10} swayDuration={4.4} swayX={3.5} delay={0.1} />
          <LanternItem size="md" right="7%" bottomOffset={30} swayDuration={3.9} swayX={2.5} delay={0.8} />
        </motion.div>

        {/* ============================================================== */}
        {/* Layer 3: GELOMBANG 3 (TERAKHIR) - STOP MENGAPUNG DI ATAS TEKS  */}
        {/* ============================================================== */}
        <motion.div
          style={{
            y: wave3Y,
            opacity: wave3Opacity,
            willChange: "transform, opacity",
          }}
          className="absolute inset-0 pointer-events-none z-20"
        >
          {/* Lampion yang menetap mengapung tepat di atas & samping teks */}
          <LanternItem size="lg" left="8%" top="20%" swayDuration={4.2} swayX={3} delay={0.2} />
          <LanternItem size="xl" left="18%" top="23%" swayDuration={4.6} swayX={3.5} delay={0.5} />
          <LanternItem size="md" left="32%" top="18%" swayDuration={3.6} swayX={2.5} delay={0.1} />
          <LanternItem size="sm" left="48%" top="15%" swayDuration={3.1} swayX={2} delay={0.7} opacity={0.8} />
          <LanternItem size="md" right="32%" top="18%" swayDuration={3.8} swayX={2.5} delay={0.4} />
          <LanternItem size="xl" right="18%" top="23%" swayDuration={4.4} swayX={3.5} delay={0.3} />
          <LanternItem size="lg" right="8%" top="20%" swayDuration={4.1} swayX={3} delay={0.6} />
          <LanternItem size="md" left="4%" top="30%" swayDuration={3.5} swayX={2.8} delay={0.8} />
          <LanternItem size="md" right="4%" top="30%" swayDuration={3.9} swayX={2.8} delay={0.4} />
        </motion.div>

        {/* Layer 4: Constellation of "A & S" and Number "3" in the Sky */}
        <motion.div
          style={{
            opacity: constellationOpacity,
            scale: constellationScale,
            willChange: "transform, opacity",
          }}
          className="relative z-30 flex flex-col items-center justify-center pointer-events-none transform-gpu mb-4"
        >
          {/* Constellation Glow Badge */}
          <div className="relative px-8 py-5 flex flex-col items-center">
            {/* Glowing Constellation Title */}
            <div className="flex items-center gap-3">
              <span className="font-serif italic text-amber-200 text-3xl sm:text-5xl md:text-6xl font-light tracking-wider drop-shadow-[0_0_15px_rgba(253,230,138,0.8)]">
                A
              </span>
              <span className="font-serif italic text-red-300 text-2xl sm:text-3xl md:text-4xl drop-shadow-[0_0_15px_rgba(252,165,165,0.8)]">
                &
              </span>
              <span className="font-serif italic text-amber-200 text-3xl sm:text-5xl md:text-6xl font-light tracking-wider drop-shadow-[0_0_15px_rgba(253,230,138,0.8)]">
                S
              </span>
            </div>

            {/* Glowing 3 Years Ribbon */}
            <div className="flex items-center gap-2 mt-1">
              <div className="h-[1px] w-8 sm:w-14 bg-gradient-to-r from-transparent via-amber-200 to-amber-400" />
              <span className="font-francois text-amber-300 text-xs sm:text-sm tracking-widest uppercase drop-shadow-[0_0_10px_#fde68a]">
                3rd Anniversary
              </span>
              <div className="h-[1px] w-8 sm:w-14 bg-gradient-to-l from-transparent via-amber-200 to-amber-400" />
            </div>
          </div>
        </motion.div>

        {/* Layer 5: Finale Title & Romantic Subtitle */}
        <motion.div
          style={{
            opacity: titleOpacity,
            y: titleY,
            willChange: "transform, opacity",
          }}
          className="container max-w-3xl text-center relative z-30 pointer-events-none transform-gpu"
        >
          <p className="text-red-400 font-semibold text-xs sm:text-sm font-francois tracking-widest uppercase flex items-center justify-center">
            <span>TO INFINITY & BEYOND</span>
          </p>
          <h2 className="text-white font-extrabold text-3xl sm:text-5xl md:text-6xl font-anton tracking-tight uppercase mt-2 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
            3 YEARS & A LIFETIME TO GO
          </h2>
          <p className="text-amber-100/90 text-xs sm:text-sm font-medium max-w-lg mx-auto mt-3 leading-relaxed drop-shadow-md">
            "Bersamamu, setiap detik adalah perjalanan paling indah yang tak
            ingin pernah kuakhiri. Terima kasih telah memilihku, hari ini dan
            selamanya."
          </p>
        </motion.div>

        {/* Layer 6: Silhouette Landscape & Stickman Couple at Bottom */}
        <motion.div
          style={{ opacity: hillOpacity }}
          className="absolute bottom-0 left-0 right-0 w-full pointer-events-none z-20 flex flex-col items-center"
        >
          {/* Stickman Couple Silhouette Holding Hands */}
          <div className="relative mb-[-12px] flex items-center justify-center gap-1.5 z-20">
            {/* Romantic Heart Glowing between them */}
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-7 text-amber-300 drop-shadow-[0_0_12px_#fde68a]"
            >
              <FaHeart className="w-4 h-4" />
            </motion.div>

            {/* Boy Stickman Silhouette */}
            <svg viewBox="0 0 80 120" className="w-14 h-20 sm:w-16 sm:h-24">
              <circle cx="40" cy="24" r="14" fill="#120822" stroke="#fde68a" strokeWidth="3" />
              <line x1="40" y1="38" x2="40" y2="76" stroke="#fde68a" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="40" y1="76" x2="28" y2="108" stroke="#fde68a" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="40" y1="76" x2="52" y2="108" stroke="#fde68a" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="40" y1="50" x2="56" y2="66" stroke="#fde68a" strokeWidth="3.5" strokeLinecap="round" />
            </svg>

            {/* Girl Stickman Silhouette with Hijab */}
            <svg viewBox="0 0 80 120" className="w-14 h-20 sm:w-16 sm:h-24">
              <path
                d="M 24 24 Q 40 8 56 24 Q 62 44 40 48 Q 18 44 24 24 Z"
                fill="#120822"
                stroke="#fde68a"
                strokeWidth="3"
              />
              <path d="M 40 48 L 26 84 L 54 84 Z" fill="#120822" stroke="#fde68a" strokeWidth="3" strokeLinejoin="round" />
              <line x1="34" y1="84" x2="34" y2="108" stroke="#fde68a" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="46" y1="84" x2="46" y2="108" stroke="#fde68a" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="38" y1="58" x2="24" y2="66" stroke="#fde68a" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
          </div>

          {/* Dark Silhouette Hill Horizon */}
          <div className="w-full h-12 sm:h-16 bg-gradient-to-t from-black via-[#080210] to-transparent rounded-t-[50%] scale-x-110" />
        </motion.div>
      </div>
    </div>
  );
};

export default FinaleSection;
