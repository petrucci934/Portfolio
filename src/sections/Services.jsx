// import { FaSearchengin } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
// import { FaQuoteRight,FaQuoteLeft } from 'react-icons/fa'
import { MdOutlineDesignServices } from 'react-icons/md'
// import { IoLogoAndroid } from 'react-icons/io'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <div 
      className='w-full lg:px-[200px] px-8 lg:py-[100px] py-[40px] h-full flex lg:flex-row flex-col justify-between gap-[50px] '>
      <div className='lg:w-[40%] w-full flex flex-col justify-top items-start gap-6 '
        >
             <motion.h1 
              initial={{opacity: 1 , scale:0}}
              whileInView={{opacity:1, scale:1}}
              transition={{type:"spring", stiffness:20,delay:0.6}}
             className='text-4xl uppercase text-white font-poppins font-semibold  '>Services</motion.h1>
             <motion.div 
             initial={{opacity: 1 , scale:0}}
             whileInView={{opacity:1, scale:1}}
             transition={{type:"spring", stiffness:20,delay:0.6}}
             className='bg-themeRed h-[3px] w-20 '
             >
             </motion.div>
             <motion.p
              initial={{opacity: 1 , scale:0}}
              whileInView={{opacity:1, scale:1}}
              transition={{type:"spring", stiffness:20,delay:0.4}} 
              className='text-gray-300 text-lg font-poppins'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum sit ad nisi aperiam maiores.
              </motion.p>
      </div>
      <div className='lg:w-[60%] w-full grid lg:grid-cols-2 grid-cols-1 justify-start items-start  gap-12'>
        <motion.div 
         initial={{opacity: 1 , scale:0}}
         whileInView={{opacity:1, scale:1}}
         transition={{type:"spring", stiffness:20,delay:0.6}}
         className='flex flex-col justify-start items-start gap-6'>

          <div className='bg-themeRed rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110'>
            <MdOutlineDesignServices className='fill-white size-9'/>
          </div>
          
          <div className='flex flex-col justify-center items-start gap-3'>
            <h1 className='text-white font-semibold text-[26px]'>Branding</h1>
            <p className='text-gray-300 text-[17px] font-poppins'>Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
           <button 
           onClick={() => alert('feature')}
           className='text-themeRed hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2'>See Details <span><FaArrowRightLong/></span></button>
          </div>
        </motion.div> 

        <motion.div 
         initial={{opacity: 1 , scale:0}}
         whileInView={{opacity:1, scale:1}}
         transition={{type:"spring", stiffness:20,delay:0.6}}
         className='flex flex-col justify-start items-start gap-6'>

          <div className='bg-themeRed rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110'>
            <MdOutlineDesignServices className='fill-white size-9'/>
          </div>
          
          <div className='flex flex-col justify-center items-start gap-3'>
            <h1 className='text-white font-semibold text-[26px]'>Ui/UX design</h1>
            <p className='text-gray-300 text-[17px] font-poppins'>Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
           <button 
           onClick={() => alert('feature')}
           className='text-themeRed hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2'>See Details <span><FaArrowRightLong/></span></button>
          </div>
        </motion.div>
        <motion.div 
         initial={{opacity: 1 , scale:0}}
         whileInView={{opacity:1, scale:1}}
         transition={{type:"spring", stiffness:20,delay:0.6}}
         className='flex flex-col justify-start items-start gap-6'>

          <div className='bg-themeRed rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110'>
            <MdOutlineDesignServices className='fill-white size-9'/>
          </div>
          
          <div className='flex flex-col justify-center items-start gap-3'>
            <h1 className='text-white font-semibold text-[26px]'>Branding</h1>
            <p className='text-gray-300 text-[17px] font-poppins'>Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
           <button 
           onClick={() => alert('feature')}
           className='text-themeRed hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2'>See Details <span><FaArrowRightLong/></span></button>
          </div>
        </motion.div> 

        <motion.div 
         initial={{opacity: 1 , scale:0}}
         whileInView={{opacity:1, scale:1}}
         transition={{type:"spring", stiffness:20,delay:0.6}}
         className='flex flex-col justify-start items-start gap-6'>

          <div className='bg-themeRed rounded-full p-4 flex justify-center items-center transition-all duration-300 ease-in-out hover:scale-110'>
            <MdOutlineDesignServices className='fill-white size-9'/>
          </div>
          
          <div className='flex flex-col justify-center items-start gap-3'>
            <h1 className='text-white font-semibold text-[26px]'>Branding</h1>
            <p className='text-gray-300 text-[17px] font-poppins'>Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur.</p>
           <button 
           onClick={() => alert('feature')}
           className='text-themeRed hover:text-white text-[17px] font-poppins flex justify-center items-center gap-2'>See Details <span><FaArrowRightLong/></span></button>
          </div>
        </motion.div> 
      </div>      
    </div>
  )
}

export default Services