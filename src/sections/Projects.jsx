import { motion } from "framer-motion"
import { FaArrowRightLong } from "react-icons/fa6"
// import project1 from '../assets/project1.png'
// import project2 from '../assets/project2.png'

const Projects = () => {
  return (
    <div className='w-full lg:px-[200px] px-8 py-[60px] h-full flex flex-col justify-between items-center gap-5'>
      <motion.h1 
      initial={{opacity: 1 , scale:0}}
      whileInView={{opacity:1, scale:1}}
      transition={{type:"spring", stiffness:20,delay:0.6}}
      className='text-4xl uppercase text-white font-poppins font-semibold'>Projects</motion.h1>
      <motion.div 
      initial={{opacity: 1 , scale:0}}
      whileInView={{opacity:1, scale:1}}
      transition={{type:"spring", stiffness:20,delay:0.6}}
      className='bg-themeRed h-[3px] w-20'>
      </motion.div>
      <motion.p
      initial={{opacity: 1 , scale:0}}
      whileInView={{opacity:1, scale:1}}
      transition={{type:"spring", stiffness:20,delay:0.4}}
      className='text-gray-300  text-lg text-center lg:w-[70%] w-full font-poppins'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, ducimus.
      </motion.p>
      <div className='w-full flex lg:flex-row flex-col justify-between items-center gap-20 mt-20'>
        <div className="lg-[40%] w-full flex flex-col justify-center items-start gap-6">
          <div className="flex flex-col justify-center items-start gap-4">
            <motion.h1 
             initial={{opacity: 1 , scale:0}}
             whileInView={{opacity:1, scale:1}}
             transition={{type:"spring", stiffness:20,delay:0.6}}
             className='text-white font-semibold text-[32px] leading-10 '>Ecommerce Mobile App Development</motion.h1>
             <motion.p 
             initial={{opacity: 1 , scale:0}}
             whileInView={{opacity:1, scale:1}}
             transition={{type:"spring", stiffness:20,delay:1}}
             className='text-gray-300  text-[17px] font-poppins'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A explicabo delectus nihil culpa excepturi labore.
             </motion.p>
          </div>
          <button className='text-themeRed hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2'>See Details <span><FaArrowRightLong/></span></button>
        </div>
      </div>
    </div>
  )
}

export default Projects