'use client'; // to use a cleint component we add this directive
// this is front end app we need to use react , hooks etc so thsi is cleint component

import {motion} from 'framer-motion';
import styles from '../styles';
import {navVariants} from '../utils/motion';

const Navbar = () => (
  <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8 relative`}>
    <div className='absolute w-[50%] inset-0  gradient-01'/>
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <div></div>
        <h2 className='font-extrabold text-[24px] leading-[30px] text-white'>WeLCoME  To</h2>
        <div></div>
      </div>
  </motion.nav>
);

export default Navbar;
