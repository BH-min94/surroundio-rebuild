import Head from "next/head";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Head>
        <title>Surroundio | About</title>
      </Head>
      <div className="bg-black pt-44 pb-10 lg:px-24 px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <h1 className="text-white lg:text-6xl text-xl mt-8">About Us</h1>
          <p className="text-gray-400 lg:text-2xl text-xs ">
            Company Introduction
          </p>
          <div className="flex lg:flex-row flex-col lg:space-x-16 mt-8">
            <div className="grid grid-cols-2 items-center gap-6 ">
              <motion.img
                whileHover={{ y: -10 }}
                className="rounded-md"
                src="https://surroundio.org/wp-content/uploads/2022/07/about-section-img1-e1658228370988.jpg"
              />
              <motion.img
                whileHover={{ y: -10 }}
                className="rounded-md"
                src="https://surroundio.org/wp-content/uploads/2022/07/about-section-img3.png"
              />
              <motion.img
                whileHover={{ y: -10 }}
                className="col-span-2 mx-auto rounded-md lg:block hidden"
                src="https://surroundio.org/wp-content/uploads/2022/07/about-section-img2.jpg"
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-white my-auto"
            >
              <h1 className="lg:text-4xl text-2xl lg:mt-0 mt-8">Company Introduction</h1>
              <p className="lg:text-lg text-xs lg:mt-6 mt-2">
                Leveraging Shutterstock`s content delivery technology, <br />
                Surroundio combines a variety of sophisticated sound
                technologies
                <br /> with top-notch music sources to deliver superior user
                experiences.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
