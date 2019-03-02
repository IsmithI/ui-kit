const path = require('path');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');
module.exports = (baseConfig, env, defaultConfig) => {
	defaultConfig.module.rules.push(
		{
			test: /\.(ts|tsx)$/,
			loader: require.resolve('ts-loader')
		},
		{
			test: /.scss$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						sourceMap: true,
						modules: true,
					}
				},
				'sass-loader'
			]
		}
	);
	defaultConfig.plugins.push(new TSDocgenPlugin());
	defaultConfig.resolve.extensions.push('.ts', '.tsx');
	return defaultConfig;
};