import hero from '../assets/hero.png'
import design from '../assets/design.png'
import { motion } from 'framer-motion'


const Hero = () => {
  return (
    <div 
      id="hero" 
      className=" w-full lg:px-[200px] px-8 lg:pb-[80px] pb-5 lg:pt-[150px] pt-[120px]  h-full flex lg:flex-row flex-col justify-between items-center gap-[100px] "
      >
      <div className='lg:w-3/5 w-full flex flex-col justify-center items-start gap-8'>
        <h1 className='text-themeRed lg:text-3xl text-xl font-semibold font-poppins' >
          Hi, I am Petrucci L. Carvalho 
        </h1>   
        <motion.h1 
        initial={{opacity: 1 , scale:0}}
        whileInView={{opacity:1, scale:1}}
        transition={{type:"spring", stiffness:20,delay:0.2}}
        className='text-white text-5xl font-semibold font-poppins'>
          Front End and Mobile App Develooper
        </motion.h1> 

        <motion.p
          initial={{opacity: 1 , scale:0}}
          whileInView={{opacity:1, scale:1}}
          transition={{type:"spring", stiffness:20,delay:0.4}}
          className='text-gray-300 lg:text-xl text-lg font-poppins'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum recusandae ipsam molestiae. Quidem magnam doloremque aperiam ullam dolore eligendi aliquid ducimus excepturi...
        </motion.p>

        <motion.button 
         onClick={() => alert('feature')}
         initial={{opacity: 1 , scale:0}}
         whileInView={{opacity:1, scale:1}}
         transition={{type:"spring", stiffness:20,delay:0.6}}
         className='bg-themeRed hover:bg-white text-white hover:text-themeRed font-semibold text-lg px-8 py-3 rounded-lg mt-5 font-poppins'>
          Contact Me
        </motion.button>        
      </div>
      <motion.div 
      initial={{opacity: 1 , scale:0}}
      whileInView={{opacity:1, scale:1}}
      transition={{type:"spring", stiffness:20,delay:0.6}}
      className='lg:w-2/5 w-full relative'>
        <div 
        className='  bg-[#2f2f2f] lg:w-[500px] w-full h--full lg:h-[500px] h-[400px] rounded-lg  top-[30px] -left-[30px] absolute ' ></div>
            <img 
            src={hero} 
            alt="hero image" 
            className=' relative lg:w-[520px]  w-full lg:h-[500px] h-[400px] rounded-lg z-20 '/>
            <img 
            src={design} 
            alt="desing" 
            className='absolute -top-7 -right-5 rounded-lg z-10' />        
      </motion.div>         
    </div>
  )
}

export default Hero