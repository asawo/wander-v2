const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Wander',
			template: './src/index.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.tsx?$/,
				exclude: /\.test.tsx?$/,
				include: /src/,
				use: 'awesome-typescript-loader?silent=true',
			},
			{
				test: /\.s?css$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.ts(x)?$/,
				use: ['awesome-typescript-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.(ts|tsx)$/,
				enforce: 'pre',
				use: [
					{
						options: {
							eslintPath: require.resolve('eslint'),
						},
						loader: require.resolve('eslint-loader'),
					},
				],
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.tsx', '.ts'],
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		historyApiFallback: true,
	},
};
