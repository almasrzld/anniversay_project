import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isGreetingPage = location.pathname === "/greeting";
  const textColor = isGreetingPage ? "text-white" : "text-red-600";
  const bgColor = isGreetingPage ? "#ffffff" : "#ff0000";
  const bgHoverColor = isGreetingPage ? "#ff0000" : "#ffffff";
  const borderHoverColor = isGreetingPage ? "#ffffff" : "#ff0000";

  const linkTo = isGreetingPage ? "/" : "/greeting";

  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999]">
      <div className="container py-5">
        <div className="flex justify-between items-center">
          <div
            className={`font-bold tracking-wide leading-10 text-center text-lg ${textColor}`}
          >
            A — S
          </div>
          <Link to={linkTo}>
            <motion.div
              className="w-4 h-4 rounded-full cursor-pointer"
              style={{ backgroundColor: bgColor }}
              whileHover={{
                scale: 1.5,
                backgroundColor: bgHoverColor,
                borderColor: borderHoverColor,
                borderWidth: "3px",
                transition: { duration: 0.3 },
              }}
            ></motion.div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
