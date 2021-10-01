import { extendTheme, theme as base, withDefaultVariant } from '@chakra-ui/react';

const theme = extendTheme(
  {
    fonts: {
      heading: `Cairo, ${base.fonts?.heading}`,
      body: `Cairo, ${base.fonts?.body}`,
    },
    components: {
      Input: {
        variants: {
          filled: {
            field: {
              _focus: {
                borderColor: 'green.500',
              },
            },
          },
        },
      },
      Button: {
        baseStyle: {
          _focus: {
            boxShadow: 'none',
          },
        },
      },
    },
  },
  withDefaultVariant({
    variant: 'filled',
    components: ['Input', 'Select', 'Textarea'],
  })
);
export default theme;
