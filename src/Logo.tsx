import React, { useState } from 'react';
import { Circle, Flex, Fade, Heading } from '@chakra-ui/react';
import { ReactComponent as IconSVG } from './Araneo.svg';
import './App.css';

const Logo = React.forwardRef<HTMLDivElement>((props, ref) => {
   return (
      <Circle
         size='22em'
         borderColor='white'
         borderWidth='1px'
         borderRadius='50%'
         direction='column'
         ref={ref}
         className='hover'
      >
         <Flex direction='column' align='center' justify='center'>
            <IconSVG fill='white' />
            <Heading color='white' fontFamily='serif'>
               Mahmoud Nafiseh
            </Heading>
         </Flex>
      </Circle>
   );
});

export default Logo;
