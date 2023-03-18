const path = require("path");
const webpack = require("webpack");

module.exports = {
	mode: "production",
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "public"),
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: "html-loader",
				options: {
					minimize: true,
				},
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-env", "@babel/preset-react"],
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					"file-loader",
					{
						loader: "image-webpack-loader",
						options: {
							bypassOnDebug: true,
							disable: true,
						},
					},
				],
			},
			{
				test: /\.webp$/,
				loader: "file-loader",
				options: {
					name: "[name].[ext]",
				},
			},
		],
	},
	plugins: [
		new webpack.ProvidePlugin({
			React: "react",
		}),
	],
	optimization: {
		minimize: true,
		minimizer: [
			(compiler) => {
				const TerserPlugin = require("terser-webpack-plugin");
				new TerserPlugin({
					terserOptions: {
						parse: {
							ecma: 8,
						},
						compress: {
							ecma: 2020,
							inline: 2,
						},
						mangle: false,
					},
				}).apply(compiler);
			},
		],
	},
	resolve: {
		extensions: [".js", ".jsx", ".css", ".png"],
	},
	performance: {
		hints: process.env.NODE_ENV === "production" ? "error" : false,
		maxEntrypointSize: 580000,
		maxAssetSize: 580000,
	},
	devServer: {
		proxy: {
			"/api": {
				target: "http://127.0.0.1:8080",
				changeOrigin: true,
				secure: false,
				pathRewrite: {
					"^/api": "/api",
				},
			},
		},
		hot: true,
		static: path.resolve(__dirname, "public"),
	},
	devtool: "source-map",
};
