import React from 'react';
import { Box } from '@chakra-ui/react';
import Table from 'components/dashboard/table';
import Init from 'components/dashboard/init';
import CcpInfo from 'components/dashboard/ccpInfo';

export default function TableExample(props) {
  return (
    <Box px="10%" py="5%" maxW="100vw">
      <CcpInfo></CcpInfo>
      {/* <Init></Init> */}
      <Table></Table>
    </Box>
  );
}
