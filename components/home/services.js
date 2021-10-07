import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Container } from '@chakra-ui/react';
import { FcAssistant, FcCurrencyExchange, FcKey } from 'react-icons/fc';

const Feature = ({ title, text, icon }) => {
  return (
    <Flex justify="center" align="center" direction="column">
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontSize="xl" fontWeight={700}>
        {title}
      </Text>
      <Text fontSize="lg" textAlign="center" color={'gray.600'}>
        {text}
      </Text>
    </Flex>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4} my="16">
      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            icon={<Icon as={FcAssistant} w={10} h={10} />}
            title={'مساندة لحظية'}
            text={
              'فريق المساندة متوفر دوما لتلقي الاتصالات والاجابة عن التساؤلات ومرافقتك طيلة فترة الصفقة حتى النهاية'
            }
          />
          <Feature
            icon={<Icon as={FcCurrencyExchange} w={10} h={10} />}
            title={'تبادل العملات'}
            text={
              'يمكن تحويل الاموال عبر عدة طرق وامكانية قبول عملات أخرى ثم ترجمتها للدينار أو العكس حسب طبيعة الصفقة'
            }
          />
          <Feature
            icon={<Icon as={FcKey} w={10} h={10} />}
            title={'سرية الصفقات'}
            text={
              'في منصة أضمنلي همنا الأول هو اكتساب ثقة زبائننا لذا نسعى الى حماية معلوماتهم الخاصة والحفاظ عليها'
            }
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}
