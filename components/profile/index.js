import { Box, Button, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import { HiPencilAlt } from 'react-icons/hi';
import Card from './Card';
import CardContent from './CardContent';
import CardHeader from './CardHeader';
import Property from './Property';

export default function Index() {
  return (
    <Box
      as="section"
      bg={useColorModeValue('gray.100', 'inherit')}
      py="12"
      px={{
        md: '8',
      }}
    >
      <Card maxW="4xl" mx="auto">
        <CardHeader
          title="معلومات الحساب"
          action={
            <Button variant="outline" minW="20" leftIcon={<HiPencilAlt />}>
              تعديل
            </Button>
          }
        />
        <CardContent>
          <Property label="الاسم الكامل" value="Chakra UI" />
          <Property label="البريد الالكتروني" value="chakra-ui.sh@gmail.com" />
          <Property label="الولاية" value="February, 2021" />
          <Property label="العنوان" value="Starter Pro" />
          <Property label="رقم الهاتف" value="Starter Pro" />
        </CardContent>
      </Card>
    </Box>
  );
}
