export default {
  input: './src/parser.js',
  output: [
    {
      format: 'cjs',
      file: './dist/index.cjs',
    },
    {
      format: 'es',
      file: './dist/index.es.js',
    },
  ],
};
