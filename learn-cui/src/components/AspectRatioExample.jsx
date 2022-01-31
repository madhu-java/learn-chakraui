import { AspectRatio } from '@chakra-ui/react';
import React from 'react';
import comicpic from '../images/comic.png'

export const AspectRatioExample = () => {
  return <div>
      <AspectRatio>
          <img src={comicpic} alt="comicpic" />
      </AspectRatio>
  </div>;
};
