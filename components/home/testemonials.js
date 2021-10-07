import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      w="320px"
      h="130px"
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'md'}
    >
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading my="2">زبائننا قالو عنا</Heading>
          <Text textAlign="center" mb="16" fontSize="lg">
            تعاملنا مع الكثير من الزبائن وصفقاتهم كانت مختلفة وهذه كلمات بعضهم عنا
          </Text>
        </Stack>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>الحماية من المحتالين</TestimonialHeading>
              <TestimonialText>
                لقد تعرضت للأحتيال سابقا في مبلغ معتبر حيث أنني وضعت الثقة في شخص محتال وكانت
                النتيجة أنني خسرت المبلغ دون أي أمل لاسترداده لكن بعد ان تعاملت عن طريق موقع اظمنلي
                اصبح من المستحيل ان اقع في فخ الاحتيال نتمنى لهم التوفيق والمزيد من النجاحات
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar name={'لعبيدي حميد'} src="/images/a5.jpg" />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>سهولة استخدام المنصة</TestimonialHeading>
              <TestimonialText>
                ضننت المنصة ستعقد علي الامر لكن كان الامر سهل جدا وأتممت الصفقة بنجاح ولن أفكر مرتين
                في استخدامها في صفقاتي المستقبلية
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src="/images/a6.jpg"
              name={'ريان حلوي'}
              //   title={'CEO at ABC Corporation'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>مساندة ممتازة </TestimonialHeading>
              <TestimonialText>
                كان لدي غرض أريد شرائه من ولاية أخرى ولكن كنت متردد حول ارسال الاموال مباشرة للبائع
                حتى نصحني احدهم باستخدام أضمنلي وكل ما فعلته انني قمت بالتجربة والتعامل عن طريق موقع
                اظمنلي وقد قامو باللازم حيث انه ليس هناك اي ثغرة لديهم للوقوع في الاحتيال
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar src="/images/a7.jpg" name={'عبد الرحمان براهمية'} />
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
