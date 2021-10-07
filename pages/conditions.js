import {
  Box,
  Heading,
  Container,
  Stack,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';

import React from 'react';
import Head from 'next/head';

export default function about() {
  return (
    <Container mb={16} maxW={'4xl'}>
      <Head>
        <title>شروط الاستخدام</title>
      </Head>
      <Heading my="8" color="gray.600">
        شروط الاستخدام
      </Heading>
      <Text my="8" fontSize="xl">
        نرجو من المستخدمين الكرام الالتزام بالشروط التالية وفهمها جيداً ذلك لأنه باستخدامك لموقع
        odmenli.com أنت تقر على موافقتك الكاملة على هذه الشروط. وفي حال عدم الموافقة على شروط
        الاستخدام، يرجى ألا تستخدم موقعنا الالكتروني وألا تنشئ حساباً به. كما أن الموقع يحتفظ بحق
        تعديل الاتفاقية في أيّ وقت .
      </Text>
      {/* <Text my="8" fontSize="xl">
        موقع odmenli.com مسجل. ولدينا وكلاء محاميين في كل ربوع الوطن لمتابعة قضايا الموقع القانونية
        بلا استثناء.
      </Text> */}
      <UnorderedList fontSize="xl" spacing={3}>
        <ListItem>
          يحق للموقع المطالبة قانونيا بأي تعويض يراه مناسباً من أي شخص يقوم باساءة استخدام الموقع .
        </ListItem>
        <ListItem>يحفظ الموقع حق المشاركين بالحصول على الدعم الفني طيلة إستعمالهم للموقع.</ListItem>
        <ListItem>
          ضمان استرداد الأموال حق يقدمه الموقع لكل مشاركيه, ويشترط لتطبيق سياسة استرداد الاموال عدم
          تمام الصفقة أو عدم حصول المشارك على الخدمة أو المنتج الذي طلبه .
        </ListItem>
        <ListItem>
          يحق للموقع تعليق او اغلاق او حظر او حذف اي حساب ﻷي مستخدم من مستخدميه اذا اشتبهنا بأن
          المستخدم يقوم بمحاولة الاحتيال علينا أو إنتهاك سياسة الموقع مهما كانت الظروف او الاسباب
          ولا يوجد استثناءات نهائيا لذلك.
        </ListItem>
        <ListItem>
          يحق للموقع تعليق او اغلاق او حظر او حذف اي حساب لأي مستخدم من مستخدميه اذا ثبت اساءة
          المستخدم للموقع أو محتواه أو فريقه أو مستشاريه سواء بطريقة مباشرة او غير مباشرة , بذكر اسم
          او بدون ذكر إسم و يحق للموقع مساءلة المسيء قانونيا وطلب أي تعويضات يراها الموقع مناسبة.
        </ListItem>
      </UnorderedList>
      <Heading size="lg" my="8" color="gray.600">
        الحسابات:
      </Heading>
      <List fontSize="xl" spacing={3}>
        <ListItem>
          – يجب أن يكون اسم المستخدم له معنى وليس مجرد رموز أو أرقام وممنوع استخدام أي أسماء تحرض
          على الكراهية، العنف، ويلتزم المستخدم بكتابة اسمه الحقيقي الموجود في بطاقة التعريف في ملفه
          الشخصي.
        </ListItem>
        <ListItem>
          – يضمن المستخدم أن جميع المعلومات التي يقوم بإضافتها في حسابه في الموقع صحيحة تماماً ،
          ويتحمل كامل المسؤولية عن أي معلومات خاطئة يقوم بإضافتها .
        </ListItem>
        <ListItem>
          – يلتزم المستخدم بعدم إنشاء أكثر من حساب واحد في الموقع وفي حال واجه مشكلة في حسابه الأول
          فعليه مراسلتنا عبر رابط صفحة الاتصال في اسفل الموقع لحل المشكلة.
        </ListItem>
        <ListItem>
          – يلتزم المستخدم بعدم مشاركة بيانات حسابه الشخصي مع اي فرد اخر او بيع الحساب او تأجيره او
          توزيعه ونرجوا اعلام الادارة في حالة الرغبة بنقل الحساب الى شخص اخر.
        </ListItem>
        <ListItem>
          – يحق للادارة المسؤولة عن الموقع الغاء او ايقاف الحساب في حال قيام مستخدمه بانتهاك سياسة
          الاستخدام.
        </ListItem>
        <ListItem>
          – يحتفظ موقعنا الالكتروني في حقه بتغيير أو تعديل أي من هذه الشروط في أي وقت، إذا لاحظت أي
          جزئية مبهمة أو خطأ في تفاصيل هذه الشروط نرجو تنبيهنا لذلك
        </ListItem>
        <ListItem>
          – لا يمكن بأي حال من الأحوال استرجاع الأموال المودعة بعد إنتهاء الصفقة وحصول المستخدم على
          طلبه .
        </ListItem>
        <ListItem>
          – استخدامك للموقع يعني موافقتك والتزامك بكل بنود الاتفاقية السابق ذكرها.
        </ListItem>
      </List>
    </Container>
  );
}
