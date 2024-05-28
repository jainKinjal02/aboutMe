'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components';

const Painter = () => {
  const [activeImage, setActiveImage] = useState(0);
  const chefImages = [
    '/paint1.jpeg', '/paint2.jpeg','/painter.jpg', '/paint3.jpeg', 
  ];

  const updateImage = (index) => {
    setActiveImage(index);
  };

  return (
    <section className={`${styles.paddings} relative z-10`} id='paint'>
      <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{once: false, amount: 0.25}}
          className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}>

            <motion.div
                variants={fadeIn('right', 'tween', 0.2, 1)}
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
              variants={fadeIn('left', 'tween', 0.3, 1)}
              className='flex-[0.75] flex justify-center flex-col'
            >
              <TypingText title="Artisitic Creations"/>
              <TitleText title={<>From Palette to Canvas</>} />
              <div className='mt-[31px] flex flex-col max-w-[450px] gap-[24px] text-secondary-white'>
              <p>My creative process is a delicate ballet of intuition and technique. It begins with a vision, a fleeting emotion, a captivating landscape, or a burst of inspiration from the mundane.</p>
              <p>
              As I mix colors, the palette becomes a vibrant playground of possibilities. Each canvas invites me to leave my mark, a lasting impression of moments felt deeply and lived fully.
              </p>
              <p>
              Art has the unique power to move people, transcending barriers of language and culture. Through my paintings, I strive to evoke emotions and provoke thought, inviting viewers into a shared experience of discovery and interpretation.
              </p>
              </div>
            </motion.div>

      </motion.div>
    </section>
  );
};

export default Painter;
