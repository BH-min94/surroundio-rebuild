import { useRouter } from "next/router";
import { cls } from "./utils";
import { motion, useAnimation, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

const navVar = {
  top: {
    backgroundColor: "rgba(0,0,0,0)",
  },
  scroll: {
    backgroundColor: "rgba(80, 208, 255, 1)",
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

export default function Layout() {
  const router = useRouter();
  const { scrollY } = useScroll();
  const navAnimation = useAnimation();
  const buttonAnimation = useAnimation();
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start("scroll");
        buttonAnimation.start("scroll")
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
          variants={navVar}
          animate={navAnimation}
          transition={{ duration: 0.1 }}
          initial={"top"}
          className="fixed top-0 w-full flex lg:justify-between lg:flex-row flex-col items-center xl:px-24 lg:px-24 px-16 py-5 z-50"
        >
          <Link href="/">
            <img
              src="https://surroundio.org/wp-content/uploads/2022/09/surround_logo.svg"
              className="lg:w-64 lg:mb-0 w-52 mb-6"
            />
          </Link>
          <div className="flex justify-between lg:text-lg text-sm items-center text-white lg:space-x-10 space-x-8">
            <Link
              href="/"
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
              href="/community"
              className={cls(
                "flex flex-col items-center space-y-2 ",
                router.pathname === "/community"
                  ? "text-blue-400"
                  : "hover:text-blue-400 transition-colors"
              )}
            >
              <span>Login</span>
            </Link>
            <Link
              href="/chats"
              className={cls(
                "flex flex-col items-center space-y-2 ",
                router.pathname === "/chats"
                  ? "text-blue-400"
                  : "hover:text-blue-400 transition-colors"
              )}
            >
              <span>Sign Up</span>
            </Link>
          </div>
        </motion.nav>
        {router.pathname === "/" ? (
          <div className="bg-black h-[80rem] pt-44">
            <h1 className="text-white lg:text-6xl text-xl lg:px-24 px-16">
              Ultra-quality lossless <br /> born out of extreme simplicity.
            </h1>
            <p className="text-white lg:text-2xl text-xs lg:px-24 px-16">
              Upgrade and add dignity to your content with professional and
              stylish <br />
              Wound work for a price of a cup of coffee for a whole month.
            </p>
            <div className="flex justify-center items-center lg:my-24 my-16">
              <button className="border border-white lg:text-lg text-sm outline-offset-[2rem] transition-all outline-[#59c6f8] text-white rounded-full aspect-square lg:p-9 p-5 hover:outline hover:border-[#59c6f8] hover:text-[#59c6f8] lg:hover:text-xl hover:text-lg">
                Get Start
              </button>
            </div>
          </div>
        ) : null}
      </div>
      <motion.button 
      onClick={scrollToTop}
      variants={ScrollUp}
      animate={buttonAnimation}
      transition={{ duration: 0.1 }}
      className="fixed bottom-4 right-4 text-white bg-[#59c6f8] p-3 rounded-md hover:bg-blue-400 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
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
