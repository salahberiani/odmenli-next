import { Box, Button, useColorModeValue, Heading } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

import { HiPencilAlt } from 'react-icons/hi';
import Axios from 'util/Axios';

import Card from './Card';
import CardContent from './CardContent';
import CardHeader from './CardHeader';
import Property from './Property';
const Edite = dynamic(() => import('./Edite'));
import useStore from 'store';

export default function Index() {
  const _id = useStore((state) => state.auth.profile);
  const [edit, setEdit] = useState(false);

  const [profile, setProfile] = useState();
  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await Axios.post('/profile/get', { _id });
        setProfile(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProfile();
  }, [_id, edit]);
  console.log(profile);
  return (
    <Box
      as="section"
      //   bg={useColorModeValue('gray.100', 'inherit')}
      py="12"
      px={{
        md: '8',
      }}
    >
      <Card maxW="4xl" mx="auto">
        <CardHeader
          title="معلومات الحساب"
          action={
            edit ? (
              <Button onClick={() => setEdit(!edit)} variant="outline" minW="20" colorScheme="red">
                الغاء
              </Button>
            ) : (
              <Button
                onClick={() => setEdit(!edit)}
                variant="outline"
                minW="20"
                leftIcon={<HiPencilAlt />}
              >
                تعديل
              </Button>
            )
          }
        />
        {edit ? (
          <Edite profile={profile} setEdit={setEdit}></Edite>
        ) : (
          <CardContent>
            <Property
              label="الاسم الكامل"
              value={profile?.fullName ? profile?.fullName : 'لم يحدد بعد'}
            />
            <Property label="الولاية" value={profile?.wilaya ? profile?.wilaya : 'لم يحدد بعد'} />
            <Property label="العنوان" value={profile?.address ? profile?.address : 'لم يحدد بعد'} />
            <Property label="رقم الهاتف" value={profile?.phone ? profile?.phone : 'لم يحدد بعد'} />
          </CardContent>
        )}
      </Card>
    </Box>
  );
}
