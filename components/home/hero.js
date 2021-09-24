import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Box,
  Avatar,
  Icon,
} from '@chakra-ui/react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export default function SplitScreen() {
  return (
    <Stack minH={'50%'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontWeight="extrabold" fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            {/* <Text
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
            </Text> */}
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
            <Link passHref href={'/adddaman'}>
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
            </Link>
            <Link passHref href={'/howwework'}>
              <Button rounded={'full'}>كيف نعمل</Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex py="16" flex={1}>
        {/* <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
        /> */}
        <Box px={{ base: '4', md: '16' }}>
          <MotionBox
            shadow="xl"
            rounded="xl"
            initial="hidden"
            animate="visible"
            p="4"
            ml={{ base: '20px', md: '100px' }}
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
            bg="gray.200"
          >
            <Flex
              direction={{ base: 'column', md: 'row' }}
              justify={{ base: 'center', md: 'flex-start' }}
            >
              <Avatar mx="3"></Avatar>
              <Text>
                لقد تعرضت للأحتيال سابقا في مبلغ معتبر حيث أنني وضعت الثقة في شخص محتال وكانت
                النتيجة أنني خسرت المبلغ دون أي أمل لاسترداده لكن مع أضمنلي لا احتيال بعد اليوم
              </Text>
            </Flex>
          </MotionBox>
          <MotionBox
            shadow="xl"
            rounded="xl"
            initial="hidden"
            animate="visible"
            p="4"
            mr={{ base: '20px', md: '100px' }}
            mt="-10px"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.8,
                },
              },
            }}
            bg="gray.300"
          >
            <Flex
              direction={{ base: 'column', md: 'row' }}
              justify={{ base: 'center', md: 'flex-start' }}
            >
              <Avatar mx="3"></Avatar>
              <Text>
                لقد تعرضت للأحتيال سابقا في مبلغ معتبر حيث أنني وضعت الثقة في شخص محتال وكانت
                النتيجة أنني خسرت المبلغ دون أي أمل لاسترداده لكن مع أضمنلي لا احتيال بعد اليوم
              </Text>
            </Flex>
          </MotionBox>
          <Box mt="8" mr={{ base: '4', md: '16' }}>
            <MotionBox
              shadow="xl"
              rounded="xl"
              initial="hidden"
              animate="visible"
              p="4"
              ml={{ base: '10px', md: '50px' }}
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 1.2,
                  },
                },
              }}
              bg="gray.200"
            >
              <Flex
                direction={{ base: 'column', md: 'row' }}
                justify={{ base: 'center', md: 'flex-start' }}
              >
                <Avatar mx="3"></Avatar>
                <Text>
                  لقد تعرضت للأحتيال سابقا في مبلغ معتبر حيث أنني وضعت الثقة في شخص محتال وكانت
                  النتيجة أنني خسرت المبلغ دون أي أمل لاسترداده لكن مع أضمنلي لا احتيال بعد اليوم
                </Text>
              </Flex>
            </MotionBox>
            <MotionBox
              shadow="xl"
              rounded="xl"
              initial="hidden"
              animate="visible"
              p="4"
              mr={{ base: '10px', md: '50px' }}
              mt="-10px"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 1.6,
                  },
                },
              }}
              bg="gray.300"
            >
              <Flex
                direction={{ base: 'column', md: 'row' }}
                justify={{ base: 'center', md: 'flex-start' }}
              >
                <Avatar mx="3"></Avatar>
                <Text>
                  لقد تعرضت للأحتيال سابقا في مبلغ معتبر حيث أنني وضعت الثقة في شخص محتال وكانت
                  النتيجة أنني خسرت المبلغ دون أي أمل لاسترداده لكن مع أضمنلي لا احتيال بعد اليوم
                </Text>
              </Flex>
            </MotionBox>
          </Box>
        </Box>
      </Flex>
    </Stack>
  );
}
