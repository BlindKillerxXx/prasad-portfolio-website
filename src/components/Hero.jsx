import { motion } from 'framer-motion'
// import 'D:/Prasad/3d_Portfolio/src/App.css'
import '../../src/App.css'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import CanvasLoader from "./Loader";
import { profileImage } from "../constants";


import DownloadButton from './DownloadButton';
import { Suspense } from 'react';

const Hero = () => {
  return (

    <section className='relative w-full h-screen mx-auto'>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-12`}>
        <div className='flex flex-col justify-center items-center mt-7 mr-10'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="teal-text">Prasad</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 sm:max-w-[70%]`}>
            I'm, a passionate web developer and programmer.

            I specialize in HTML, CSS, Javascript, AEM, React.js, Node.js.<br /> I'm always exploring new ways to push the boundaries of what's possible on the web.
            When I'm not immersed in lines of code, you can find me exploring the latest trends in web development or tinkering with emerging technologies. <br /> Let's build something amazing together!
            Excited to be part of the ever-evolving tech landscape!
          </p>

          <DownloadButton />
        </div>

        <div className={`profilePos object-cover object-top hidden sm:block  absolute -z-[1]`}>
          <img className='' src={profileImage.img} alt="" />

        </div>
      </div>
      {/* <DownloadButton />   */}
      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full justify-center items-center hidden sm:flex'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 20, 0],
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
      </div>
    </section>

  )
}

export default Hero