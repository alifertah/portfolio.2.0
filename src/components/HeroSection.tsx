// components/sections/HeroSection.tsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const HeroSection = () => {

    const [dots, setDots] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    useEffect(() => {
        // Interval to update dots
        const dotsInterval = setInterval(() => {
            setDots((prev) => (prev.length < 3 ? prev + "." : ""));
        }, 500);

        // Timeout to show the full message
        const messageTimeout = setTimeout(() => {
            clearInterval(dotsInterval);
            setDots(""); // Clear dots when showing the message
            setShowMessage(true);
        }, 3000);

        return () => {
            clearInterval(dotsInterval);
            clearTimeout(messageTimeout);
        };
    }, []);
    return (
        <motion.div
            className="h-screen flex items-center bg-gradient-hero text-grayLight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="container mx-auto flex flex-col justify-between md:flex-row items-center px-6 md:px-12 space-y-10 md:space-y-0 md:space-x-12">
                {/* Image Section */}
                <motion.div
                    className="md:w-1/2 mb-8 md:mb-0"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src="/img/hero.svg"
                        alt="Hero"
                        className="w-full rounded-lg shadow-xl"
                    />
                </motion.div>

                {/* Text Section */}
                <motion.div
                    className="md:w-1/2 text-center md:text-left"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {!showMessage ? (
                <h1 className="text-2xl font-bold">
                    Initializing<span>{dots}</span>
                </h1>
            ) : (
                <>
                <h1 className="text-3xl font-bold ">
                    🤖 Ali Fertah is now online. <br />
                </h1>
                    <p className="text-lg md:text-xl mb-6 text-gray-400">
                        I am a passionate developer specializing in modern web technologies, creating engaging user experiences, and building impactful digital solutions.
                    </p>
                    <a
                        href="#contact"
                        className="px-6 py-3 bg-accent hover:bg-indigo-600 text-white font-semibold rounded-lg shadow-lg transition duration-300"
                        >
                        Contact Me
                    </a>
                        </>
            )}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default HeroSection;
