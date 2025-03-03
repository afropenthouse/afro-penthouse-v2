"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdArrowOutward } from "react-icons/md";

const HomeHero = () => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      text: "From start to finish, the team at Afro Penthouse was professional, responsive, and truly dedicated to bringing our ideas to life, exceeding our expectations.",
      author: "GRACIE BEN",
      company: "Primus Startups"
    },
   
    {
      id: 3,
      text: "Working with this team was seamless. They understood our complex requirements and delivered a solution that not only met but exceeded our technical specifications.",
      author: "SARAH JOHNSON",
      company: "Elevate Systems"
    },
    {
      id: 4,
      text: "Our efficiency has increased by 40% since implementing their IT solutions. Their ongoing support and quick response times make them a valuable partner.",
      author: "DAVID RODRIGUEZ",
      company: "Momentum Enterprises"
    },
    {
        id: 2,
        text: "The digital solutions provided by the team transformed our operations. Their attention to detail and innovative approach has given us a competitive edge in the market.",
        author: "MICHAEL CHEN",
        company: "Nexus Technologies"
      }
  ];

  // State to track current testimonial
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Navigation functions
  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Current testimonial
  const currentTestimonial = testimonials[currentIndex];

  // Variants for animations
  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: 0.2, 
        ease: "easeOut" 
      }
    }
  };

  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.4
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.95 
    }
  };

  const testimonialVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    })
  };

  const navButtonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, backgroundColor: "#000", color: "#fff" },
    tap: { scale: 0.95 }
  };

  return (
    <div className="flex flex-col md:flex-row w-full text-white">
      {/* Left Section (Text Content) */}
      <motion.div 
        className="w-full md:w-1/2 p-8 md:p-8 lg:p-8 flex flex-col justify-center bg-black h-[80vh]"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { 
              when: "beforeChildren",
              staggerChildren: 0.2
            }
          }
        }}
      >
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6"
          variants={headingVariants}
        >
          Cutting edge <motion.span 
            className="inline-block w-16 h-0.5 bg-white ml-3 align-middle"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          ></motion.span>
          <br />
          digital IT solutions
        </motion.h1>
        
        <motion.p 
          className="text-base md:text-lg mb-8"
          variants={paragraphVariants}
        >
          Enabling life-changing, cutting-edge IT solutions to propel your
          organization's success. Our solutions are designed to make life
          easier, more efficient, and more productive.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          variants={buttonContainerVariants}
        >
          <motion.button 
            className="bg-white text-black py-3 px-6 rounded-full flex items-center justify-center font-medium"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Get In Touch <motion.span 
              className="ml-2"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            ><MdArrowOutward /></motion.span>
          </motion.button>
          <motion.button 
            className="border border-white text-white py-3 px-6 rounded-full flex items-center justify-center font-medium"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.span 
              className="mr-2"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0, -5, 0] 
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                repeatDelay: 3 
              }}
            >🎧</motion.span> Talk to our team
          </motion.button>
        </motion.div>
      </motion.div>
      
      {/* Right Section (Image and Testimonial) */}
      <motion.div 
        className="w-full md:w-1/2 relative h-[90vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img 
          src="/homehero.jpeg" 
          alt="Team working together" 
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        
        {/* Testimonial Card */}
        <div className="absolute bottom-12 left-8 right-8 bg-white text-black p-6 rounded-md overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={testimonialVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full"
            >
              <motion.p 
                className="text-sm mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {currentTestimonial.text}
              </motion.p>
              
              <motion.div 
                className="flex justify-between items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div>
                  <motion.p 
                    className="font-bold"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {currentTestimonial.author}
                  </motion.p>
                  <motion.p 
                    className="text-sm"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {currentTestimonial.company}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex gap-2 justify-end mt-2">
            <motion.button 
              className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center"
              onClick={goToPrevious}
              aria-label="Previous testimonial"
              variants={navButtonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              ←
            </motion.button>
            <motion.button 
              className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center"
              onClick={goToNext}
              aria-label="Next testimonial"
              variants={navButtonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              →
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeHero;