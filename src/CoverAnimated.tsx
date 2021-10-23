import React, { useState, memo } from 'react';
import { Flex, Circle } from '@chakra-ui/react';
import Cover from './Cover';
import { motion, AnimatePresence, useCycle } from 'framer-motion';

const CoverAnimated = () => {
   const MotionComponent = memo(motion(Cover));
   const [delayVar, setDelayVar] = useState(10000);
   const [displayed, setDisplayed] = useState(true);
   const handleDisplayed = () => {
      setDisplayed(!displayed);
   };
   const handleTap = () => {
      setDelayVar(0);
      setInterval(handleDisplayed, 700);
   };
   console.log('render');
   return (
      <Flex
         justifyContent='center'
         alignItems='center'
         w='full'
         height='full'
         overflowX='hidden'
         margin='0'
         display={displayed ? 'block' : 'none'}
      >
         <AnimatePresence>
            <MotionComponent
               key='2'
               animate={{ y: '-100%' }}
               transition={{
                  type: 'tween',
                  delay: delayVar,
                  duration: 0.5,
                  ease: [0.49, 0.04, 0.99, 0.56],
               }}
               onTap={() => setInterval(handleTap, 300)}
               exit={{ opacity: 0 }}
            />
         </AnimatePresence>
      </Flex>
   );
};
export default CoverAnimated;
