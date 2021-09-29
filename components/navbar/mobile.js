import { Flex, Text, Stack, useColorModeValue } from '@chakra-ui/react';

import Link from 'next/link';

import useStore from 'store';

export default function MobileNav({ isLoggedIn }) {
  const logout = useStore((state) => state.logout);

  return (
    <Stack
      shadow="sm"
      position="fixed"
      w="100%"
      top="60px"
      zIndex="999"
      bg={useColorModeValue('green.400', 'gray.800')}
      p={4}
      color="white"
      display={{ md: 'none' }}
    >
      {isLoggedIn ? (
        <>
          {Logged_ITEMS.map((navItem) => (
            <MobileNavItem key={navItem.label} {...navItem} />
          ))}
          <Stack spacing={4}>
            <Flex
              py={2}
              justify={'space-between'}
              align={'center'}
              _hover={{
                textDecoration: 'none',
              }}
            >
              <Text cursor="pointer" onClick={logout}>
                تسجيل الخروج
              </Text>
            </Flex>
          </Stack>
        </>
      ) : (
        <>
          {NAV_ITEMS.map((navItem) => (
            <MobileNavItem key={navItem.label} {...navItem} />
          ))}
        </>
      )}
    </Stack>
  );
}

const MobileNavItem = ({ label, children, href }) => {
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Link passHref href={href}>
          {label}
        </Link>
      </Flex>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: 'الرئيسية',
    href: '/',
  },
  {
    label: 'أسعار التعامل',
    href: '/price',
  },
  {
    label: 'كيف نعمل',
    href: '/howwework',
  },
  {
    label: 'عنا',
    href: '/about',
  },
  {
    label: 'تسجيل الدخول',
    href: '/login',
  },
  {
    label: 'تسجيل جديد',
    href: '/register',
  },
];
const Logged_ITEMS = [
  {
    label: 'أسعار التعامل',
    href: '/price',
  },
  {
    label: 'كيف نعمل',
    href: '/howwework',
  },
  {
    label: 'المنصة',
    href: '/dashboard',
  },
  {
    label: 'معلومات الحساب',
    href: '/profile',
  },
];
