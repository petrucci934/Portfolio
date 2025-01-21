import { HiBadgeCheck } from "react-icons/hi"
// import { BsFillInboxFill } from "react-icons/bs"
import { FaArrowRightLong } from "react-icons/fa6"
import { motion } from "framer-motion"
import { IoMdArrowDroprightCircle } from "react-icons/io"

const Pricing = () => {
  return (
    <div className='w-full lg:px-[200px] px-8 py-[40px] h-full flex flex-col justify-between items-center gap-5 '>
      <motion.h1 
       initial={{opacity: 1 , scale:0}}
       whileInView={{opacity:1, scale:1}}
       transition={{type:"spring", stiffness:20,delay:0.4}}
       className="text-4xl uppercase text-white font-poppins font-semibold">
        Pricing
       </motion.h1>
       
      <motion.div 
        initial={{opacity: 1 , scale:0}}
        whileInView={{opacity:1, scale:1}}
        transition={{type:"spring", stiffness:20,delay:0.6}}
        className='bg-themeRed h-[3px] w-20'>
      </motion.div>

      <motion.p 
       initial={{opacity: 1 , scale:0}}
       whileInView={{opacity:1, scale:1}}
       transition={{type:"spring", stiffness:20,delay:0.9}}
       className="text-gray-300 text-lg text-center font-poppins lg:w-[70%] w-full"
        >   Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam porro sequi, reprehenderit   unde quas ipsum eaque voluptates enim quaerat autem?
      </motion.p>
      <div className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-8 mt-8'>
        <motion.div 
        initial={{opacity: 1 , scale:0}}
        whileInView={{opacity:1, scale:1}}
        transition={{type:"spring", stiffness:20,delay:0.6}}
        className='w-full flex flex-col justify-center items-center gap-6 border-2 border-gray-700 hover:border-themeRed px-6 py-8 rounded-lg' >
            <h1 className='text-white font-semibold text-[24px] font-poppins'>Silver</h1>
            <div 
              className='bg-themeRed rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110'><HiBadgeCheck className='text-white size-9'/>
            </div>

          <h1 className='text-white font-semibold text-5xl font-poppins'>$34</h1>
          <ul className='w-full flex flex-col justify-center items-center gap-2 text-white'>
            <li className='flex justify-center items-center gap-2 text-[15px] font-poppins'>
              <span><IoMdArrowDroprightCircle className='size-7'/></span>Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className='flex justify-center items-center gap-2 text-[15px] font-poppins'>
              <span><IoMdArrowDroprightCircle className='size-7'/></span>Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className='flex justify-center items-center gap-2 text-[15px] font-poppins'>
              <span><IoMdArrowDroprightCircle className='size-7'/></span>Lorem ipsum dolor sit amet consectetur.
            </li>
          </ul>
          <button className="text-white font-semibold border-2 mt-5 hover:bg-themeRed border-white hover:border-themeRed rounded-lg px-8 py-2 text-[15px] font-poppins flex justify-center items-center gap-2">Select Plan <span><FaArrowRightLong className="text-white"/></span></button>
        </motion.div>
        <motion.div 
        initial={{opacity: 1 , scale:0}}
        whileInView={{opacity:1, scale:1}}
        transition={{type:"spring", stiffness:20,delay:0.6}}
        className='bg-gray-700 w-full flex flex-col justify-center items-center gap-6 border-2 border-gray-700 hover:border-themeRed px-6 py-8 rounded-lg' >
            <h1 className='text-white font-semibold text-[24px] font-poppins'>Gold</h1>
            <div 
              className='bg-themeRed rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110'><HiBadgeCheck className='text-white size-9'/>
            </div>

          <h1 className='text-white font-semibold text-5xl font-poppins'>$45</h1>
          <ul className='w-full flex flex-col justify-center items-center gap-2 text-white'>
            <li className='flex justify-center items-center gap-2 text-[15px] font-poppins'>
              <span><IoMdArrowDroprightCircle className='size-7'/></span>Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className='flex justify-center items-center gap-2 text-[15px] font-poppins'>
              <span><IoMdArrowDroprightCircle className='size-7'/></span>Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className='flex justify-center items-center gap-2 text-[15px] font-poppins'>
              <span><IoMdArrowDroprightCircle className='size-7'/></span>Lorem ipsum dolor sit amet consectetur.
            </li>
          </ul>
          <button className="text-white font-semibold border-2 mt-5 hover:bg-themeRed border-white hover:border-themeRed rounded-lg px-8 py-2 text-[15px] font-poppins flex justify-center items-center gap-2">Select Plan <span><FaArrowRightLong className="text-white"/></span></button>
        </motion.div>
        <motion.div 
        initial={{opacity: 1 , scale:0}}
        whileInView={{opacity:1, scale:1}}
        transition={{type:"spring", stiffness:20,delay:0.6}}
        className='w-full flex flex-col justify-center items-center gap-6 border-2 border-gray-700 hover:border-themeRed px-6 py-8 rounded-lg' >
            <h1 className='text-white font-semibold text-[24px] font-poppins'>Platinum</h1>
            <div 
              className='bg-themeRed rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110'><HiBadgeCheck className='text-white size-9'/>
            </div>

          <h1 className='text-white font-semibold text-5xl font-poppins'>$34</h1>
          <ul className='w-full flex flex-col justify-center items-center gap-2 text-white'>
            <li className='flex justify-center items-center gap-2 text-[15px] font-poppins'>
              <span><IoMdArrowDroprightCircle className='size-7'/></span>Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className='flex justify-center items-center gap-2 text-[15px] font-poppins'>
              <span><IoMdArrowDroprightCircle className='size-7'/></span>Lorem ipsum dolor sit amet consectetur.
            </li>
            <li className='flex justify-center items-center gap-2 text-[15px] font-poppins'>
              <span><IoMdArrowDroprightCircle className='size-7'/></span>Lorem ipsum dolor sit amet consectetur.
            </li>
          </ul>
          <button className="text-white font-semibold border-2 mt-5 hover:bg-themeRed border-white hover:border-themeRed rounded-lg px-8 py-2 text-[15px] font-poppins flex justify-center items-center gap-2">Select Plan <span><FaArrowRightLong className="text-white"/></span></button>
        </motion.div>
      </div>
    </div>
  )
}

export default Pricing