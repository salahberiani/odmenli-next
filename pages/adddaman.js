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
  Textarea,
  Divider,
} from '@chakra-ui/react';
import useAxios from 'util/useAxios';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useStore from 'store';

export default function Adddaman() {
  const toast = useToast();
  const Axios = useAxios();

  const router = useRouter();
  const userid = useStore((state) => state.auth._id);
  const profile = useStore((state) => state.profile);
  const [price, setPrice] = React.useState(0);

  const handlePrice = (e) => {
    console.log(typeof e.target.value);
    if (Number(e.target.value) === 0) {
      setPrice(0);
    } else if (Number(e.target.value) <= 20000) {
      setPrice(Number(e.target.value) + 250);
    } else if (Number(e.target.value) <= 50000) {
      setPrice(Number(e.target.value) + 350);
    } else if (Number(e.target.value) <= 80000) {
      setPrice(Number(e.target.value) + 450);
    } else if (Number(e.target.value) <= 100000) {
      setPrice(Number(e.target.value) + 600);
    } else if (Number(e.target.value) <= 150000) {
      setPrice(Number(e.target.value) + 800);
    } else if (Number(e.target.value) <= 200000) {
      setPrice(Number(e.target.value) + 1100);
    }
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  async function onSubmit(values, e) {
    e.preventDefault();
    const { confirmImageUrl, ...rest } = values;
    const data = { ...rest, confirmImageUrl: confirmImageUrl[0], user: userid };
    let form_data = new FormData();
    form_data.append('amountWithOmola', price);
    for (let key in data) {
      form_data.append(key, data[key]);
    }
    try {
      const res = await Axios.post(`/daman/add`, form_data);
      toast({
        title: 'تمت اضافة الضمان بنجاح',
        status: 'success',
        duration: 4000,
        // isClosable: true,
      });
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
                الطرف الأخر يمكن أن يكون بائع أو مستقل أو أي احد سيقدم لك نوع خدمة مقابل مال
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
                    defaultValue={profile?.fullName}
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
                    defaultValue={profile?.wilaya}
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
                    defaultValue={profile?.address}
                    placeholder="العنوان"
                    {...register('address', {
                      required: 'هذا مطلوب',
                    })}
                  />
                  <FormErrorMessage>{errors.address && errors.address.message}</FormErrorMessage>
                </FormControl>
              </GridItem>
              {/* <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl id="email" isInvalid={errors.email}>
                  <FormLabel>البريد الالكتروني</FormLabel>
                  <Input
                    defaultValue={profile?.email}
                    placeholder="البريد الالكتروني"
                    type="email"
                    {...register('email', {
                      required: 'هذا مطلوب',
                    })}
                  />
                  <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                </FormControl>
              </GridItem> */}
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl id="email" isInvalid={errors.bayerPhone}>
                  <FormLabel>رقم هاتف الخاص بك</FormLabel>
                  <Input
                    defaultValue={profile?.phone}
                    placeholder="رقم هاتف الخاص بك"
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
                <FormControl id="email" isInvalid={errors.bayerCcpNumber}>
                  <FormLabel>رقم ccp الخاص بك</FormLabel>
                  <Input
                    defaultValue={profile?.ccpnumber}
                    placeholder="رقم ccp الخاص بك"
                    {...register('bayerCcpNumber', {
                      required: 'هذا مطلوب',
                    })}
                  />
                  <FormErrorMessage>
                    {errors.bayerCcpNumber && errors.bayerCcpNumber.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl id="email" isInvalid={errors.bayerCcpKey}>
                  <FormLabel>مفتاح ال ccp الخاص بك</FormLabel>
                  <Input
                    defaultValue={profile?.ccpkey}
                    placeholder="مفتاح ال ccp الخاص بك"
                    {...register('bayerCcpKey', {
                      required: 'هذا مطلوب',
                    })}
                  />
                  <FormErrorMessage>
                    {errors.bayerCcpKey && errors.bayerCcpKey.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <Divider colorScheme="teal"></Divider>
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl onChange={handlePrice} id="email" isInvalid={errors.amount}>
                  <FormLabel>مبلغ الضمان</FormLabel>
                  <Input
                    type="number"
                    placeholder="مبلغ الضمان"
                    {...register('amount', {
                      required: 'هذا مطلوب',
                    })}
                  />
                  <FormErrorMessage>{errors.amount && errors.amount.message}</FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <Text mt={8} fontSize="xl" fontWeight="bold" color="green.500">
                  المبلغ المستحق مع العمولة {price} دج
                </Text>
              </GridItem>
              <GridItem colSpan={2}>
                <Divider colorScheme="teal"></Divider>
              </GridItem>
              <GridItem colSpan={{ base: 2, md: 1 }}>
                <FormControl id="email" isInvalid={errors.sellerFullName}>
                  <FormLabel>اسم الطرف الأخر الكامل</FormLabel>
                  <Input
                    placeholder="اسم الطرف الأخر الكامل"
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
                  <FormLabel>رقم ccp الخاص بالطرف الأخر</FormLabel>
                  <Input
                    placeholder="رقم ccp الخاص بالطرف الأخر"
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
                  <FormLabel>مفتاح ال ccp الخاص بالطرف الأخر</FormLabel>
                  <Input
                    placeholder="مفتاح ال ccp الخاص بالطرف الأخر"
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
                  <FormLabel>رقم هاتف الطرف الأخر</FormLabel>
                  <Input
                    placeholder="رقم هاتف الطرف الأخر"
                    {...register('sellerPhone', {
                      required: 'هذا مطلوب',
                    })}
                  />
                  <FormErrorMessage>
                    {errors.sellerPhone && errors.sellerPhone.message}
                  </FormErrorMessage>
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
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
                <FormControl id="email" isInvalid={errors.description}>
                  <FormLabel>وصف توضيحي موجز</FormLabel>
                  <Textarea
                    placeholder="وصف توضيحي موجز"
                    {...register('description', {
                      required: 'هذا مطلوب',
                    })}
                  />
                  <FormErrorMessage>
                    {errors.description && errors.description.message}
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
