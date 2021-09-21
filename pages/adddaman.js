import React from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Grid,
  GridItem,
  Alert,
} from '@chakra-ui/react';

export default function adddaman() {
  return (
    <Grid px="10%" py="5%" templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)" gap={4}>
      <GridItem p="8" colSpan={3} rowSpan={2} bg="white">
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>اسم الشاري</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>الولاية</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>العنوان</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>البريد الالكتروني</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>رقم هاتف الشاري</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>اسم البائع الكامل</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>رقم ccp الخاص بالبائع</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>مفتاح ال ccp الخاص بالبائع</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="email">
            <FormLabel>رقم هاتف البائع</FormLabel>
            <Input type="email" />
          </FormControl>

          <Button
            bg={'green.400'}
            color={'white'}
            _hover={{
              bg: 'green.500',
            }}
          >
            أنشئ
          </Button>
        </Stack>
      </GridItem>
      <GridItem rowSpan={2} colSpan={2}>
        <Alert status="success">
          Chakra is going live on August 30th. Get ready! Chakra is going live on August 30th. Get
          ready! Chakra is going live on August 30th. Get ready! Chakra is going live on August
          30th. Get ready! Chakra is going live on August 30th. Get ready! Chakra is going live on
          August 30th. Get ready! Chakra is going live on August 30th. Get ready! Chakra is going
          live on August 30th. Get ready! Chakra is going live on August 30th. Get ready! Chakra is
          going live on August 30th. Get ready!
        </Alert>
      </GridItem>
    </Grid>
  );
}
