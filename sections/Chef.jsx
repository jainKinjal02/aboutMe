'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const Chef = () => {
  const [activeImage, setActiveImage] = useState(0);
  const chefImages = [
    '/chef1.jpg', '/chef2.jpg', '/chef3.jpg', '/chef4.jpg', '/chef5.jpg'
  ];

  const updateImage = (index) => {
    setActiveImage(index);
  };

  return (
    <section className={`${styles.paddings} relative z-10`} id='chef'>
      <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{once: false, amount: 0.25}}
          className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}>

            <motion.div
                variants={fadeIn('left', 'tween', 0.2, 1)}
                className='flex-1 flex flex-col items-center justify-center gap-4'
                >
                  <div className='flex gap-2'>
                    {chefImages.map((img, index) => (
                      <motion.img 
                        key={img}
                        src={img}
                        alt={`Dish ${index + 1}`}
                        className={`w-20 h-20 object-cover rounded-full cursor-pointer ${activeImage === index ? 'ring-4 ring-white' : ''}`}
                        onClick={() => updateImage(index)}
                        whileHover={{ scale: 1.1 }}
                      />
                    ))}
                  </div>
                  <motion.img 
                    src={chefImages[activeImage]}
                    alt="Selected Dish"
                    className='w-[70%] h-[70%] object-cover mt-4 rounded-lg shadow-lg'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
            </motion.div>
            <motion.div
              variants={fadeIn('right', 'tween', 0.3, 1)}
              className='flex-[0.75] flex justify-center flex-col'
            >
              <TypingText title="Culinary Creations"/>
              <TitleText title={<>A Peek into My Kitchen</>} />
              <div className='mt-[31px] flex flex-col max-w-[450px] gap-[24px] text-secondary-white'>
              <p>I love cooking and am a true foodie at heart. My culinary adventures are a blend of exploring diverse cuisines and reveling in the familiar comforts of home-cooked meals. While the bold and intricate flavors of Italian cuisine often find their way into my kitchen, it’s the vibrant and hearty Indian dishes that really speak to the soul of my heritage.</p>
              <p>
                Love clicking aesthetic pictures of delicious dishes? So do I! There’s an art to capturing the perfect angle that makes a dish look as tantalizing as it tastes. My gallery isn't just a collection of food photography—it's a window into the processes and final results of my kitchen experiments.
              </p>
              <p>
                My kitchen is my studio, where ingredients come together in a symphony of flavors. I take joy in the entire process—selecting fresh ingredients, pairing the right herbs and spices, and watching as raw components transform into something magical.
              </p>
              <p>
                Stay tuned as I continue to explore the endless culinary landscape, from the traditional to the contemporary, and everything in between. Let's cook, eat, and celebrate the diverse world of food together!
              </p>
              </div>
            </motion.div>

      </motion.div>
    </section>
  );
};

export default Chef;
