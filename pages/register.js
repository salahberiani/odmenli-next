import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
  FormErrorMessage,
} from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import useStore from 'store';

export default function SimpleCard() {
  const router = useRouter();
  const isLoggedIn = useStore((state) => state.isLoggedIn);

  const toast = useToast();

  useEffect(() => {
    // redirect to home if already logged in
    if (isLoggedIn) {
      router.push('/dashboard');
    }
  }, [isLoggedIn, router]);

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();
  async function onSubmit(values, e) {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API}/user/register`, values);
      router.push('/login');
      console.log(res);
      toast({
        title: 'تمت عملبة التسجيل بنجاح',
        status: 'success',
        duration: 9000,
        // isClosable: true,
      });
    } catch (error) {
      console.log(error.response);
      for (const key in error.response.data.messages) {
        setError(`${key}`, {
          type: 'string',
          message: error.response.data.messages[key],
        });
      }
    }
  }

  return (
    <Flex
      minH={'100%'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Head>
        <title>تسجيل</title>
      </Head>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>تسجيل حساب جديد</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            للحفاظ على أموالك مع أضمنلي ✌️
          </Text>
        </Stack>
        <Box
          minW="xs"
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={4}>
              <FormControl id="username" isInvalid={errors.username}>
                <FormLabel>اسم المستخدم</FormLabel>
                <Input
                  placeholder="اسم المستخدم"
                  {...register('username', {
                    required: 'هذا مطلوب',
                  })}
                />
                <FormErrorMessage>{errors.username && errors.username.message}</FormErrorMessage>
              </FormControl>
              <FormControl id="email" isInvalid={errors.email}>
                <FormLabel>البريد الالكتروني</FormLabel>
                <Input
                  placeholder="البريد الالكتروني"
                  {...register('email', {
                    required: 'هذا مطلوب',
                  })}
                />
                <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
              </FormControl>
              <FormControl id="password" isInvalid={errors.password}>
                <FormLabel>كلمة السر</FormLabel>
                <Input
                  placeholder="كلمة السر"
                  type="password"
                  {...register('password', {
                    required: 'هذا مطلوب',
                  })}
                />
                <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
              </FormControl>
              <FormControl id="password" isInvalid={errors.passwordConfirm}>
                <FormLabel>تأكيد كلمة السر</FormLabel>
                <Input
                  placeholder="تأكيد كلمة السر"
                  type="password"
                  {...register('passwordConfirm', {
                    required: 'هذا مطلوب',
                  })}
                />
                <FormErrorMessage>
                  {errors.passwordConfirm && errors.passwordConfirm.message}
                </FormErrorMessage>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                >
                  <Link passHref href={'/login'}>
                    تسجيل الدخول للحساب
                  </Link>
                  {/* <Link color={'green.400'}>نسيت كلمة السر؟</Link> */}
                </Stack>
                <Button
                  type="submit"
                  isLoading={isSubmitting}
                  isDisabled={isSubmitting}
                  bg={'green.400'}
                  color={'white'}
                  _hover={{
                    bg: 'green.500',
                  }}
                >
                  تسجيل
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
