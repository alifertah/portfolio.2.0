import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [heroLoading, setHeroLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        const heroTimer = setTimeout(()=>{
            setHeroLoading(false)
        }, 3000)

        return () => {
            clearTimeout(timer)
            clearTimeout(heroTimer)
        };
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="flex items-center justify-center h-screen bg-white">
                    <div className="w-16 h-16 border-2 border-transparent border-t-gray-800 border-r-gray-800 rounded-full animate-spin"></div>
                </div>
            ) : (
                <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="relative overflow-hidden h-screen bg-gradient-hero flex justify-center w-full"
                >
                    <motion.img
                        src="/img/noise.webp"
                        alt="Background Noise"
                        className="absolute bottom-0 left-0 w-full h-auto z-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    />

                    {!heroLoading && <HeroSection />}
                </motion.div>
            )}
        </>
    );
};

export default HomePage;
