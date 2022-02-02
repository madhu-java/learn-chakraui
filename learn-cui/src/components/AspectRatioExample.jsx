import { AspectRatio } from '@chakra-ui/react';
import React from 'react';
import comicpic from '../images/comic.png'

export const AspectRatioExample = () => {
  return (
      
      <AspectRatio ratio={16/9}>
         
          <iframe 
          width="560"
          height='100'
          //  {/* <img src={comicpic} alt="comicpic"  width='100px' height='100px'/> }
          src='https://www.youtube.com/watch?v=JaYYfmQKb9k'
            title="selling products on Amazon"
            frameborder = '0'
            allow = "accelerometer; autoplay; clipboard-white;encrypted-media;gyroscope;picture-in-pitcture"
            allowFullScreen
> </iframe>

      </AspectRatio>
  )
};
