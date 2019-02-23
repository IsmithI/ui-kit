const path = require('path');

module.exports = {
	entry: {
		app: './src/index.ts',
		vendor: ['react', 'react-dom']
	},
	output: {
		path: path.resolve(__dirname, 'build', "lib"),
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.ts', '.tsx', '.scss', '.css']
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				loader: 'awesome-typescript-loader',
			},
			{
				test: /\.scss$/,
				include: [
					path.resolve(__dirname, "src"),
				],
				use: [
					{ loader: "style-loader" }, // creates style nodes from JS strings,,
					{ loader: "css-loader" }, // compiles Sass to CSS, using Node Sass by default,
					{ loader: "sass-loader" }, // translates CSS into CommonJS
				]
			},
			{
				test: /\.(png|jpeg|svg|jpg)$/,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true, // webpack@1.x
							disable: true, // webpack@2.x and newer
						}
					}
				],
				include: [
					path.resolve(__dirname, "src")
				]
			}
		]
	}
};