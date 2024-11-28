import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import AnimatedText from '@/components/AnimatedText'
import { PythonIcon, HtmlIcon, CssIcon, JavascriptIcon } from './Icons';

const Skills = () => {
  // Define progress values
  const htmlProgress = 80; // Example value for HTML skill progress
  const cssProgress = 75;  // Example value for CSS skill progress
  const JavaScriptProgress = 90;

  const [htmlWidth, setHtmlWidth] = useState(0);
  const [cssWidth, setCssWidth] = useState(0);
  const [JavaScriptWidth, setJavaScriptWidth] = useState(0);

  // Ref for the section to monitor if it's in view
  const skillsRef = React.useRef(null);
  const isInView = useInView(skillsRef, { once: true });

  // Trigger the animation when component is in view
  useEffect(() => {
    if (isInView) {
      setHtmlWidth(htmlProgress);
      setCssWidth(cssProgress);
      setJavaScriptWidth(JavaScriptProgress);
    }
  }, [isInView, htmlProgress, cssProgress, JavaScriptProgress]);

  return (
    <>
      <AnimatedText text="Skills " className='mb-10 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 pt-20'/>
      <section ref={skillsRef} className="flex flex-wrap justify-center w-full mt-2">
        {/* FrontEnd Skills */}
        <div className="w-full sm:max-w-xs md:max-w-md lg:max-w-lg p-6 m-4 bg-light dark:bg-dark border-2 border-dark 
        dark:border-light
        rounded-2xl">
          <h1 className="text-4xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 underline-offset-4 decoration-4">
            FrontEnd Skills
          </h1>
    
          <div className="space-y-6">
            {/* HTML Progress Bar */}
            <div className="flex items-center space-x-4">
              <motion.a
                href="https://x.com/YOGESH_RAJ_S"
                target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-1 text-2xl sm:text-3xl"
              >
                <HtmlIcon />
              </motion.a>
              <div className="w-full">
                <div className="flex justify-between font-bold">
                  <span>HTML</span>
                  <span className="text-sm text-dark  dark:text-light">{htmlWidth}%</span>
                </div>
                <div className="relative h-2 rounded  bg-light border border-black dark:border-light mt-1 overflow-hidden">
                  <motion.div
                    className="absolute h-2 rounded bg-primary  dark:bg-primaryDark"
                    initial={{ width: 0 }}
                    animate={{ width: `${htmlWidth}%` }}
                    transition={{ duration: 2.5, ease: 'easeInOut' }}
                  ></motion.div>
                </div>
              </div>
            </div>

            {/* CSS Progress Bar */}
            <div className="flex items-center space-x-4">
              <motion.a
                href="https://x.com/YOGESH_RAJ_S"
                target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-1 text-2xl sm:text-3xl"
              >
                <CssIcon />
              </motion.a>
              <div className="w-full">
                <div className="flex justify-between font-bold">
                  <span>CSS</span>
                  <span className="text-sm text-dark  dark:text-light">{cssWidth}%</span>
                </div>
                <div className="relative h-2 rounded  bg-light border dark:border-light border-black mt-1 overflow-hidden">
                  <motion.div
                    className="absolute h-2 rounded bg-primary  dark:bg-primaryDark"
                    initial={{ width: 0 }}
                    animate={{ width: `${cssWidth}%` }}
                    transition={{ duration: 2.5, ease: 'easeInOut' }}
                  ></motion.div>
                </div>
              </div>
            </div>

            {/* JavaScript Progress Bar */}
            <div className="flex items-center space-x-4">
              <motion.a
                href="https://x.com/YOGESH_RAJ_S"
                target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-1 text-2xl sm:text-3xl"
              >
                <JavascriptIcon />
              </motion.a>
              <div className="w-full">
                <div className="flex justify-between font-bold">
                  <span>JAVASCRIPT</span>
                  <span className="text-sm text-dark  dark:text-light">{JavaScriptWidth}%</span>
                </div>
                <div className="relative h-2 rounded bg-light border dark:border-light border-black mt-1 overflow-hidden">
                  <motion.div
                    className="absolute h-2 rounded bg-primary dark:bg-primaryDark"
                    initial={{ width: 0 }}
                    animate={{ width: `${JavaScriptWidth}%` }}
                    transition={{ duration: 2.5, ease: 'easeInOut' }}
                  ></motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Skills;
