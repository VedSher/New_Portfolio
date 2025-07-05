import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
// import profile from './profile';
// import "./hero.scss";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] pt-[90px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Vaidik</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I'm a Software Developer my expertise is to create and design <br className='sm:block hidden' />
          a website using Frontend , Backend, database management tools and many more.. 
          </p>

          <div className='w-full flex'>
        <motion.p
          // variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[37px] max-w-5xl leading-[50px]'
        >
          find me on
          <div class="social-media" className="flex gap-[400px] mt-[150px]">
                <a href="https://www.linkedin.com/in/vaidik-shreshth/" className="text-[100px]"><i class="fa-brands fa-linkedin"></i></a>
                {/* <a href=""><i class="fa-brands fa-facebook"></i></a> */}
                <a href="https://x.com/vaidikshreshth_" className="text-[100px]"><i class="fa-brands fa-x-twitter"></i></a>
                
                <a href="https://github.com/vedsher" className="text-[100px]"><i class="fa-brands fa-github"></i></a>
            </div>

         </motion.p>
       
        </div>

        
        </div>
      </div>



      {/* <div className="hero">
        <div className="imagecontainer">
          <img src="/hero.png" alt="" />
        </div>

      </div> */}
      <profile />

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;