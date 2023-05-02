import Head from "next/head";
import { motion } from "framer-motion";
import { terms } from "@/components/Terms";
import Link from "next/link";

export default function Login() {
    return (
        <>
            <Head>
                <title>Surroundio | Sign Up</title>
            </Head>
            <div className="bg-black pt-44 pb-10 lg:px-24 px-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.3 }}
                >
                    <h1 className="text-white lg:text-6xl text-3xl mt-16 text-center">Sign Up</h1>
                    <div className="mt-16">
                        <motion.div
                            initial={{ opacity: 0, }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="mt-14 lg:w-[50rem] mx-auto flex flex-col lg:px-32 gap-5 text-white"
                        >
                            <input type="email" placeholder="Email"
                                className="px-10 lg:py-5 py-3 focus:outline-none focus:bg-[rgba(100,100,100,0.4)] rounded-md bg-[rgba(50,50,50,0.4)] transition lg:text-lg" />
                            <input type="password" placeholder="Password"
                                className="px-10 lg:py-5 py-3 focus:outline-none focus:bg-[rgba(100,100,100,0.4)] rounded-md bg-[rgba(50,50,50,0.4)] transition lg:text-lg" />
                            <input type="password" placeholder="Confirm Password"
                                className="px-10 lg:py-5 py-3 focus:outline-none focus:bg-[rgba(100,100,100,0.4)] rounded-md bg-[rgba(50,50,50,0.4)] transition lg:text-lg" />
                            <button className="px-10 lg:py-5 py-3 bg-[#59c6f8] focus:outline-none rounded-md transition hover:bg-blue-400 text-lg">
                                Sign Up
                            </button>
                            <div className="relative mt-8">
                                <div className="absolute w-full border-t border-gray-500" />
                                <div className="relative -top-3 text-center ">
                                    <span className="bg-black px-5 text-sm text-gray-500">
                                        Go back to
                                        <Link href="/login" className="ml-3 hover:text-white transition font-semibold text-base">
                                            Login
                                        </Link>
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </>
    );
}
