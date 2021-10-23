import React, { useState, memo } from 'react';
import { Flex, Circle } from '@chakra-ui/react';
import Cover from './Cover';
import { motion } from 'framer-motion';
const App = () => {
   const MotionComponent = memo(motion(Cover));
   const [delayVar, setDelayVar] = useState(10000);
   const handleTap = () => {
      setDelayVar(0);
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
      >
         <MotionComponent
            key='1'
            animate={{ y: '-100%' }}
            transition={{
               type: 'tween',
               delay: delayVar,
               duration: 0.5,
               ease: [0.49, 0.04, 0.99, 0.56],
            }}
            onTap={() => setInterval(handleTap, 300)}
         />
      </Flex>
   );
};
export default App;
