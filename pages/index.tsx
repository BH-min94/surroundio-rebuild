import { motion } from "framer-motion";
import Head from "next/head";
import { Steps } from "../components/Steps";
import Professional from "@/components/Professional";

const banner: string =
  "https://images.squarespace-cdn.com/content/v1/54d696e5e4b05ca7b54cff5c/4feb4c05-6221-4b48-b80a-dbc1d7f32fb8/6+Tips+To+Speed+Up+Your+Music+Production+Workflow.jpg";

export default function Home() {
  const goEditor = () => {
    location.href = "https://app.surroundio.org/";
  };
  return (
    <>
      <Head>
        <title>Surroundio | Home</title>
      </Head>
      <div
        className="pt-44 pb-44 lg:px-24 px-16 bg-no-repeat bg-cover bg-fixed"
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1) ), url(${banner})`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <h1 className="text-white lg:text-6xl text-xl">
            Ultra-quality lossless <br /> born out of extreme simplicity.
          </h1>
          <p className="text-gray-400 lg:text-2xl text-xs">
            Upgrade and add dignity to your content with professional and
            stylish <br />
            Wound work for a price of a cup of coffee for a whole month.
          </p>
          <div className="flex justify-center items-center lg:my-24 my-16 relative">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute border top-2 border-white lg:text-lg text-sm outline-offset-[2rem] transition-all outline-[#59c6f8] text-white rounded-full aspect-square lg:p-9 p-5 hover:outline hover:bg-[rgba(0,0,0,0.5)] hover:border-[#59c6f8] hover:text-[#59c6f8] hover:scale-125"
              onClick={goEditor}
            >
              GET START
            </motion.button>
          </div>
        </motion.div>
      </div>
      <div className="bg-black pt-44 pb-44 lg:px-24 px-16">
        <Steps />
        <Professional />
        <div
        >
          <div className="flex justify-center items-center lg:my-24 my-16 relative">
            <button
              className="mt-16 absolute border top-2 border-white lg:text-lg text-sm outline-offset-[2rem] transition-all outline-[#59c6f8] text-white rounded-full aspect-square lg:p-9 p-5 hover:outline hover:bg-[rgba(0,0,0,0.5)] hover:border-[#59c6f8] hover:text-[#59c6f8] hover:scale-125"
              onClick={goEditor}
            >
              GET START
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
