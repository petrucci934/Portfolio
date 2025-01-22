import { motion } from "framer-motion"
import { reviews } from "../export"
import { FaQuoteLeft } from "react-icons/fa6"


const Testimonials = () => {
  return (
    <div 
    className='w-full lg:px-[200px] px-8 py-[60px] h-full flex flex-col justify-between items-center gap-5'>
      <motion.h1 
        className='text-4xl uppercase text-white font-poppins font-semibold'>
        Testimonials
      </motion.h1 >

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
        className='text-gray-300 text-lg font-poppins text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum sit ad nisi aperiam maiores.
      </motion.p>
      <div className='w-full grid lg:grid:cols-3 grid-cols-1 justify-between items-start gap-6 mt-10'>

        {reviews.map((item,index)=>(
          <motion.div
            initial={{opacity: 1 , scale:0}}
            whileInView={{opacity:1, scale:1}}
            transition={{type:"spring", stiffness:20,delay:0.6}} 
            key={index} 
            className='bg-[#2f2f2f] flex flex-col justify-center items-center gap-6 px-5 py-8 rounded-lg'>
              <FaQuoteLeft className='fill-themeRed size-10 transition-all duration-300 ease-in-out hover:scale-110'/>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials