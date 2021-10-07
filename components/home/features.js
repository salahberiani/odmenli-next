import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

// Replace test data with your own
const features = [
  {
    id: 1,
    title: 'أمان مالي لكل الأطراف',
    text: 'أمان مالي لكل أطراف التعامل عبر كل ولايات الوطن',
  },
  {
    id: 2,
    title: 'المساهمة في انعاش السوق',
    text: 'سرعوة وامان التعامل في أضمنلي تشجع المتعاملين ماليا على النشاط أكثر',
  },
  {
    id: 3,
    title: 'توفير التعامل للمرأة  ',
    text: 'في أضمنلي يمكن للمرأة في المنزل أن تتعامل ماليا دون قلق وبراحة بال',
  },
  {
    id: 4,
    title: 'ضمان حقوق المستقلين',
    text: 'يمكن للمستقل طلب التعامل معه عبر أضمنلي ليحفظ حقه',
  },
  {
    id: 5,
    title: 'تعملات بعملات أخرى',
    text: 'يوفر أضمنلي ميزة التعامل بعملات أخرى',
  },
  {
    id: 6,
    title: 'سهولة استخدام المنصة',
    text: 'المنصة بسيطة ويمكن لأي كان انشاء ضمان',
  },
  {
    id: 7,
    title: 'امكانية الالغاء   ',
    text: 'يمكن الغاء الضمان واسترجاع الأموال في حالات معينة',
  },
  {
    id: 8,
    title: 'توفير عقود ضمان مميزة',
    text: 'ميزات في حالة تواجد تعاملات مكثفة للأفراد أو الشركات ',
  },
];

export default function GridListWithHeading() {
  return (
    <Box my="100px" p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>المزايا والمساهمات</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          أضمنلي يقدم مزايا ومساهمات عديدة من ضمنها
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
