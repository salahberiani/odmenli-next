import { Box, Button, useColorModeValue, Badge, Image } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { HiPencilAlt } from 'react-icons/hi';

import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import useAxios from 'util/useAxios';
import useStore from 'store';
import Card from './Card';
import CardContent from './CardContent';
import CardHeader from './CardHeader';
import Property from './Property';
const Edite = dynamic(() => import('./Edite'));

export default function Index() {
  const Axios = useAxios();
  const statusToArabic = {
    pending: {
      name: 'قيد التأكيد',
      color: 'yellow',
    },
    verfied: {
      name: 'تم التأكيد',
      color: 'blue',
    },
    failed: {
      name: 'فشل التأكيد',
      color: 'red',
    },
    rejected: {
      name: 'فشل الصفقة',
      color: 'red',
    },
    complete: {
      name: 'نجاح الصفقة',
      color: 'green',
    },
  };
  const router = useRouter();
  const { _id } = router.query;

  const userid = useStore((state) => state.auth._id);
  const [edit, setEdit] = useState(false);

  const [daman, setDaman] = useState();
  useEffect(() => {
    const getDaman = async () => {
      try {
        const res = await Axios.post('/daman/userget', { userid, _id });
        setDaman(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDaman();
  }, [userid, _id, edit]);
  console.log(daman);
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
          title="معلومات الضمان"
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
        <CardContent>
          {edit ? (
            <Edite setEdit={setEdit} daman={daman}></Edite>
          ) : (
            <>
              {daman && (
                <>
                  <Property label=" الاسم الكامل للشاري" value={daman.bayerFullName} />
                  {/* <Property label="البريد الالكتروني" value={daman.email} /> */}
                  <Property label="الولاية" value={daman.wilaya} />
                  <Property label="العنوان" value={daman.address} />
                  <Property label="المبلغ" value={daman.amount + ' دج'} />
                  <Property label="المبلغ بالعمولة المضافة" value={daman.amountWithOmola + ' دج'} />
                  <Property label="رقم الهاتف الشاري" value={daman.bayerPhone} />
                  <Property label="طريقة ارسال الأموال" value={daman.type} />
                  <Property label=" الاسم الكامل للبائع" value={daman.sellerFullName} />
                  <Property label="رقم الهاتف البائع" value={daman.sellerPhone} />
                  <Property label="رقم ccp البائع" value={daman.sellerCcpNumber} />
                  <Property label="مفتاح ccp البائع" value={daman.sellerCcpKey} />
                  <Property
                    label="حالة الضمان"
                    value={
                      <Badge fontSize="0.8em" colorScheme={statusToArabic[daman.status].color}>
                        {statusToArabic[daman.status].name}
                      </Badge>
                    }
                  />
                  <Property
                    label="وثيقة تأكيد الضمان"
                    value={<Image alt="" src={daman.confirmImageUrl}></Image>}
                  />
                </>
              )}
            </>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
