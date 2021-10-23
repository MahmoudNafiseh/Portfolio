import React, { useState } from 'react';
import { Flex, Box, Heading } from '@chakra-ui/react';
import CoverAnimated from './CoverAnimated';
import Menu from './Menu';

const App = () => {
   const [isActive, setActive] = useState(true);
   const handleActive = () => {
      setActive(false);
   };
   return (
      <Flex onClick={() => setInterval(handleActive, 1200)}>
         <CoverAnimated />
         <Box
            position='absolute'
            w='100%'
            justifyContent='end'
            display='flex'
            zIndex={isActive ? '-1' : '0'}
         >
            <Menu />
         </Box>
      </Flex>
   );
};
export default App;
