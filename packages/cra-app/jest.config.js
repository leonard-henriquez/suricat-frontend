const base = require('../../jest.base.config.js')
const packageName = require('./package')
	.name.split('/')
	.pop()

module.exports = {
	...base,
	displayName: packageName,
	name: packageName,
	testRegex: '.*.(test|spec).jsx?$',
}
