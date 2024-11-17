// pages/index.tsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

const sections = [HeroSection, AboutSection];

const HomePage = () => {
    const [currentSection, setCurrentSection] = useState(0);

    const handleScroll = (e: WheelEvent) => {
        if (e.deltaY > 0) {
            setCurrentSection((prev) =>
                prev < sections.length - 1 ? prev + 1 : prev
            );
        } else {
            setCurrentSection((prev) => (prev > 0 ? prev - 1 : prev));
        }
    };

    useEffect(() => {
        window.addEventListener("wheel", handleScroll);

        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, []);

    const CurrentComponent = sections[currentSection];

    return (
        <div className="relative overflow-hidden h-screen">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSection}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-0 left-0 w-full h-full"
                >
                    <CurrentComponent />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default HomePage;
