import React from 'react';
import { Box } from '@chakra-ui/react';
import Table from 'components/dashboard/table';
import Init from 'components/dashboard/init';

export default function TableExample(props) {
  return (
    <Box px="10%" py="5%" maxW="100vw">
      {/* <Init></Init> */}
      <Table></Table>
    </Box>
  );
}
