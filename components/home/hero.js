import { Button, Flex, Heading, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react';

export default function SplitScreen() {
  return (
    <Stack minH={'50%'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontWeight="extrabold" fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '10%', md: '15%' }),
                position: 'absolute',
                bottom: 3,
                left: 0,
                bg: 'green.400',
                zIndex: -1,
              }}
            >
              ضمان
            </Text>
            <br />{' '}
            <Text color={'green.400'} as={'span'}>
              ضمان كل أنواع صفقات البيع والشراء
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            في أضمنلي نعمل كوسيط مالي لضمان توفية كل شروط البائع والمشتري ثم تحويل الأموال الى
            الاتجاه الصحيح بعد تمام الصفقة
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'green.400'}
              color={'white'}
              _hover={{
                bg: 'green.500',
              }}
            >
              أنشئ ضمان
            </Button>
            <Button rounded={'full'}>كيف نعمل</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
        />
      </Flex>
    </Stack>
  );
}
