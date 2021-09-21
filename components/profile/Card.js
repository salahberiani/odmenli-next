import { Box, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';

export default function Card(props) {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.700')}
      rounded={{
        md: 'lg',
      }}
      shadow="base"
      overflow="hidden"
      {...props}
    />
  );
}
