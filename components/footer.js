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
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { RiShieldCheckFill } from 'react-icons/ri';
import Link from 'next/link';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallCentered() {
  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={4} spacing={4} justify={'center'} align={'center'}>
        {/* <Logo /> */}
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
        <Stack direction={'row'} spacing={6}>
          <Link passHref href={'/'}>
            الرئيسية
          </Link>
          <Link passHref href={'/about'}>
            عنا
          </Link>
          <Link passHref href={'/howwework'}>
            كيف نعمل
          </Link>
        </Stack>
        <Flex>
          <Heading size="md">معلومات الاتصال </Heading>
        </Flex>
        <Flex
          w={{ base: '90%', md: '50%' }}
          justify="space-between"
          direction={{ base: 'column', md: 'row' }}
        >
          <Text>الهاتف :</Text>
          <Flex direction="column">
            <Text fontWeight="700">+213664312585</Text>
            <Text fontWeight="700">+213664312585</Text>
          </Flex>
        </Flex>
        <Flex
          w={{ base: '90%', md: '50%' }}
          justify="space-between"
          direction={{ base: 'column', md: 'row' }}
        >
          <Text>الايميل :</Text>
          <Flex direction="column">
            <Text fontWeight="700">salaheddinberiani@gmail.com</Text>
            <Text fontWeight="700">salaheddinberiani@gmail.com</Text>
          </Flex>
        </Flex>
        <Flex
          w={{ base: '90%', md: '50%' }}
          justify="space-between"
          direction={{ base: 'column', md: 'row' }}
        >
          <Text>صفحة الفايسبوك :</Text>
          <Flex direction="column">
            <Text fontWeight="700">www.facebook.com/odmenli</Text>
          </Flex>
        </Flex>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© 2021 كل الحقوق محفوظة</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
