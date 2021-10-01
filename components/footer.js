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
              <Link passHref href="/">
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
              ظرا للاحتيالات التجارية التي تحدث عبر مواقع الشبكة العنكبوتية بشكل متكرر وكبير وللقظاء
              عليها والحد منها قمنا بانشاء موقع اظمنلي الذي يظمن حدوث المبادلات التجارية دون الوقوع
              في فخ الاحتيال الالكتروني الذي يقوم به اشخاص بحسابات مزيفة
            </Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>روابط</ListHeader>
            <Link href={'/'}>الرئيسية</Link>
            <Link href={'/price'}>أسعار التعامل</Link>
            <Link href={'/howwework'}>كيف نعمل</Link>
            <Link href={'/about'}>عنا</Link>
            <Link href={'/login'}>تسجيل</Link>
            <Link href={'/register'}>تسجيل الدخول</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>تواصل معنا</ListHeader>
            <HStack spacing={3}>
              <AiFillPhone></AiFillPhone>
              <Link href={'#'}>0664312585</Link>
            </HStack>
            <HStack spacing={3}>
              <AiFillPhone></AiFillPhone>
              <Link href={'#'}>0676244712</Link>
            </HStack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>الدعم</ListHeader>
            <Link href={'#'}>صفحة الفايسبوك</Link>
            <Link href={'/conditions'}>شروط الاستخدام</Link>
            <Link href={'#'}>معلومات</Link>
            <Link href={'#'}>سياسة الخصوصية</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>تابعنا</ListHeader>
            <Link href={'#'}>فايسبوك</Link>
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
