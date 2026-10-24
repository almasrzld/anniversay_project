import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHeart, FaArrowRight, FaChevronDown } from "react-icons/fa";
import Momen2 from "@/assets/images/momen2.jpg";
import Momen4 from "@/assets/images/momen4.jpg";

const LetterSection = () => {
  const containerRef = useRef(null);

  // Scroll timeline diperpanjang menjadi 580vh agar setiap fase animasi lebih lega & nyaman
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 1. Watermark background: teks berulang bergerak dari kanan ke kiri tanpa ada celah kosong
  const watermarkX = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const watermarkOpacity = useTransform(scrollYProgress, [0, 0.77, 0.83], [0.4, 0.4, 0]);

  // 2. Header section: ikut bergerak naik saat surat terbuka agar tidak tertutup surat
  const headerY = useTransform(scrollYProgress, [0.42, 0.7], [0, -65]);
  const headerScale = useTransform(scrollYProgress, [0.42, 0.7], [1, 0.95]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.77, 0.83], [1, 1, 0]);

  // 3. Stage 1 & 2: Stickman Walk & Handover (0.0 -> 0.44)
  // Boy (Almas) berjalan dari kiri
  const boyX = useTransform(scrollYProgress, [0, 0.28], [-190, -45]);
  const boyBounce = useTransform(
    scrollYProgress,
    [0, 0.07, 0.14, 0.21, 0.28],
    [0, -8, 0, -8, 0],
  );

  // Girl (Septiana) menunggu di kanan lalu mendekat
  const girlX = useTransform(scrollYProgress, [0, 0.16, 0.28], [190, 120, 45]);

  // Narasi ucapan cinta saat stickman bertemu
  const narasiOpacity = useTransform(
    scrollYProgress,
    [0.28, 0.32, 0.42, 0.46],
    [0, 1, 1, 0],
  );

  // Efek hati berhamburan saat mereka bertemu (0.27 -> 0.44)
  const heartsScale = useTransform(
    scrollYProgress,
    [0.27, 0.34, 0.42, 0.46],
    [0, 1.4, 1.2, 0],
  );
  const heartsOpacity = useTransform(
    scrollYProgress,
    [0.27, 0.32, 0.42, 0.46],
    [0, 1, 1, 0],
  );

  // Surat kecil berpindah dari tangan Almas ke Septiana
  const miniEnvelopeX = useTransform(
    scrollYProgress,
    [0, 0.28, 0.36],
    [-10, 0, 18],
  );
  const miniEnvelopeY = useTransform(
    scrollYProgress,
    [0, 0.28, 0.36],
    [0, 0, -4],
  );
  const stickmanStageOpacity = useTransform(
    scrollYProgress,
    [0, 0.42, 0.48],
    [1, 1, 0],
  );
  const stickmanStageScale = useTransform(
    scrollYProgress,
    [0.38, 0.48],
    [1, 0.85],
  );

  // 4. Stage 3: Amplop Besar Meluncur ke Tengah & Membuka (0.44 -> 0.68)
  const bigEnvelopeOpacity = useTransform(
    scrollYProgress,
    [0.44, 0.52, 0.78, 0.84],
    [0, 1, 1, 0],
  );
  const bigEnvelopeScale = useTransform(
    scrollYProgress,
    [0.44, 0.56, 0.78, 0.84],
    [0.75, 1, 0.98, 0.90],
  );
  const bigEnvelopeY = useTransform(
    scrollYProgress,
    [0.44, 0.58, 0.78, 0.84],
    [120, 20, 20, -50],
  );

  // Segel Lilin "A & S" pecah / memudar
  const sealOpacity = useTransform(scrollYProgress, [0.5, 0.6], [1, 0]);
  const sealScale = useTransform(scrollYProgress, [0.5, 0.6], [1, 0.3]);
  const sealY = useTransform(scrollYProgress, [0.5, 0.6], [0, 25]);

  // Tutup amplop atas melipat terbuka 3D
  const flapRotateX = useTransform(scrollYProgress, [0.52, 0.64], [0, 180]);

  // 5. Stage 4: Kertas Surat Meluncur Keluar & Membesar (0.58 -> 0.78)
  // Posisi Y diatur agar berhenti di bawah judul "A LETTER FOR YOU"
  const letterY = useTransform(scrollYProgress, [0.58, 0.75, 0.78, 0.84], [90, -45, -45, -90]);
  const letterScale = useTransform(scrollYProgress, [0.58, 0.75, 0.78, 0.84], [0.86, 1.03, 1.03, 0.94]);
  const letterOpacity = useTransform(scrollYProgress, [0.56, 0.64, 0.78, 0.84], [0, 1, 1, 0]);

  // 6. Foto Polaroid Sisi Kiri & Kanan (0.54 -> 0.84)
  const polaroidOpacity = useTransform(
    scrollYProgress,
    [0.54, 0.68, 0.78, 0.84],
    [0, 1, 1, 0],
  );
  const leftPolaroidX = useTransform(scrollYProgress, [0.54, 0.75], [-120, 0]);
  const leftPolaroidY = useTransform(scrollYProgress, [0.54, 0.82], [80, -20]);
  const rightPolaroidX = useTransform(scrollYProgress, [0.54, 0.75], [120, 0]);
  const rightPolaroidY = useTransform(scrollYProgress, [0.54, 0.82], [80, -15]);

  // 7. Stage 5: CTA Button & Couple holding hands (0.72 -> 0.83)
  const ctaOpacity = useTransform(
    scrollYProgress,
    [0.72, 0.76, 0.78, 0.83],
    [0, 1, 1, 0],
  );
  const ctaY = useTransform(scrollYProgress, [0.72, 0.76], [25, 0]);
  const coupleBottomOpacity = useTransform(
    scrollYProgress,
    [0.72, 0.76, 0.78, 0.83],
    [0, 1, 1, 0],
  );

  // 8. Stage 6: TRANSISI PARALLAX SUNSET & SENJA MENUJU MALAM (0.80 -> 1.0)
  // Background hangat senja (golden hour)
  const sunsetBgOpacity = useTransform(
    scrollYProgress,
    [0.80, 0.85, 0.90, 0.95],
    [0, 1, 0.4, 0],
  );

  // Background malam twilight pekat (menyamakan 100% dengan awal FinaleSection)
  const duskBgOpacity = useTransform(scrollYProgress, [0.88, 0.95], [0, 1]);

  // Matahari terbenam perlahan ke bawah garis horizon lalu memudar sempurna
  const sunY = useTransform(scrollYProgress, [0.82, 0.94], ["-8vh", "50vh"]);
  const sunScale = useTransform(scrollYProgress, [0.82, 0.94], [0.85, 1.25]);
  const sunOpacity = useTransform(
    scrollYProgress,
    [0.82, 0.85, 0.90, 0.94],
    [0, 1, 1, 0],
  );

  // Awan senja melayang perlahan secara horizontal lalu memudar
  const cloud1X = useTransform(scrollYProgress, [0.82, 0.96], ["-25%", "25%"]);
  const cloud2X = useTransform(scrollYProgress, [0.82, 0.96], ["20%", "-20%"]);
  const cloudsOpacity = useTransform(
    scrollYProgress,
    [0.82, 0.86, 0.90, 0.94],
    [0, 0.75, 0.75, 0],
  );

  // Teks narasi puitis senja (Muncul anggun saat senja lalu memudar sebelum malam)
  const sunsetTitleOpacity = useTransform(
    scrollYProgress,
    [0.84, 0.88, 0.92, 0.95],
    [0, 1, 1, 0],
  );
  const sunsetTitleY = useTransform(scrollYProgress, [0.84, 0.88], [25, 0]);

  // Bintang malam pertama mulai berkelap-kelip menyambut malam di langit terbuka
  const duskStarsOpacity = useTransform(scrollYProgress, [0.91, 0.96], [0, 1]);

  // Bintang senja / awal malam di langit terbuka
  const duskStars = [
    { top: "14%", left: "18%", size: 2, delay: 0 },
    { top: "20%", left: "80%", size: 3, delay: 0.4 },
    { top: "28%", left: "32%", size: 2.5, delay: 0.8 },
    { top: "35%", left: "72%", size: 2, delay: 0.2 },
    { top: "42%", left: "14%", size: 3, delay: 0.6 },
    { top: "18%", left: "50%", size: 2.5, delay: 1.0 },
    { top: "50%", left: "86%", size: 2, delay: 0.3 },
    { top: "62%", left: "24%", size: 2.5, delay: 0.7 },
    { top: "70%", left: "68%", size: 2, delay: 0.5 },
    { top: "78%", left: "42%", size: 2.5, delay: 0.9 },
  ];

  // Scroll hint indikator di awal
  const hintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[650vh] bg-red-100">
      {/* Sticky Fullscreen Scene */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-red-100 flex flex-col items-center justify-center px-4">
        {/* Layer 0: Giant Watermark Background - Teks Berulang Bergerak dari Kanan ke Kiri Tanpa Space Kosong */}
        <motion.div
          style={{
            x: watermarkX,
            opacity: watermarkOpacity,
            willChange: "transform, opacity",
          }}
          className="absolute top-[20%] left-[-25%] whitespace-nowrap text-red-200/40 font-anton text-[130px] sm:text-[180px] md:text-[230px] select-none pointer-events-none z-0 transform-gpu leading-none tracking-tight"
        >
          ALMAS • SEPTIANA • 3 YEARS • ALMAS • SEPTIANA • 3 YEARS • ALMAS •
          SEPTIANA • 3 YEARS
        </motion.div>

        {/* ============================================================== */}
        {/* LAYER SUNSET & DUSK OVERLAYS (Scroll 0.80 -> 1.0)              */}
        {/* ============================================================== */}
        {/* Warm Golden Hour Sunset Gradient */}
        <motion.div
          style={{
            opacity: sunsetBgOpacity,
            willChange: "opacity",
          }}
          className="absolute inset-0 bg-gradient-to-b from-[#fef08a]/60 via-[#fb923c]/70 to-[#c2410c]/80 pointer-events-none z-1 transform-gpu"
        />

        {/* Deep Twilight / Night Sky Gradient - 100% Identik dengan FinaleSection */}
        <motion.div
          style={{
            opacity: duskBgOpacity,
            willChange: "opacity",
          }}
          className="absolute inset-0 bg-gradient-to-b from-[#080210] via-[#120822] to-[#080210] pointer-events-none z-2 transform-gpu"
        />

        {/* Twinkling Dusk Stars */}
        <motion.div
          style={{
            opacity: duskStarsOpacity,
            willChange: "opacity",
          }}
          className="absolute inset-0 pointer-events-none z-3"
        >
          {duskStars.map((star, idx) => (
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
        </motion.div>

        {/* Sinking Golden Sunset Sun */}
        <motion.div
          style={{
            y: sunY,
            scale: sunScale,
            opacity: sunOpacity,
            willChange: "transform, opacity",
          }}
          className="absolute flex items-center justify-center pointer-events-none z-4 transform-gpu"
        >
          <div className="relative w-44 h-44 sm:w-60 sm:h-60 rounded-full bg-gradient-to-t from-amber-400 via-orange-300 to-yellow-100 shadow-[0_0_90px_#f59e0b] filter blur-[0.5px] flex items-center justify-center">
            <div className="absolute inset-[-20%] rounded-full bg-amber-400/20 blur-xl animate-pulse" />
            <div className="absolute inset-[-40%] rounded-full bg-orange-500/10 blur-2xl" />
          </div>
        </motion.div>

        {/* Parallax Drifting Sunset Clouds */}
        <motion.div
          style={{
            opacity: cloudsOpacity,
            willChange: "opacity",
          }}
          className="absolute inset-0 pointer-events-none z-5 overflow-hidden"
        >
          <motion.div
            style={{ x: cloud1X }}
            className="absolute top-[32%] -left-20 w-80 h-16 bg-white/20 blur-md rounded-full transform-gpu"
          />
          <motion.div
            style={{ x: cloud2X }}
            className="absolute top-[44%] -right-16 w-96 h-20 bg-amber-200/25 blur-lg rounded-full transform-gpu"
          />
        </motion.div>

        {/* Section Header - Ikut bergerak naik saat surat terbuka agar tidak tertutup */}
        <motion.div
          style={{
            y: headerY,
            scale: headerScale,
            opacity: headerOpacity,
            willChange: "transform, opacity",
          }}
          className="container max-w-4xl text-center mb-3 sm:mb-5 relative z-10 pointer-events-none transform-gpu"
        >
          <p className="text-red-600 font-semibold text-xs md:text-sm font-francois tracking-widest uppercase">
            SPECIAL WORDS
          </p>
          <h2 className="text-red-600 font-extrabold text-3xl sm:text-5xl md:text-6xl font-anton tracking-tight uppercase mt-1">
            A LETTER FOR YOU
          </h2>

          {/* Narrative Dialogue Subtitle */}
          <div className="relative h-6 mt-1.5">
            <motion.p
              style={{ opacity: narasiOpacity }}
              className="absolute inset-0 text-red-600 text-xs sm:text-sm font-medium tracking-wide flex items-center justify-center gap-1.5"
            >
              <span>
                "Untuk Septiana tercinta, selamat anniversary ke-3..."
              </span>
              <FaHeart className="w-3.5 h-3.5 text-red-500 inline-block align-middle" />
            </motion.p>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* SCENE 1 & 2: STICKMAN ANIMATION STAGE (Scroll 0.0 -> 0.44)     */}
        {/* ============================================================== */}
        <motion.div
          style={{
            opacity: stickmanStageOpacity,
            scale: stickmanStageScale,
            willChange: "transform, opacity",
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 transform-gpu"
        >
          <div className="relative w-full max-w-md h-72 flex items-center justify-center">
            {/* Romantic floating hearts when they meet */}
            <motion.div
              style={{
                scale: heartsScale,
                opacity: heartsOpacity,
                willChange: "transform, opacity",
              }}
              className="absolute -top-6 flex items-center gap-2 transform-gpu"
            >
              <FaHeart className="w-6 h-6 text-red-500 animate-bounce" />
              <FaHeart className="w-8 h-8 text-red-600" />
              <FaHeart className="w-6 h-6 text-red-500 animate-bounce" />
            </motion.div>

            {/* Boy Stickman (Almas) */}
            <motion.div
              style={{
                x: boyX,
                y: boyBounce,
                willChange: "transform",
              }}
              className="relative flex flex-col items-center transform-gpu"
            >
              <svg viewBox="0 0 100 140" className="w-24 h-32 sm:w-28 sm:h-36">
                {/* Head */}
                <circle
                  cx="50"
                  cy="28"
                  r="16"
                  fill="#fffcf7"
                  stroke="#dc2626"
                  strokeWidth="4"
                />
                {/* Hair */}
                <path
                  d="M 36 24 Q 48 12 64 22"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                {/* Eyes & Smile */}
                <circle cx="44" cy="27" r="2.2" fill="#dc2626" />
                <circle cx="56" cy="27" r="2.2" fill="#dc2626" />
                <path
                  d="M 44 33 Q 50 38 56 33"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {/* Body */}
                <line
                  x1="50"
                  y1="44"
                  x2="50"
                  y2="88"
                  stroke="#dc2626"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                {/* Walking Legs */}
                <line
                  x1="50"
                  y1="88"
                  x2="36"
                  y2="124"
                  stroke="#dc2626"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <line
                  x1="50"
                  y1="88"
                  x2="64"
                  y2="124"
                  stroke="#dc2626"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                {/* Arm holding envelope forward */}
                <path
                  d="M 50 58 Q 66 64 80 66"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-francois text-[11px] font-bold text-red-600 mt-1 uppercase tracking-wider">
                Almas
              </span>

              {/* Handheld Love Letter Envelope traveling from Boy to Girl */}
              <motion.div
                style={{
                  x: miniEnvelopeX,
                  y: miniEnvelopeY,
                  willChange: "transform",
                }}
                className="absolute right-0 top-11 z-30 transform-gpu filter drop-shadow-md"
              >
                <svg viewBox="0 0 40 28" className="w-10 h-7 sm:w-11 sm:h-8">
                  {/* Envelope Body */}
                  <rect
                    x="1"
                    y="1"
                    width="38"
                    height="26"
                    rx="3"
                    fill="#ffffff"
                    stroke="#dc2626"
                    strokeWidth="2"
                  />
                  {/* Diagonal Folds */}
                  <line
                    x1="2"
                    y1="26"
                    x2="15"
                    y2="14"
                    stroke="#fca5a5"
                    strokeWidth="1.5"
                  />
                  <line
                    x1="38"
                    y1="26"
                    x2="25"
                    y2="14"
                    stroke="#fca5a5"
                    strokeWidth="1.5"
                  />
                  {/* Triangular Top Flap Fold */}
                  <polygon
                    points="2,2 20,16 38,2"
                    fill="#fff5f5"
                    stroke="#dc2626"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  {/* Red Heart Wax Seal */}
                  <path
                    d="M 20 18 C 20 18 16 14.5 16 12.5 C 16 11 17.5 9.8 19 11 L 20 12 L 21 11 C 22.5 9.8 24 11 24 12.5 C 24 14.5 20 18 20 18 Z"
                    fill="#dc2626"
                  />
                </svg>
              </motion.div>
            </motion.div>

            {/* Girl Stickman (Septiana) */}
            <motion.div
              style={{
                x: girlX,
                willChange: "transform",
              }}
              className="relative flex flex-col items-center transform-gpu"
            >
              <svg viewBox="0 0 100 140" className="w-24 h-32 sm:w-28 sm:h-36">
                {/* Hijab silhouette */}
                <path
                  d="M 30 28 Q 50 8 70 28 Q 78 50 50 56 Q 22 50 30 28 Z"
                  fill="#fee2e2"
                  stroke="#dc2626"
                  strokeWidth="3.5"
                />
                {/* Face */}
                <circle
                  cx="50"
                  cy="32"
                  r="14"
                  fill="#ffffff"
                  stroke="#dc2626"
                  strokeWidth="2"
                />
                {/* Happy closed eyes & smile */}
                <path
                  d="M 42 29 Q 45 26 48 29"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M 52 29 Q 55 26 58 29"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M 44 36 Q 50 41 56 36"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* Blush cheeks */}
                <circle cx="41" cy="33" r="3" fill="#fca5a5" />
                <circle cx="59" cy="33" r="3" fill="#fca5a5" />
                {/* Body / Dress */}
                <path
                  d="M 50 56 L 34 94 L 66 94 Z"
                  fill="#fee2e2"
                  stroke="#dc2626"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
                {/* Legs */}
                <line
                  x1="44"
                  y1="94"
                  x2="44"
                  y2="124"
                  stroke="#dc2626"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <line
                  x1="56"
                  y1="94"
                  x2="56"
                  y2="124"
                  stroke="#dc2626"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                {/* Arms reaching to receive */}
                <path
                  d="M 45 68 Q 30 72 18 70"
                  fill="none"
                  stroke="#dc2626"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-francois text-[11px] font-bold text-red-600 mt-1 uppercase tracking-wider">
                Septiana
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* SCENE 3 & 4: BIG ENVELOPE & LETTER UNFOLDING (Scroll 0.44+)    */}
        {/* ============================================================== */}
        <motion.div
          style={{
            opacity: bigEnvelopeOpacity,
            scale: bigEnvelopeScale,
            y: bigEnvelopeY,
            willChange: "transform, opacity",
          }}
          className="relative w-full max-w-4xl flex flex-col items-center justify-center z-30 transform-gpu"
        >
          {/* Floating Left Polaroid (Rembang) */}
          <motion.div
            style={{
              x: leftPolaroidX,
              y: leftPolaroidY,
              opacity: polaroidOpacity,
              willChange: "transform, opacity",
            }}
            className="hidden md:block absolute -left-8 lg:-left-20 top-4 w-44 lg:w-48 bg-white p-3 pb-5 rounded-sm shadow-2xl z-20 border border-red-200 pointer-events-none transform-gpu -rotate-6"
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-4 h-8 rounded-full border-2 border-amber-600/75" />
            <div className="aspect-[4/5] overflow-hidden bg-red-50">
              <img
                src={Momen4}
                alt="Rembang Memory"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-francois text-[11px] font-bold text-red-600 text-center mt-2.5 tracking-wider">
              REMBANG • 2023
            </p>
          </motion.div>

          {/* Floating Right Polaroid (Karanganyar) */}
          <motion.div
            style={{
              x: rightPolaroidX,
              y: rightPolaroidY,
              opacity: polaroidOpacity,
              willChange: "transform, opacity",
            }}
            className="hidden md:block absolute -right-8 lg:-right-20 top-8 w-44 lg:w-48 bg-white p-3 pb-5 rounded-sm shadow-2xl z-20 border border-red-200 pointer-events-none transform-gpu rotate-6"
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-4 h-8 rounded-full border-2 border-amber-600/75" />
            <div className="aspect-[4/5] overflow-hidden bg-red-50">
              <img
                src={Momen2}
                alt="Karanganyar Memory"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-francois text-[11px] font-bold text-red-600 text-center mt-2.5 tracking-wider">
              KARANGANYAR • 2026
            </p>
          </motion.div>

          {/* The Unfolding Letter Structure */}
          <div className="relative w-full max-w-lg flex flex-col items-center justify-center">
            {/* The Actual Letter (Lifting up and expanding safely below title) */}
            <motion.div
              style={{
                y: letterY,
                scale: letterScale,
                opacity: letterOpacity,
                willChange: "transform, opacity",
              }}
              className="w-full bg-[#fffcf7] border-2 border-amber-200/80 rounded-2xl p-5 sm:p-7 shadow-2xl text-left font-serif z-40 transform-gpu"
            >
              <div className="flex justify-between items-center border-b border-amber-200 pb-2 mb-3">
                <span className="text-red-600 font-sans font-semibold text-[11px] sm:text-xs tracking-wider uppercase">
                  7 November 2023 — 2026
                </span>
                <span className="text-red-400 font-sans text-xs">
                  Rembang & Karanganyar
                </span>
              </div>

              <p className="text-red-700 font-bold text-base sm:text-lg mb-2 font-serif">
                Untuk Septiana tercinta,
              </p>

              <div className="space-y-2 text-neutral-800 text-xs sm:text-sm leading-relaxed">
                <p>
                  Tiga tahun mungkin hanya deretan angka bagi dunia, tapi bagi
                  kita, setiap detiknya adalah ribuan tawa, ratusan doa, dan
                  sejuta mimpi yang kita rajut bersama tanpa lelah.
                </p>
                <p>
                  Terima kasih telah menemani perjalananku. Dari awal hingga
                  setiap malam saat dunia terasa bising dan senyummu menjadi
                  satu-satunya tempat pulang yang paling tenang.
                </p>
                <p>
                  Tidak ada yang lebih indah selain tumbuh dan belajar mencintai
                  kamu lebih dalam setiap harinya. Selamat anniversary yang
                  ke-3, sayang.
                </p>
              </div>

              <div className="mt-3.5 pt-2 border-t border-amber-200 flex justify-between items-end">
                <p className="text-red-600 text-xs italic">
                  With endless love,
                </p>
                <p className="font-francois font-bold text-sm sm:text-base text-red-600 tracking-wide">
                  Almas
                </p>
              </div>
            </motion.div>

            {/* Vintage Envelope Base */}
            <div className="relative -mt-16 w-full max-w-lg bg-[#fae8dc] border-2 border-amber-200 rounded-2xl p-4 sm:p-5 shadow-xl flex flex-col items-center z-30">
              {/* Wax Seal "A & S" with scroll-driven pop/fade */}
              <motion.div
                style={{
                  opacity: sealOpacity,
                  scale: sealScale,
                  y: sealY,
                  willChange: "transform, opacity",
                }}
                className="absolute -top-7 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-600 text-white shadow-xl border-4 border-amber-100 flex items-center justify-center z-50 transform-gpu"
              >
                <div className="flex flex-col items-center">
                  <span className="font-francois font-bold text-xs tracking-wider">
                    A & S
                  </span>
                  <FaHeart className="w-2 h-2 text-red-200" />
                </div>
              </motion.div>

              {/* Envelope Flap 3D Fold */}
              <motion.div
                style={{
                  rotateX: flapRotateX,
                  transformOrigin: "top center",
                  willChange: "transform",
                }}
                className="absolute -top-1 left-0 right-0 h-10 bg-[#f5d9c7] border-t-2 border-amber-200/90 rounded-t-2xl z-20 transform-gpu"
              />

              <div className="pt-3 text-center">
                <p className="text-red-800/80 font-francois text-[10px] sm:text-[11px] uppercase tracking-widest">
                  SEALED WITH LOVE • 2023 - 2026
                </p>
              </div>
            </div>

            {/* CTA Button to Greeting Page */}
            <motion.div
              style={{
                opacity: ctaOpacity,
                y: ctaY,
                willChange: "transform, opacity",
              }}
              className="mt-6 z-50 transform-gpu"
            >
              <Link
                to="/greeting"
                className="inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-700 text-white font-francois text-xs sm:text-sm tracking-wider uppercase px-6 py-3 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <span>Buka Greeting Page</span>
                <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Sunset Poetic Narrative Header (Scroll 0.85 -> 1.0) */}
        <motion.div
          style={{
            opacity: sunsetTitleOpacity,
            y: sunsetTitleY,
            willChange: "transform, opacity",
          }}
          className="container max-w-2xl text-center absolute top-[25%] sm:top-[28%] left-1/2 -translate-x-1/2 z-25 pointer-events-none transform-gpu px-4"
        >
          <div className="inline-flex items-center gap-2 bg-amber-950/40 backdrop-blur-xs border border-amber-400/30 px-3.5 py-1 rounded-full mb-3">
            <span className="font-francois text-amber-300 text-[11px] sm:text-xs tracking-widest uppercase">
              SENJA BERSAMAMU • DUSK TO NIGHT
            </span>
            <FaHeart className="w-2.5 h-2.5 text-amber-400" />
          </div>
          <h3 className="font-anton text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
            SAAT MATAHARI TERBENAM
          </h3>
          <p className="font-serif italic text-amber-100/90 text-xs sm:text-sm md:text-base mt-2.5 max-w-lg mx-auto drop-shadow-md">
            "Setiap senja mengingatkanku betapa hangatnya cintamu. Dan saat malam tiba, doa kita melayang menjadi bintang..."
          </p>
        </motion.div>



        {/* Happy Stickman Couple Holding Hands at Bottom (Letter Scene) */}
        <motion.div
          style={{
            opacity: coupleBottomOpacity,
            willChange: "opacity",
          }}
          className="absolute bottom-4 left-6 sm:left-10 hidden sm:flex items-center gap-2 pointer-events-none z-40 transform-gpu"
        >
          <div className="flex items-center gap-1 bg-white/70 backdrop-blur-xs px-3 py-1.5 rounded-full border border-red-200 shadow-sm">
            <span className="text-[11px] font-francois text-red-600 font-bold">
              Almas & Septiana
            </span>
            <FaHeart className="w-3 h-3 text-red-500 animate-pulse" />
          </div>
        </motion.div>

        {/* Scroll Prompt Hint (Initial scroll) */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-6 flex flex-col items-center gap-1 text-red-500 font-francois text-[10px] tracking-widest uppercase pointer-events-none"
        >
          <span>Scroll down to start story</span>
          <FaChevronDown className="w-3 h-3 animate-bounce" />
        </motion.div>
      </div>
    </div>
  );
};

export default LetterSection;
