import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { RiShieldCheckFill } from 'react-icons/ri';

import useStore from 'store';

function LoggedinMenu() {
  const logout = useStore((state) => state.logout);

  return (
    <>
      <Link passHref href="/dashboard">
        <Button fontSize={'sm'} fontWeight={400} variant={'link'}>
          المنصة
        </Button>
      </Link>
      <Menu>
        <MenuButton as={Button} variant={'link'} rightIcon={<ChevronDownIcon />}>
          الحساب
        </MenuButton>
        <MenuList>
          <Link passHref href="/profile">
            <MenuItem>معلومات الحساب</MenuItem>
          </Link>
          <MenuItem onClick={logout}>تسجيل الخروج</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

function NotLoggedinMenu() {
  return (
    <>
      <Link passHref href="/">
        <Button fontSize={'sm'} fontWeight={400} variant={'link'}>
          الرئيسية
        </Button>
      </Link>
      <Link passHref href="/price">
        <Button fontSize={'sm'} fontWeight={400} variant={'link'}>
          أسعار التعامل
        </Button>
      </Link>
      <Link passHref href="/howwework">
        <Button fontSize={'sm'} fontWeight={400} variant={'link'}>
          كيف نعمل
        </Button>
      </Link>
      <Link passHref href="/about">
        <Button fontSize={'sm'} fontWeight={400} variant={'link'}>
          عنا
        </Button>
      </Link>
      <Link passHref href="/login">
        <Button fontSize={'sm'} fontWeight={400} variant={'link'}>
          تسجيل الدخول
        </Button>
      </Link>
      <Link passHref href="/register">
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

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const isLoggedIn = useStore((state) => state.isLoggedIn);

  return (
    <Box>
      <Flex
        position="fixed"
        w="100%"
        className="glass"
        shadow="sm"
        // bg={useColorModeValue('white', 'gray.800')}
        // color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        // borderBottom={1}
        // borderStyle={'solid'}
        // borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
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
        </Flex>
        <Flex
          flex={{ base: 0, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>

        <Stack
          display={{ base: 'none', md: 'flex' }}
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >
          {isLoggedIn && <LoggedinMenu></LoggedinMenu>}
          {!isLoggedIn && <NotLoggedinMenu></NotLoggedinMenu>}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const MobileNav = () => {
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
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

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
