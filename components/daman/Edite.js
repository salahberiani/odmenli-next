import React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  FormErrorMessage,
  SimpleGrid,
  GridItem,
  Textarea,
  Divider,
  Text,
} from '@chakra-ui/react';
import useAxios from 'util/useAxios';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import useStore from 'store';

export default function Adddaman({ setEdit, daman }) {
  const toast = useToast();
  const Axios = useAxios();
  const userid = useStore((state) => state.auth._id);
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
    const data = { ...rest, confirmImageUrl: confirmImageUrl[0], user: userid, _id: daman._id };
    console.log(data);
    let form_data = new FormData();
    form_data.append('amountWithOmola', price);

    for (let key in data) {
      form_data.append(key, data[key]);
    }
    try {
      const res = await Axios.post(`/daman/update`, form_data);
      console.log(res);
      setEdit(false);
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
    <Box p="8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <SimpleGrid columns={2} columnGap={3} rowGap={6}>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <FormControl id="email" isInvalid={errors.bayerFullName}>
              <FormLabel>اسم الشاري</FormLabel>
              <Input
                defaultValue={daman?.bayerFullName}
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
                defaultValue={daman?.wilaya}
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
                defaultValue={daman?.address}
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
                defaultValue={daman?.email}
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
              <FormLabel>رقم هاتف الشاري</FormLabel>
              <Input
                defaultValue={daman?.bayerPhone}
                {...register('bayerPhone', {
                  required: 'هذا مطلوب',
                })}
              />
              <FormErrorMessage>{errors.bayerPhone && errors.bayerPhone.message}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <FormControl id="email" isInvalid={errors.bayerCcpNumber}>
              <FormLabel>رقم ccp الخاص بك</FormLabel>
              <Input
                defaultValue={daman.bayerCcpNumber}
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
                defaultValue={daman.bayerCcpKey}
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
                defaultValue={daman.amount}
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
              المبلغ المستحق مع العمولة {price === 0 ? daman.amountWithOmola : price} دج
            </Text>
          </GridItem>
          <GridItem colSpan={2}>
            <Divider colorScheme="teal"></Divider>
          </GridItem>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <FormControl id="email" isInvalid={errors.sellerFullName}>
              <FormLabel>اسم الطرف الأخر الكامل</FormLabel>
              <Input
                defaultValue={daman?.sellerFullName}
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
                defaultValue={daman?.sellerCcpNumber}
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
                defaultValue={daman?.sellerCcpKey}
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
                defaultValue={daman?.sellerPhone}
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
              <Input type="file" {...register('confirmImageUrl')} />
              <FormErrorMessage>
                {errors.confirmImageUrl && errors.confirmImageUrl.message}
              </FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={2}>
            <FormControl id="email" isInvalid={errors.description}>
              <FormLabel>وصف توضيحي موجز</FormLabel>
              <Textarea
                defaultValue={daman?.description}
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
    </Box>
  );
}
