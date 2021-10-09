import React from 'react';
import { Box } from '@chakra-ui/react';
import Table from 'components/dashboard/table';
import Init from 'components/dashboard/init';
import CcpInfo from 'components/dashboard/ccpInfo';

export default function TableExample(props) {
  return (
    <Box px={{ base: '5%', md: '10%' }} pb="5%" mb="100px" maxW="100vw">
      <CcpInfo></CcpInfo>

      <Table></Table>
    </Box>
  );
}
