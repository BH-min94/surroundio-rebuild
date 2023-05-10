import { useRouter } from "next/router";
import { cls } from "./utils";
import { motion, useAnimation, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";


const navVarient = {
  top: {
    backgroundColor: "rgba(0,0,0,0)",
  },
  scroll: {
    backgroundColor: "rgba(80, 208, 255, 0.9)",
  },
};

const ScrollUp = {
  top: {
    opacity: "0",
  },
  scroll: {
    opacity: "1",
  },
};

export default function NavigationBar() {
  const router = useRouter();
  const { scrollY } = useScroll();
  const navAnimation = useAnimation();
  const buttonAnimation = useAnimation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start("scroll");
        buttonAnimation.start("scroll");
      } else {
        navAnimation.start("top");
        buttonAnimation.start("top");
      }
    });
  }, [scrollY, navAnimation, buttonAnimation]);
  return (
    <>
      <div>
        <motion.nav
          variants={navVarient}
          animate={navAnimation}
          transition={{ duration: 0.1 }}
          initial={"top"}
          className="fixed top-0 w-full flex lg:justify-between lg:flex-row flex-col items-center xl:px-24 lg:px-24 px-16 py-5 z-50"
        >
          <Link href="/">
            <motion.img
              whileHover={{scale: 1.1}}
              src="https://surroundio.org/wp-content/uploads/2023/05/surround_logo.png"
              className="lg:w-64 lg:mb-0 w-52 mb-6"
            />
          </Link>
          <div className="flex justify-between lg:text-lg text-sm items-center text-white lg:space-x-10 space-x-8">
            <Link
              href="/price"
              className={cls(
                "flex flex-col items-center space-y-2 ",
                router.pathname === "/price"
                  ? "text-blue-400"
                  : "hover:text-blue-400 transition-colors"
              )}
            >
              <span>Pricing</span>
            </Link>
            <Link
              href="/login"
              className={cls(
                "flex flex-col items-center space-y-2 ",
                router.pathname === "/login"
                  ? "text-blue-400"
                  : "hover:text-blue-400 transition-colors"
              )}
            >
              <span>Login</span>
            </Link>
            <Link
              href="/signup"
              className={cls(
                "flex flex-col items-center space-y-2 ",
                router.pathname === "/signup"
                  ? "text-blue-400"
                  : "hover:text-blue-400 transition-colors"
              )}
            >
              <span>Sign Up</span>
            </Link>
          </div>
        </motion.nav>
      </div>
      <motion.button
        onClick={scrollToTop}
        variants={ScrollUp}
        initial={{opacity: 0}}
        animate={buttonAnimation}
        transition={{ duration: 0.1 }}
        className="fixed bottom-4 right-4 text-white bg-[#59c6f8] p-3 rounded-md hover:bg-blue-400 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="white"
          className="lg:w-6 lg:h-6 w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </motion.button>
    </>
  );
}
