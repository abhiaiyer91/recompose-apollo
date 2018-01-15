import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';

export default [
  {
    input: 'src/index.js',
    output: {
      file: 'lib/umd/recompose-apollo.js',
      format: 'umd',
      name: 'recompose-apollo',
      sourcemap: true,
    },
    plugins: [
      minify(),
      babel({
        exclude: 'node_modules/**',
      }),
    ],
    onwarn,
  },
  {
    input: 'src/index.js',
    output: {
      file: 'lib/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    plugins: [
      minify(),
      babel({
        exclude: 'node_modules/**',
      }),
    ],
    onwarn,
  },
  {
    input: 'src/index.js',
    output: {
      file: 'lib/es/index.js',
      format: 'es',
      sourcemap: true,
    },
    plugins: [
      minify(),
      babel({
        exclude: 'node_modules/**',
      }),
    ],
    onwarn,
  },
];

function onwarn(message) {
  const suppressed = ['UNRESOLVED_IMPORT', 'THIS_IS_UNDEFINED'];

  if (!suppressed.find((code) => { return message.code === code; })) {
    return console.warn(message.message); // eslint-disable-line no-console
  }
}
