const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const {VueLoaderPlugin} = require("vue-loader")

module.exports = {
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ["@babel/preset-env"]
						}
					}
				]
			},
			{
				test: /\.vue$/,
				loader: "vue-loader",
				options: {
					loader: {
						scss: "vue-style-loader!css-loader!sass-loader"
					}
				}
			},
			{
				test: /\.scss$/,
				use: [
					"style-loader",
					"css-loader",
					"postcss-loader",
					"sass-loader"
				]
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
						options: {minimize: true}
					}
				]
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css"
		})


	]
}