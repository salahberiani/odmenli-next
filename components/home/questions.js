import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Container,
  useColorModeValue,
  Box,
  Stack,
  Heading,
} from '@chakra-ui/react';

const questions = [
  {
    q: 'كم هي أسعار التعامل معكم ؟',
    a: 'يمكن الاطلاع على الأسعار التي نعمل بها وكل المعلومات المتعلقة بها في صفحة أسعار التعامل ',
  },
  {
    q: 'هل أستطيع التعامل معكم عبر ccp ؟',
    a: 'نعم يمكن التعامل معنا عير ال ccp وذلك بارسال المبلغ الذي تريدون توجيهه الى الطرف الأخر زائد المبلغ المالي لقاء الخدمة مع أضمنلي',
  },
  {
    q: 'هل أستطيع التعامل معكم عبر paypal أو paysera ؟',
    a: 'نعم يمكن التعامل معنا عير ال paypal أو paysera وذلك بارسال المبلغ الذي تريدون توجيهه الى الطرف الأخر زائد المبلغ المالي لقاء الخدمة مع أضمنلي',
  },
];
export default function Questions() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>أسئلة و أجوبة</Heading>
      </Stack>
      <Container py={16} maxW={'6xl'}>
        <Accordion>
          {questions.map((e, i) => {
            return (
              <AccordionItem key={i}>
                <AccordionButton
                  p="4"
                  justifyContent="center"
                  fontSize={{ base: 'none', md: '2xl' }}
                  fontWeight="extrabold"
                  color="green.500"
                >
                  {e.q}
                </AccordionButton>

                <AccordionPanel fontSize="lg" pb={4}>
                  {e.a}
                </AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </Container>
    </Box>
  );
}
