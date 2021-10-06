import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Flex,
  Heading,
  useBreakpointValue,
  SimpleGrid,
  HStack,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { RiShieldCheckFill } from 'react-icons/ri';
import { AiFillPhone } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';

export default function SmallCentered() {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }} spacing={8}>
          <Stack spacing={6}>
            <Box>
              <Link prefetch={false} passHref href="/">
                <Flex>
                  <Box color="green.500" fontSize="4xl">
                    <RiShieldCheckFill></RiShieldCheckFill>
                  </Box>
                  <Heading
                    cursor="pointer"
                    size={'lg'}
                    fontWeight="extrabold"
                    textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                    color={useColorModeValue('gray.800', 'white')}
                  >
                    أضمنلي
                  </Heading>
                </Flex>
              </Link>
            </Box>
            <Text fontSize={'sm'}>
              نظرا للاحتيالات التجارية التي تحدث عبر مواقع الشبكة العنكبوتية بشكل متكرر وكبير
              وللقظاء عليها والحد منها قمنا بانشاء موقع اظمنلي الذي يظمن حدوث المبادلات التجارية دون
              الوقوع في فخ الاحتيال الالكتروني الذي يقوم به اشخاص بحسابات مزيفة
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>روابط</ListHeader>
            <Link prefetch={false} href={'/'}>
              الرئيسية
            </Link>
            <Link prefetch={false} href={'/price'}>
              أسعار التعامل
            </Link>
            <Link prefetch={false} href={'/howwework'}>
              كيف نعمل
            </Link>
            <Link prefetch={false} href={'/about'}>
              عنا
            </Link>
            <Link prefetch={false} href={'/login'}>
              تسجيل
            </Link>
            <Link prefetch={false} href={'/register'}>
              تسجيل الدخول
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>تواصل معنا</ListHeader>
            <HStack spacing={3}>
              <AiFillPhone></AiFillPhone>
              <Link prefetch={false} href={'tel:0664312585'}>
                0664312585
              </Link>
            </HStack>
            <HStack spacing={3}>
              <AiFillPhone></AiFillPhone>
              <Link prefetch={false} href={'tel:0676244712'}>
                0676244712
              </Link>
            </HStack>
            <HStack spacing={3}>
              <MdEmail></MdEmail>
              <Link prefetch={false} href={'mailto:odmenli.app@gmail.com'}>
                odmenli.app@gmail.com
              </Link>
            </HStack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>الدعم</ListHeader>
            <a
              rel="noreferrer"
              target="_blank"
              href={
                'https://www.facebook.com/%D8%A3%D8%B6%D9%85%D9%86%D9%84%D9%8A-109209821521133/?ref=pages_you_manage'
              }
            >
              صفحة الفايسبوك
            </a>
            <Link prefetch={false} href={'/conditions'}>
              شروط الاستخدام
            </Link>
            <Link prefetch={false} href={'#'}>
              معلومات
            </Link>
            <Link prefetch={false} href={'#'}>
              سياسة الخصوصية
            </Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>تابعنا</ListHeader>
            <a
              rel="noreferrer"
              target="_blank"
              href={
                'https://www.facebook.com/%D8%A3%D8%B6%D9%85%D9%86%D9%84%D9%8A-109209821521133/?ref=pages_you_manage'
              }
            >
              فايسبوك
            </a>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container as={Flex} maxW={'6xl'} py={4} spacing={4} justify="center" align="center">
          <Text>© 2021 كل الحقوق محفوظة</Text>
        </Container>
      </Box>
    </Box>
  );
}

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} color="green.500" mb={2}>
      {children}
    </Text>
  );
};
