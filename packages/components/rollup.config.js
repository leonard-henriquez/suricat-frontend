import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'

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
		},
	],
	external: ['react', 'react-dom'],
	plugins: [
		// Exclude external dependencies from bundle
		external(),
		// Allow to include all kind of amd package in an ES6 way
		commonjs({
			include: 'node_modules/**',
			extensions: ['.js', '.jsx', '.json'],
		}),
		// Say to rollup how to resolve node dependencies
		resolve(),
		// Babel
		babel({
			exclude: 'node_modules/**',
		}),
	],
}
