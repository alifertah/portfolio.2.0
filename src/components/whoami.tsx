import Image from "next/image";
import { motion } from 'framer-motion'

const LeftoToRight = ({ children }) =>(
  <motion.div
    initial={{x:-100, opacity:0}}
    animate={{x:0, opacity:1}}
    transition={{duration:.2}}
  >
{children}
  </motion.div>
)



export default function Whoami() {
  return (
    <LeftoToRight>

    <div className="w-full flex justify-center items-center">
      <div className="w-[50%]">
        <h1 className="text-center text-6xl font-extrabold mb-5">
          Hello, this is Ali!
        </h1>
        <p>
          As a passionate computer science student and aspiring programmer with
          over 4 years of experience, I have a knack for quickly picking up new
          languages and frameworks, although I primarily focus on Javascript. In
          addition, I'm a keen cyber security enthusiast, constantly learning
          and exploring new ways to protect digital assets. I have a true love
          for creating and fixing things, and finding solutions to complex
          problems. What truly drives me is the satisfaction of knowing that my
          work has the potential to positively impact someone's life or make a
          task easier for them. Admittedly, not every project goes as planned,
          but the thrill of the process always keeps me going!
        </p>
      </div>
    </div>
    </LeftoToRight>
  );
}
