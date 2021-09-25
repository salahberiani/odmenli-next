import React from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Grid,
  GridItem,
  Alert,
  useToast,
  FormErrorMessage,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';
// import axios from 'axios';
import Axios from 'util/Axios';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import useStore from 'store';

export default function Adddaman() {
  const toast = useToast();

  const router = useRouter();
  const userid = useStore((state) => state.auth._id);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  async function onSubmit(values, e) {
    e.preventDefault();
    const { confirmImageUrl, ...rest } = values;
    const data = { ...rest, confirmImageUrl: confirmImageUrl[0], user: userid };
    var form_data = new FormData();

    for (let key in data) {
      form_data.append(key, data[key]);
    }
    try {
      const res = await Axios.post(`/daman/add`, form_data);
      console.log(res);
      router.push('/dashboard');
    } catch (error) {
      toast({
        title: 'فشل في عملية الارسال',
        status: 'error',
        duration: 9000,
        // isClosable: true,
      });
    }
  }

  return (
    <Grid
      dir={{ base: 'ltr', md: 'rtl' }}
      px="10%"
      py="5%"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
    >
      <GridItem rowSpan={2} colSpan={{ base: 5, md: 2 }}>
        <Heading size="lg" my="2">
          ملاحظات
        </Heading>
        <Alert status="success">
          <UnorderedList>
            <ListItem>أرجو التأكد من المعلومات جيدا قبل انشاء الضمان</ListItem>
            <ListItem>
              وثيقة ارسال الأموال المطلوبة يجب أن تكون صورة لحوالة الارسال البريدي ويجب أن تكون
              واضحة
            </ListItem>
            <ListItem>
              ملئ بيانات الحساب الخاص بك ستجنبك ادخال معلوماتك عند انشاء الضمان في كل مرة{' '}
            </ListItem>
            <ListItem>
              بعد انشاء الضمان سيتم التحقق منه من قبل فريق العمل وذلك قد يأخذ لحظات قليلة وبعد ذلك
              سيتم تحويل حالة الضمان الى مؤكد أن تأكدنا من ارسالك للأموال أو فشل تأكيد ان لم نتأكد
              من ارسالك للاموال{' '}
            </ListItem>
          </UnorderedList>
        </Alert>
      </GridItem>
      <GridItem p="8" colSpan={{ base: 5, md: 3 }} rowSpan={2} bg="white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={4}>
            <FormControl id="email" isInvalid={errors.bayerFullName}>
              <FormLabel>اسم الشاري</FormLabel>
              <Input
                {...register('bayerFullName', {
                  required: 'هذا مطلوب',
                })}
              />
              <FormErrorMessage>
                {errors.bayerFullName && errors.bayerFullName.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl id="email" isInvalid={errors.wilaya}>
              <FormLabel>الولاية</FormLabel>
              <Input
                {...register('wilaya', {
                  required: 'هذا مطلوب',
                })}
              />
              <FormErrorMessage>{errors.wilaya && errors.wilaya.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="email" isInvalid={errors.address}>
              <FormLabel>العنوان</FormLabel>
              <Input
                {...register('address', {
                  required: 'هذا مطلوب',
                })}
              />
              <FormErrorMessage>{errors.address && errors.address.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="email" isInvalid={errors.email}>
              <FormLabel>البريد الالكتروني</FormLabel>
              <Input
                type="email"
                {...register('email', {
                  required: 'هذا مطلوب',
                })}
              />
              <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="email" isInvalid={errors.bayerPhone}>
              <FormLabel>رقم هاتف الشاري</FormLabel>
              <Input
                {...register('bayerPhone', {
                  required: 'هذا مطلوب',
                })}
              />
              <FormErrorMessage>{errors.bayerPhone && errors.bayerPhone.message}</FormErrorMessage>
            </FormControl>
            <FormControl id="email" isInvalid={errors.sellerFullName}>
              <FormLabel>اسم البائع الكامل</FormLabel>
              <Input
                {...register('sellerFullName', {
                  required: 'هذا مطلوب',
                })}
              />
              <FormErrorMessage>
                {errors.sellerFullName && errors.sellerFullName.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl id="email" isInvalid={errors.sellerCcpNumber}>
              <FormLabel>رقم ccp الخاص بالبائع</FormLabel>
              <Input
                {...register('sellerCcpNumber', {
                  required: 'هذا مطلوب',
                })}
              />
              <FormErrorMessage>
                {errors.sellerCcpNumber && errors.sellerCcpNumber.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl id="email" isInvalid={errors.sellerCcpKey}>
              <FormLabel>مفتاح ال ccp الخاص بالبائع</FormLabel>
              <Input
                {...register('sellerCcpKey', {
                  required: 'هذا مطلوب',
                })}
              />
              <FormErrorMessage>
                {errors.sellerCcpKey && errors.sellerCcpKey.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl id="email" isInvalid={errors.sellerPhone}>
              <FormLabel>رقم هاتف البائع</FormLabel>
              <Input
                {...register('sellerPhone', {
                  required: 'هذا مطلوب',
                })}
              />
              <FormErrorMessage>
                {errors.sellerPhone && errors.sellerPhone.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl id="email" isInvalid={errors.confirmImageUrl}>
              <FormLabel>وثيقة تأكيد ارسال الأموال</FormLabel>
              <Input
                type="file"
                {...register('confirmImageUrl', {
                  required: 'هذا مطلوب',
                })}
              />
              <FormErrorMessage>
                {errors.confirmImageUrl && errors.confirmImageUrl.message}
              </FormErrorMessage>
            </FormControl>

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
              أنشئ
            </Button>
          </Stack>
        </form>
      </GridItem>
    </Grid>
  );
}
