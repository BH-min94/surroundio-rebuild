import Navbar from "@/components/layout";
import { motion } from "framer-motion";
import Head from "next/head";

interface ISteps {
  name: string;
  text: string;
  photo: string;
}

const steps: ISteps[] = [
  {
    name: "ANALYZE",
    text: "Touch the sound mode in the list of options on the left or place the mouse on it.",
    photo: "https://wallpapercave.com/wp/wp2955247.jpg"
  },
  {
    name: "MASTER",
    text: "Listen to them and click on your favorite sound mode. If you want to search more, enter your preferred genre or mood in the Search box.",
    photo: "https://c4.wallpaperflare.com/wallpaper/108/140/869/digital-digital-art-artwork-fantasy-art-drawing-hd-wallpaper-thumb.jpg"
  },
  {
    name: "LISTEN",
    text: "Click Save and you're done!!! Your sound has already changed and saved in the cloud to share it with others.",
    photo: "https://t3.ftcdn.net/jpg/05/29/37/22/360_F_529372232_2Z75XLUgwHQQmtsgeWwGdpdCx4inCPbP.jpg"
  },
  {
    name: "SELECT",
    text: "Select the second category and enter your preferred genre or mood to use the Shutterstock music library.",
    photo: "https://www.pixelstalk.net/wp-content/uploads/2016/06/Wallpaper-1920x1080-Download.jpg"
  }
];

export default function Home() {
  const goEditor = () => {
    location.href = "https://surroundio.org/wp-login.php";
  };
  return (
    <>
      <Head>
        <title>Surroundio | Home</title>
      </Head>
      <Navbar />
      <div className="bg-black pt-44 pb-44 lg:px-24 px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <h1 className="text-white lg:text-6xl text-xl">
            Ultra-quality lossless <br /> born out of extreme simplicity.
          </h1>
          <p className="text-white lg:text-2xl text-xs">
            Upgrade and add dignity to your content with professional and
            stylish <br />
            Wound work for a price of a cup of coffee for a whole month.
          </p>
          <div className="flex justify-center items-center lg:my-24 my-16">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="border border-white lg:text-lg text-sm outline-offset-[2rem] transition-all outline-[#59c6f8] text-white rounded-full aspect-square lg:p-9 p-5 hover:outline hover:border-[#59c6f8] hover:text-[#59c6f8] lg:hover:text-xl hover:text-lg"
              onClick={goEditor}
            >
              Get Start
            </motion.button>
          </div>
        </motion.div>
        {steps.map((data, number) => (
          <div key={number} className="text-white lg:mt-72 mt-20 flex lg:items-start lg:space-x-7 lg:space-y-0 lg:flex-row flex-col space-y-3">
          <div className="lg:w-1/3 w-full">
            <h1 className="lg:text-4xl text-xl">{data.name}</h1>
            <p className="lg:text-lg text-xs">{data.text}</p>
          </div>
          <div className="lg:w-2/3 w-full">
            <motion.img src={data.photo} whileHover={{y: -15}} className="w-full rounded-lg"/>
          </div>
        </div>
        ))}
        
      </div>
    </>
  );
}
