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
    <Stack minH={'50%'} direction={{ base: 'column', lg: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontWeight="extrabold" fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
            <br />{' '}
            <Text color={'green.400'} as={'span'}>
              ضمان كل أنواع الصفقات المالية التي تحدث بين طرفين أو اكثر في الجزائر
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'xl' }} color={'gray.600'} fontWeight="bold">
            نظرا <span className="underline">للاحتيالات</span> التجارية التي تحدث عبر مواقع الشبكة
            العنكبوتية بشكل متكرر وكبير وللقظاء عليها والحد منها قمنا بانشاء موقع اظمنلي الذي يظمن
            حدوث المبادلات التجارية دون الوقوع في فخ الاحتيال الالكتروني الذي يقوم به اشخاص بحسابات
            مزيفة
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
      <Flex py="16" flex={1.5}>
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
            ml={{ base: '0px', md: '100px' }}
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
              direction={{ base: 'row', md: 'row' }}
              justify={{ base: 'center', md: 'flex-start' }}
            >
              <Avatar src="/images/a4.jpg" mx="3"></Avatar>
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
            mr={{ base: '0px', md: '100px' }}
            mt={{ base: '20px', lg: '-10px' }}
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
              direction={{ base: 'row', md: 'row' }}
              justify={{ base: 'center', md: 'flex-start' }}
            >
              <Avatar src="/images/a3.jpg" mx="3"></Avatar>
              <Text>
                كنت دائما متردد حيال التعامل عبر الانترنت لأنني داءما ما كنت أجد اناس في منصات
                التواصل الاجتماعي قد تم الاحتيال عليهم في مبالغ مالية ولطالما أردت أن تكون هناك
                وسيلة تمنع الاحتيال وأخيرا أضمنلي تقدم الحل
              </Text>
            </Flex>
          </MotionBox>
          <Box mt={{ base: '20px', md: '8' }} mr={{ base: '0', md: '16' }}>
            <MotionBox
              shadow="xl"
              rounded="xl"
              initial="hidden"
              animate="visible"
              p="4"
              ml={{ base: '0px', md: '50px' }}
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
                direction={{ base: 'row', md: 'row' }}
                justify={{ base: 'center', md: 'flex-start' }}
              >
                <Avatar src="/images/a1.jpg" mx="3"></Avatar>
                <Text>
                  صراحة عندما رأيت المنصة لأول مرة لم أرد استخدامها لأنني ظننت أن أسعار التعامل
                  الخاصة بهم ستكون عالية لكن بعد مدة وجدت صفقة جيدة ولم أرد تفويتهالكن كنت أريد
                  الحرص على أن لايتم الاحتيال علي فرجعت للمنصة لتفقد الأسعار ولم تكن بالاسعار
                  المكلفة اطلاقا
                </Text>
              </Flex>
            </MotionBox>
            <MotionBox
              shadow="xl"
              rounded="xl"
              initial="hidden"
              animate="visible"
              p="4"
              mr={{ base: '0px', md: '50px' }}
              mt={{ base: '20px', lg: '-10px' }}
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
                direction={{ base: 'row', md: 'row' }}
                justify={{ base: 'center', md: 'flex-start' }}
              >
                <Avatar src="/images/a.jpg" mx="3"></Avatar>
                <Text>
                  المنصة جاءت في وقت يعد فيه الاحتيال في الجزائر في ذروته و أكثر المتضررين من النساء
                  والشباب الصغار لأنهم لم يختبرو الاحتيال مسبقا ولكن الأن عبر أضمنلي يمكن لأ امراة
                  في منزلها التعامل بأمان عبر ولايات الجزائر بأرياحية وبكل سهولة مع ضمان كل حقوقها
                </Text>
              </Flex>
            </MotionBox>
          </Box>
        </Box>
      </Flex>
    </Stack>
  );
}
