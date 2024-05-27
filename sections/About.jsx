'use client';

import {motion} from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import {fadeIn, staggerContainer} from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0' />
  <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{once: false, amount: 0.25}}
            className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
              <TypingText title="| About Me" textStyles="text-center"/>

              <motion.p
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
              >
                <span className="font-extrabold text-white">Welcome to My World! Dive into my passions and explore what I love doing when I am not behind the desk.</span><br/>
                Hi, I am Kinjal!  When I am not working, I am a chef in my kitchen, an painter in my studio, a photographer and a wanderer in the great outdoors who loves to dance. This page is a little  
                <span className="font-extrabold text-white"> window into the things that make me, me!</span> 
              </motion.p>

              <motion.img
                variants={fadeIn('up', 'tween', 0.3, 1)}
                src="/arrow-down.svg"
                alt="arrow down"
                className="w-[18px] h-[28px] object-contain mt-[28px]"
               />
  </motion.div>
  </section>
);

export default About;
