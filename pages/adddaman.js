/* eslint-disable react/display-name */
import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Grid,
  GridItem,
  Alert,
  useToast,
  FormErrorMessage,
  ListItem,
  UnorderedList,
  SimpleGrid,
  Container,
  Text,
} from '@chakra-ui/react';
import Axios from 'util/Axios';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';
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

  const MyTag = React.forwardRef(({ onClick, href }, ref) => {
    return (
      <a style={{ fontWeight: 'bold' }} href={href} onClick={onClick} ref={ref}>
        أسعار التعامل
      </a>
    );
  });

  return (
    <Container maxW="8xl" p={{ base: 5 }}>
      <Grid
        dir={{ base: 'ltr', md: 'rtl' }}
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={{ base: 5, md: 2 }}>
          <Alert status="success">
            <UnorderedList spacing={3}>
              <ListItem>
                أرجو تفقد{' '}
                <Link passHref href="/price">
                  <MyTag></MyTag>
                </Link>{' '}
                والتأكد من السعر المفترض ارساله لنا
              </ListItem>
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
            <SimpleGrid columns={2} columnGap={3} rowGap={6}>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl id="email" isInvalid={errors.bayerFullName}>
                  <FormLabel>اسم الشاري</FormLabel>
                  <Input
                    placeholder="اسم الشاري"
                    {...register('bayerFullName', {
                      required: 'هذا مطلوب',
                    })}
                  />
                  <FormErrorMessage>
                    {errors.bayerFullName && errors.bayerFullName.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl id="email" isInvalid={errors.wilaya}>
                  <FormLabel>الولاية</FormLabel>
                  <Input
                    placeholder="الولاية"
                    {...register('wilaya', {
                      required: 'هذا مطلوب',
                    })}
                  />
                  <FormErrorMessage>{errors.wilaya && errors.wilaya.message}</FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl id="email" isInvalid={errors.address}>
                  <FormLabel>العنوان</FormLabel>
                  <Input
                    placeholder="العنوان"
                    {...register('address', {
                      required: 'هذا مطلوب',
                    })}
                  />
                  <FormErrorMessage>{errors.address && errors.address.message}</FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl id="email" isInvalid={errors.email}>
                  <FormLabel>البريد الالكتروني</FormLabel>
                  <Input
                    placeholder="البريد الالكتروني<"
                    type="email"
                    {...register('email', {
                      required: 'هذا مطلوب',
                    })}
                  />
                  <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl id="email" isInvalid={errors.bayerPhone}>
                  <FormLabel>رقم هاتف الشاري</FormLabel>
                  <Input
                    placeholder="رقم هاتف الشاري"
                    {...register('bayerPhone', {
                      required: 'هذا مطلوب',
                    })}
                  />
                  <FormErrorMessage>
                    {errors.bayerPhone && errors.bayerPhone.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl id="email" isInvalid={errors.sellerFullName}>
                  <FormLabel>اسم البائع الكامل</FormLabel>
                  <Input
                    placeholder="اسم البائع الكامل"
                    {...register('sellerFullName', {
                      required: 'هذا مطلوب',
                    })}
                  />
                  <FormErrorMessage>
                    {errors.sellerFullName && errors.sellerFullName.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl id="email" isInvalid={errors.sellerCcpNumber}>
                  <FormLabel>رقم ccp الخاص بالبائع</FormLabel>
                  <Input
                    placeholder="رقم ccp الخاص بالبائع"
                    {...register('sellerCcpNumber', {
                      required: 'هذا مطلوب',
                    })}
                  />
                  <FormErrorMessage>
                    {errors.sellerCcpNumber && errors.sellerCcpNumber.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl id="email" isInvalid={errors.sellerCcpKey}>
                  <FormLabel>مفتاح ال ccp الخاص بالبائع</FormLabel>
                  <Input
                    placeholder="مفتاح ال ccp الخاص بالبائع"
                    {...register('sellerCcpKey', {
                      required: 'هذا مطلوب',
                    })}
                  />
                  <FormErrorMessage>
                    {errors.sellerCcpKey && errors.sellerCcpKey.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl id="email" isInvalid={errors.sellerPhone}>
                  <FormLabel>رقم هاتف البائع</FormLabel>
                  <Input
                    placeholder="رقم هاتف البائع"
                    {...register('sellerPhone', {
                      required: 'هذا مطلوب',
                    })}
                  />
                  <FormErrorMessage>
                    {errors.sellerPhone && errors.sellerPhone.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl id="email" isInvalid={errors.confirmImageUrl}>
                  <FormLabel>وثيقة تأكيد ارسال الأموال</FormLabel>
                  <Input
                    placeholder="وثيقة تأكيد ارسال الأموال"
                    type="file"
                    {...register('confirmImageUrl', {
                      required: 'هذا مطلوب',
                    })}
                  />
                  <FormErrorMessage>
                    {errors.confirmImageUrl && errors.confirmImageUrl.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>

              <GridItem colSpan={2}>
                <Button
                  w="full"
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
              </GridItem>
            </SimpleGrid>
          </form>
        </GridItem>
      </Grid>
    </Container>
  );
}
