import { motion } from 'framer-motion'
import 'D:/Prasad/3d_Portfolio/src/App.css'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { profileImage } from "../constants";


import DownloadButton from './DownloadButton';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 justify-between`}>
        <div className='flex flex-col justify-center items-center mt-7'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="teal-text">Prasad</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm, a passionate web developer and programmer.

            I specialize in HTML, CSS, Javascript, React.js, Node.js, etc. and <br /> I'm always exploring new ways to push the boundaries of what's possible on the web.
            When I'm not immersed in lines of code, you can find me exploring the latest trends in web development <br /> or tinkering with emerging technologies. Let's build something amazing together!
            Excited to be part of the ever-evolving tech landscape!
          </p>

          <DownloadButton />
        </div>

        <div className={`profilePos object-cover object-top hidden sm:block`}>
          <img className='' src={profileImage.img} alt="" />

        </div>
      </div>
      {/* <DownloadButton />   */}
      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
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