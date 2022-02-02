import { Box } from '@chakra-ui/react';
import React from 'react';

export const BoxExample = () => {
  const getABox=(as,color,bg)=>{
return(
  <Box as={as} color={color} bg={bg} p={2} borderRadius={3}>
    Hello
  </Box>
)
  }
  return (
      <>
      <Box 
      height="400px"
    maxW='400px'
    bgColor="purple.400"
    color="pink"
    border="3px solid blue">

      </Box>
      <Box
      as="h2"
      color="Blue" fontSize='18px'>
          This is h2

      </Box>
      {getABox('button','red.400', 'yellow.400')}
      {getABox('button','purple.400', 'pink.400')}
      {getABox('button','green.400', 'orange.400')}
      </>
  )
};
