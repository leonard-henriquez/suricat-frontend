import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

import pkg from './package.json'

export default {
	input: 'src/index.js',
	output: [
		{
			file: pkg.main,
			format: 'cjs',
		},
		{
			file: pkg.module,
			format: 'es',
		},
		{
			file: pkg.browser,
			format: 'umd',
			name: pkg.name,
			globals: {
				react: 'React',
				'react-dom': 'ReactDOM',
				'prop-types': 'PropTypes',
			},
		},
	],
	external: ['react', 'react-dom', 'prop-types'],
	plugins: [
		// Say to rollup how to resolve node dependencies
		resolve({
			extensions: ['.js', '.jsx', '.json'],
		}),
		// Babel
		babel({
			exclude: 'node_modules/**',
		}),
	],
}
