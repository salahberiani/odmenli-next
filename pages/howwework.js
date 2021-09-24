import { Box, Heading, Container, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
export default function howwework() {
  return (
    <Container maxW={'4xl'} py={16}>
      <Heading my="8" color="gray.600">
        كيف نعمل في أضمنلي
      </Heading>
      <Text my="8" fontSize="xl">
        {' '}
        في أضمنلي نعمل كوسيط مالي في صفقات التي تظم طرفين أو عدة أطراف وهدفنا الأساسي هو القضاء على
        الاحتيال المنتشر في مجتمعنا وأيضا ضمان توفية الشروط المتفق عليها بين الطرفين او الأطراف
        المتعاقدة في الصفقة{' '}
      </Text>
      <Text my="8" fontSize="xl">
        لدينا بضع خطوات بسيطة نتبعها و لجعل الأمر مفهوم فلنفترض أن طرفين بائع وشاري اتفقا على صفقة
        بيع وكان الشاري في منطقة بعيدة ويريد ضمان أمواله قبل أن تتم الصفقة في هذه الحالة الشاري
        سيختار أضمنلي لتكون الوسيط المالي بحيث سيرسل الأموال الى حساب أضمنلي بعد انشاء ضمان في
        المنصة ومن ثم تأكيد ارسال الأموال عبر ارفاق وثيقة تثبت عملية الارسال وبعد أن نتأكد في أضمنلي
        من استلام الأموال نقوم بالاتصال بالبائع لنأكد أن الشاري قام بضمان أمواله
      </Text>
      <Stack align="center">
        <Image alt="" width={800} height={450} src="/images/hww0.png"></Image>
      </Stack>
      <Text my="8" fontSize="xl">
        بعد ذلك نقوم بالتأكيد مع الشاري أن شروط الصفقة تمت وتم استلام الغرض المباع من طرف البائع
      </Text>
      <Stack align="center" spacing={16}>
        <Image alt="" width={800} height={450} src="/images/hww1.png"></Image>
      </Stack>
      <Text my="8" fontSize="xl">
        بعد ذلك نقوم بالتأكيد مع البائع ويتم ارسال الأموال الى البائع
      </Text>
      <Stack align="center" spacing={16}>
        <Image alt="" width={800} height={450} src="/images/hww2.png"></Image>
      </Stack>
      <Text my="8" fontSize="xl">
        المثال المذكور في الأعلى كان فقط للتوضيح ولا تتقيد الصفقات به فقد تكون الصفقة عبارة عن عملية
        شراء أو توضيف موضف حر لأداء خدمة أو تبادل عملات ...الخ
      </Text>
    </Container>
  );
}
