module.exports = {
	roots: ['<rootDir>/src'],
	transform: {
		'^.+\\.(js|jsx)$': 'babel-jest',
		'\\.(jpg|jpeg|png|gif|webp|svg)$': 'jest-transform-file',
	},
	moduleNameMapper: {
		'\\.(css|less)$': 'identity-obj-proxy',
	},
	moduleFileExtensions: ['js', 'jsx', 'json'],
	collectCoverage: true,
	coveragePathIgnorePatterns: ['(tests/.*.mock).(jsx?)$'],
}
