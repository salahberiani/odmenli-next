import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';

export default function Property(props) {
  const { label, value, ...flexProps } = props;
  return (
    <Flex
      as="dl"
      direction={{
        base: 'column',
        sm: 'row',
      }}
      px="6"
      py="4"
      _even={{
        bg: useColorModeValue('gray.50', 'gray.600'),
      }}
      {...flexProps}
    >
      <Box as="dt" flex="1" minWidth="180px">
        {label}
      </Box>
      <Box as="dd" flex="1.5" fontWeight="semibold">
        {value}
      </Box>
    </Flex>
  );
}
