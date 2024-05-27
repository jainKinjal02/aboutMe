import { Footer, Navbar } from '../components';
import { About, Explore, Painter, Photographer, Hero, Dance, Traveler, Chef } from '../sections';

const Page = () => (
  <div className='bg-primary-black overflow-hidden'>
    <Navbar />
    <Hero />
    <div className='relative'>
    <About />
    <div className='gradient-03 z-0'/>
    <Explore />
    </div>
    <div className='relative'>
    <Chef />
    <div className='gradient-04 z-0'/>
    <Traveler />
    </div>
    <Photographer />
    <div className='relative'>
    <Painter />
    <div className='gradient-04 z-0'/>
    <Dance />
    </div>
    <Footer />
  </div>
);

export default Page;
