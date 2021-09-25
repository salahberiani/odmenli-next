import React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  useToast,
  FormErrorMessage,
} from '@chakra-ui/react';
// import axios from 'axios';
import Axios from 'util/Axios';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import useStore from 'store';

export default function Adddaman({ setEdit, daman }) {
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
    const data = { ...rest, confirmImageUrl: confirmImageUrl[0], user: userid, _id: daman._id };
    console.log(data);
    var form_data = new FormData();

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
        <Stack spacing={4}>
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
          <FormControl id="email" isInvalid={errors.sellerFullName}>
            <FormLabel>اسم البائع الكامل</FormLabel>
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
          <FormControl id="email" isInvalid={errors.sellerCcpNumber}>
            <FormLabel>رقم ccp الخاص بالبائع</FormLabel>
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
          <FormControl id="email" isInvalid={errors.sellerCcpKey}>
            <FormLabel>مفتاح ال ccp الخاص بالبائع</FormLabel>
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
          <FormControl id="email" isInvalid={errors.sellerPhone}>
            <FormLabel>رقم هاتف البائع</FormLabel>
            <Input
              defaultValue={daman?.sellerPhone}
              {...register('sellerPhone', {
                required: 'هذا مطلوب',
              })}
            />
            <FormErrorMessage>{errors.sellerPhone && errors.sellerPhone.message}</FormErrorMessage>
          </FormControl>
          <FormControl id="email" isInvalid={errors.confirmImageUrl}>
            <FormLabel>وثيقة تأكيد ارسال الأموال</FormLabel>
            <Input type="file" {...register('confirmImageUrl')} />
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
    </Box>
  );
}
