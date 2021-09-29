import {
  Container,
  Input,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useBreakpointValue,
} from '@chakra-ui/react';

import React from 'react';

export default function Price() {
  const tableSize = useBreakpointValue({ base: 'sm', md: 'md' });

  const [price, setPrice] = React.useState(0);

  const handlePrice = (e) => {
    console.log(typeof e.target.value);
    if (Number(e.target.value) === 0) {
      setPrice(0);
    } else if (Number(e.target.value) <= 20000) {
      setPrice(Number(e.target.value) + 250);
    } else if (Number(e.target.value) <= 50000) {
      setPrice(Number(e.target.value) + 350);
    } else if (Number(e.target.value) <= 80000) {
      setPrice(Number(e.target.value) + 450);
    } else if (Number(e.target.value) <= 100000) {
      setPrice(Number(e.target.value) + 600);
    } else if (Number(e.target.value) <= 150000) {
      setPrice(Number(e.target.value) + 800);
    } else if (Number(e.target.value) <= 200000) {
      setPrice(Number(e.target.value) + 1100);
    }
  };
  return (
    <Container maxW={'5xl'}>
      <SimpleGrid columns={2} columnGap={6} rowGap={3}>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <Input onChange={handlePrice} type="number" placeholder="المبلغ"></Input>
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 1 }}>
          <Text fontSize={{ base: 'lg', md: '4xl' }} fontWeight="bold" color="green.500">
            المبلغ المستحق {price} دج
          </Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Heading size="md"> جدول الأسعار بالنسبة ل ccp</Heading>
        </GridItem>
        <GridItem colSpan={2}>
          <Table size={tableSize} shadow="md" bg="white" variant="striped" colorScheme="gray">
            <Thead>
              <Tr>
                <Th>المجال</Th>
                <Th>عمولتنا</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>من 1 دج الى 20000 دج</Td>
                <Td isNumeric> 250 دج </Td>
              </Tr>
              <Tr>
                <Td>من 20000 دج الى 50000 دج</Td>
                <Td isNumeric>350 دج</Td>
              </Tr>
              <Tr>
                <Td>من 50000 دج الى 80000 دج</Td>
                <Td isNumeric>450 دج</Td>
              </Tr>
              <Tr>
                <Td>من 80000 دج الى 100000 دج</Td>
                <Td isNumeric>600 دج</Td>
              </Tr>
              <Tr>
                <Td>من 100000 دج الى 150000 دج</Td>
                <Td isNumeric>800 دج</Td>
              </Tr>
              <Tr>
                <Td>من 150000 دج الى 200000 دج</Td>
                <Td isNumeric>1100 دج</Td>
              </Tr>
            </Tbody>
          </Table>
        </GridItem>
      </SimpleGrid>
    </Container>
  );
}
