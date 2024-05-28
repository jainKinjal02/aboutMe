'use client';
import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';

const Traveler = () => (
  <section className={`${styles.paddings} relative z-10`} id='travel'>
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
              <h4 className='font-bold sm:text-[32px] text-[26px] sm:leading-[40px]
               leading-[36px] text-white'>
                Kinjal
              </h4>
              <p className='mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white'>
                Traveler | Wanderer
              </p>
            </div>
            <p className='mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white'>
            Traveling is not just about seeing new places, it’s about experiencing them. Each destination offers its own unique blend of sights, sounds, and flavors, and I dive in with all senses eager for the feast.
            </p>
        </motion.div>
  <motion.div
      variants={fadeIn('left', 'tween',0.2,1)}
      className='relative flex-1 flex justify-center items-center'
    >
      <img src='/travel1.jpg' alt="planet" className='w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]'
       />

       <motion.div
        variants={zoomIn(0.4,1)}
        className='lg:block hidden absolute -left-[10%] top-[3%]'
       >
          <img src='/passport.jpg' alt='stamp'
          className='w-[155px] h-[155px] object-cover rounded-full'
          />
       </motion.div>
       </motion.div>
    </motion.div>
    <motion.div  
       variants={fadeIn('left', 'tween',0.2,1)}
      className='relative flex flex-wrap justify-center items-center gap-10 p-4'
    >
    <img src='/travelPhoto1.jpeg' alt='travel' className='w-[300px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 object-cover rounded-lg mt-10' />
    <img src='/travelPhoto2.jpeg' alt='travel' className='w-[300px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 object-cover rounded-lg mt-10' />
    <img src='/travelPhoto3.jpeg' alt='travel' className='w-[300px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 object-cover rounded-lg mt-10' />
    <img src='/travelPhoto4.jpeg' alt='travel' className='w-[300px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 object-cover rounded-lg mt-10' />

  </motion.div>
  </section>
);

export default Traveler;
