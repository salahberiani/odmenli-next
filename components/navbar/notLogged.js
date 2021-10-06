import { Button } from '@chakra-ui/react';
import Link from 'next/link';

export default function NotLoggedinMenu() {
  return (
    <>
      <Link prefetch={false} passHref href="/">
        <Button fontSize={'sm'} fontWeight={400} variant={'link'}>
          الرئيسية
        </Button>
      </Link>
      <Link prefetch={false} passHref href="/price">
        <Button fontSize={'sm'} fontWeight={400} variant={'link'}>
          أسعار التعامل
        </Button>
      </Link>
      <Link prefetch={false} passHref href="/howwework">
        <Button fontSize={'sm'} fontWeight={400} variant={'link'}>
          كيف نعمل
        </Button>
      </Link>
      <Link prefetch={false} passHref href="/about">
        <Button fontSize={'sm'} fontWeight={400} variant={'link'}>
          عنا
        </Button>
      </Link>
      <Link prefetch={false} passHref href="/login">
        <Button fontSize={'sm'} fontWeight={400} variant={'link'}>
          تسجيل الدخول
        </Button>
      </Link>
      <Link prefetch={false} passHref href="/register">
        <Button
          display={{ base: 'none', md: 'inline-flex' }}
          fontSize={'sm'}
          fontWeight={600}
          color={'white'}
          bg={'green.400'}
          _hover={{
            bg: 'green.300',
          }}
        >
          التسجيل
        </Button>
      </Link>
    </>
  );
}
