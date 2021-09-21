import { Box, Heading, Stack, Text, Container, SimpleGrid, Flex } from '@chakra-ui/react';
export default function collabs() {
  return (
    <Box>
      <Stack spacing={0} align={'center'}>
        <Heading my="2">بعض الشركات التي تعمل معنا</Heading>
        <Text mb="16" fontSize="lg">
          شركات وضعت ثقتها في أضمنلي للتوسط في الصفقات المالية
        </Text>
      </Stack>
      <Container maxW={'6xl'} mt={16}>
        <SimpleGrid my="100px" columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <Flex justify="center">
            <Text>hqsjdqhjdhqj</Text>
          </Flex>
          <Flex justify="center">
            <Text>hqsjdqhjdhqj</Text>
          </Flex>
          <Flex justify="center">
            <Text>hqsjdqhjdhqj</Text>
          </Flex>
          <Flex justify="center">
            <Text>hqsjdqhjdhqj</Text>
          </Flex>
          <Flex justify="center">
            <Text>hqsjdqhjdhqj</Text>
          </Flex>
          <Flex justify="center">
            <Text>hqsjdqhjdhqj</Text>
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
