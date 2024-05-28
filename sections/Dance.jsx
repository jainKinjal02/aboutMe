'use client';
import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Dance = () => (
  <section className={`${styles.paddings} relative z-10`} id='dance'>
  <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
      >
        <motion.div
          variants={fadeIn('right','tween',0.2,1)}
          className='flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05
           sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative'
        >
            <div className='feedback-gradient'/>
            <div>
              <h4 className='font-bold sm:text-[30px] text-[24px] sm:leading-[38px]
               leading-[36px] text-white'>
                 Echoes of Motion
              </h4>
              <p className='mt-[6px] font-normal sm:text-[16px] text-[10px] sm:leading-[20px] leading-[14px] text-white'>
               Dancing Through Life
              </p>
            </div>
            <p className='mt-[24px] font-normal sm:text-[22px] text-[12px] sm:leading-[43px] leading-[39px] text-white'>
            Dance is the rhythm of my soul, a dynamic expression where every movement tells a story. It's a passionate embrace of music and motion, where I lose myself and find freedom in each step. Dance is not just an art, it's the pulse of life itself.
            </p>
        </motion.div>
  <motion.div
      variants={fadeIn('left', 'tween',0.2,1)}
      className='relative flex-1 flex justify-center items-center'
    >
      <img src='/dance1.jpg' alt="planet" className='w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]'
       />

       <motion.div
        variants={zoomIn(0.4,1)}
        className='lg:block hidden absolute -left-[10%] top-[3%]'
       >
          <img src='/dance2.jpg' alt='stamp'
          className='w-[155px] h-[155px] object-cover rounded-full'
          />
       </motion.div>
       </motion.div>
    </motion.div>
  </section>
);

export default Dance;
