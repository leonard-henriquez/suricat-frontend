import { addParameters, configure } from '@storybook/react'
import theme from './theme'

addParameters({
	options: {
		theme: theme,
	},
})

configure(require.context('../stories', true, /\.stories\.jsx?$/), module)
