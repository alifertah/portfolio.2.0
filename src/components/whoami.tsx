import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LeftoToRight = ({ children } : any) => (
  <motion.div
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.2 }}
  >
    {children}
  </motion.div>
);

export default function Whoami() {
  const [text, setText] = useState('');

  useEffect(() => {
    const paragraph = `I am web developer student, I am also an aspiring 
    programmer and have been programming for over 4 years. I can quickly learn new languages
    and frameworks, but focus mainly on Javascript.
    I love to build things, fix things, and solve problems. I enjoy it most when I'm working on a problem that 
    will make someone's life better or easier. Sure, sometimes it doesn't work out, but the journey is always fun!`;

    let index = 0;
    const interval = setInterval(() => {
      setText(paragraph.substring(0, index));
      index++;
      if (index > paragraph.length) {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <LeftoToRight>
      <div className="w-full flex justify-center items-center">
          <h1 className="text-center text-6xl font-extrabold mb-5 absolute top-40 ">
            Hello, this is Ali!
          </h1>
        <div className="w-[50%]">
          <p>{text}</p>
        </div>
      </div>
    </LeftoToRight>
  );
}
