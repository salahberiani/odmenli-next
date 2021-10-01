import {
  Flex,
  Input,
  Button,
  useClipboard,
  Alert,
  Text,
  Heading,
  Box,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import React from 'react';

export default function Example() {
  const [value, setValue] = React.useState({
    ccpName: 'SALAH EDDIN BERIANI',
    ccpKey: '80',
    ccpNumber: '454512121',
  });

  return (
    <>
      <Heading size="lg" my="4">
        الحساب الجاري لاستقبال الأموال
      </Heading>
      <Flex mb={2}>
        <Alert status="warning">
          <UnorderedList>
            <ListItem> اسم الحساب : {value.ccpName}</ListItem>
            <ListItem> مفتاح الحساب : {value.ccpKey}</ListItem>
            <ListItem> رقم الحساب : {value.ccpNumber}</ListItem>
          </UnorderedList>
        </Alert>
      </Flex>
      <Alert status="info">
        لرؤية معلومات الضمان كاملة قم بالضغط على الرقم التعريفي في جدول الضمانات في الأسفل
      </Alert>
    </>
  );
}
