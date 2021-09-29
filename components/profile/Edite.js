import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  useToast,
  FormErrorMessage,
  Box,
} from '@chakra-ui/react';
import Axios from 'util/Axios';
import { useForm } from 'react-hook-form';

export default function Adddaman({ profile, setEdit }) {
  const toast = useToast();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  async function onSubmit(values, e) {
    e.preventDefault();
    const data = { ...values, _id: profile._id };

    try {
      const res = await Axios.post(`/profile/update`, data);
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
          <FormControl id="email" isInvalid={errors.fullName}>
            <FormLabel>الاسم الكامل</FormLabel>
            <Input
              defaultValue={profile?.fullName}
              {...register('fullName', {
                required: 'هذا مطلوب',
              })}
            />
            <FormErrorMessage>{errors.fullName && errors.fullName.message}</FormErrorMessage>
          </FormControl>
          <FormControl id="email" isInvalid={errors.wilaya}>
            <FormLabel>الولاية</FormLabel>
            <Input
              defaultValue={profile?.wilaya}
              {...register('wilaya', {
                required: 'هذا مطلوب',
              })}
            />
            <FormErrorMessage>{errors.wilaya && errors.wilaya.message}</FormErrorMessage>
          </FormControl>
          <FormControl id="email" isInvalid={errors.address}>
            <FormLabel>العنوان</FormLabel>
            <Input
              defaultValue={profile?.address}
              {...register('address', {
                required: 'هذا مطلوب',
              })}
            />
            <FormErrorMessage>{errors.address && errors.address.message}</FormErrorMessage>
          </FormControl>

          <FormControl id="email" isInvalid={errors.phone}>
            <FormLabel>رقم هاتف الشاري</FormLabel>
            <Input
              defaultValue={profile?.phone}
              {...register('phone', {
                required: 'هذا مطلوب',
              })}
            />
            <FormErrorMessage>{errors.phone && errors.phone.message}</FormErrorMessage>
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
            تعديل
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
