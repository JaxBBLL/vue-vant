import antfu from '@antfu/eslint-config';

export default antfu(
  {
    vue: true,
    typescript: true,
    jsonc: true,
    markdown: true,
    yaml: true,
    stylistic: {
      quotes: 'single',
      indent: 2,
      semi: true,
    },
  },
  {
    rules: {},
  },
);
