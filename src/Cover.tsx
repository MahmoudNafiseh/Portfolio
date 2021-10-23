import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { Fade } from '@chakra-ui/transition';

const MotionLogo = motion(Logo);

const Cover = React.forwardRef<HTMLDivElement>((props, ref) => {
   const variants = {
      visible: { opacity: 1, transition: { delay: 0.4, duration: 0.8 } },
      hidden: { opacity: 0 },
   };
   const [fadeOut, setFadeOut] = useState(true);
   return (
      <Flex
         bg='#1c1f24'
         height='100vh'
         w='100%'
         alignItems='center'
         justify='center'
         direction='column'
         ref={ref}
         overflowX='hidden'
         overflowY='hidden'
      >
         <Fade in={fadeOut} unmountOnExit={true}>
            <MotionLogo
               key='3'
               initial='hidden'
               animate='visible'
               variants={variants}
               exit={{ opacity: 0 }}
               onTap={() => setFadeOut(false)}
            />
         </Fade>
      </Flex>
   );
});

export default Cover;
