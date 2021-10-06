import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import Link from 'next/link';

import useStore from 'store';

export default function LoggedinMenu() {
  const logout = useStore((state) => state.logout);

  return (
    <>
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
      <Link prefetch={false} passHref href="/dashboard">
        <Button fontSize={'sm'} fontWeight={400} variant={'link'}>
          المنصة
        </Button>
      </Link>
      <Menu>
        <MenuButton as={Button} variant={'link'} rightIcon={<ChevronDownIcon />}>
          الحساب
        </MenuButton>
        <MenuList>
          <Link prefetch={false} passHref href="/profile">
            <MenuItem>معلومات الحساب</MenuItem>
          </Link>
          <MenuItem onClick={logout}>تسجيل الخروج</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}
