import React from 'react';
import { Circle, Flex } from '@chakra-ui/react';
import { ReactComponent as IconSVG } from './MN3.svg';
import './App.css';

const Logo = React.forwardRef<HTMLDivElement>((props, ref) => {
   return (
      <Circle
         size={{ xl: '40em', lg: '30em', md: '25em', sm: '20em', base: '20em' }}
         borderColor='white'
         borderWidth='1px'
         borderRadius='50%'
         direction='column'
         ref={ref}
         className='hover'
      >
         <Flex direction='column' align='center' justify='center'>
            <IconSVG transform='scale(0.9)' className='svg' />
         </Flex>

         <Circle
            size={{
               xl: '40em',
               lg: '30em',
               md: '25em',
               sm: '20em',
               base: '20em',
            }}
            borderColor='white'
            borderWidth='1px'
            borderRadius='50%'
            direction='column'
            ref={ref}
            className='border'
         ></Circle>
      </Circle>
   );
});

export default Logo;
