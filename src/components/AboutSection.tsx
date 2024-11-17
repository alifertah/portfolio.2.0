import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <motion.div
            className="h-screen flex items-center justify-center bg-blue-500 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <h1 className="text-4xl font-bold">Welcome to My about section</h1>
        </motion.div>
    );
};

export default HeroSection;
