'use client';

import { useState } from 'react';
import {motion} from 'framer-motion';
import styles from '../styles';
import {staggerContainer} from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';
import { exploreWorlds } from '../constants';

const Explore = () => {
  const [active, setActive] = useState('travel');

  const handleClick = (id, currentActive) => {
    console.log('inside hadle click in exolore');
    console.log(id);
    if (active === id) {
      // If the card is already active and clicked again, navigate
      document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      setActive(id);
    }
  };

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TitleText title="Explore the Worlds" textStyles="text-center"/>
        <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={handleClick}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};


export default Explore;
