const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
	resolve: {
		extensions: ['.js', '.jsx']
	},
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'), // change this
		publicPath: '/',
		filename: 'bundle.js'
	},
	devtool: 'inline-source-map',
	module: {
		rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.(sass|css|scss)$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: () => [
									require("autoprefixer")()
								]
							}
						},
					},
					'sass-loader',
				]
			},
		]
	},
	plugins: [new HtmlWebpackPlugin({
		template: 'src/index.html'
	})],
}