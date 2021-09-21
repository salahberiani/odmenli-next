import React from 'react';
import { Flex, Button, Heading } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import Link from 'next/link';
export default function init() {
  return (
    <Flex p="5%" justifyContent="center" direction="column" alignItems="center">
      <Heading textAlign="center" m="4">
        يمكنك البدء الأن عبر انشاء الضمان الأول لك في المنصة
      </Heading>
      <Link passHref href="/adddaman">
        <Button leftIcon={<AddIcon />} size="lg" m="4" colorScheme="green">
          أنشئ ضمان
        </Button>
      </Link>
    </Flex>
  );
}
