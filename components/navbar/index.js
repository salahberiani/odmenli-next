import {
  Box,
  Flex,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Heading,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { RiShieldCheckFill } from 'react-icons/ri';

import useStore from 'store';
const LoggedinMenu = dynamic(() => import('./logged'));
const NotLoggedinMenu = dynamic(() => import('./notLogged'));
const MobileNav = dynamic(() => import('./mobile'));

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
        <MobileNav isLoggedIn={isLoggedIn} />
      </Collapse>
    </Box>
  );
}
