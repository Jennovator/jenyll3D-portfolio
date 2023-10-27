import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../style';
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const words = ["Jenyll", "Designer", "Developer", "Gamer"];
  const [name, setName] = useState(0); // Initial content of the span element

  // useEffect to change the name every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the next index, wrapping around to 0 when reaching the end of the array
      const nextIndex = (name + 1) % words.length;
      setName(nextIndex); // Update the state with the next index
    }, 1500); // 2000 milliseconds = 5 seconds

    // Clear interval on component unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, [name]); // // Re-run the effect whenever the name changes

  // Determine if the viewport width is less than or equal to 510 pixels
  const isMobile = window.innerWidth <= 510;

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl
      mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`text-white ${styles.heroHeadText}`}>
            Hi, I'm {isMobile && <br />}
            <span className={`text-[#915eff]`}>
              {words[name]}
            </span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br /> interfaces and web applications
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className={`${isMobile ? `${styles.scrollMainAboutMobile}` : `${styles.scrollMainAboutPC}`} cursor-pointer`}>
        <a href="#about">
          <div className={`${isMobile ? `${styles.scrollAboutMobile}` : `${styles.scrollAboutPC}`}`}>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1 cursor-pointer"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero;