import {motion} from 'framer-motion';
import {fadeIn} from '../utils/motion';

import {styles} from '../styles';
import {MoonCanvas} from './canvas';
import {StarsCanvas} from '../components';
import {useMobileCheck} from '../utils/isMobileCheck';
import MoonPlanet from './mobile-gif/Planet';

const Hero = () => {
  const isMobile = useMobileCheck();

  return (
    <section className="relative w-full h-screen mx-auto flex justify-center">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex items-start gap-5`}
      >
        <motion.div
          variants={fadeIn('', '', 0.2, 5)}
          initial="hidden"
          whileInView="show"
        >
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className="text-[#4b158a]">Diego</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Frontend
            <span className="text-[#5f158a]"> |</span> Developer
          </p>
        </motion.div>
      </div>
      {isMobile ? (
        <div className="self-center mt-[120px]">
          <MoonPlanet />
        </div>
      ) : (
        <>
          <MoonCanvas />
          <StarsCanvas />
        </>
      )}

      <div className="absolute max-[400px]:top-[93%] bottom-[60px] w-full flex justify-center items-center">
        <a href="#about">
          {isMobile ? (
            ''
          ) : (
            <div className="w-[35px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
            </div>
          )}
        </a>
      </div>
    </section>
  );
};

export default Hero;
