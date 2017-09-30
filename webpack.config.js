let path = require("path"),
	webpack = require("webpack"),
	HtmlWebpackPlugin = require("html-webpack-plugin"),
	ExtractTextPlugin = require("extract-text-webpack-plugin"),
	OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

//3rd party modules
const vendorModules = ["react", "react-dom", "react-router-dom", "prop-types"];

const dirname = path.resolve("./");
function createConfig(isDebug){
	process.env.NODE_ENV = isDebug ? "development" : "production";
	
	const devTool = isDebug ? "eval-source-map" : "";
	const plugins = [ 
		new webpack.optimize.CommonsChunkPlugin({name: "vendor", filename: "vendor.[hash].js"}),
		new HtmlWebpackPlugin({template: "./src/index.html"}),
	];

	const cssLoader = { test: /\.css$/, use: ["style-loader", "css-loader", "postcss-loader"]};
	const sassLoader = { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"] };
	const appEntry = ["./src/main.js"];

	if(!isDebug){
		plugins.push(new webpack.optimize.UglifyJsPlugin());
		plugins.push(new ExtractTextPlugin("css/[name].[hash].css"));
		plugins.push(new OptimizeCssAssetsPlugin({
			cssProcessorOptions: { discardComments: {removeAll: true } }
		}));
		plugins.push(new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}));

		cssLoader.use = ExtractTextPlugin.extract({ use: "css-loader!postcss-loader" });
		sassLoader.use = ExtractTextPlugin.extract({ use: "css-loader!postcss-loader!sass-loader"});
	}


	// ---------------------
	// WEBPACK CONFIG
	return {
		devtool: devTool,
		entry: {
			application: appEntry,
			vendor: vendorModules
		},
		output: {
			path: path.join(dirname, "public"),
			filename: "[name].[hash].js",
			publicPath: "/"
		},
		module : {
			rules: [
				{ test: /\.js$/, loader:["babel-loader"], exclude: "/node_modules/" },
				{ test: /\.(png|jpg|jpeg|gif|woff|ttf|eot|svg|woff2)$/, loader:"url-loader?limit=1024"},
				cssLoader,
				sassLoader
			]
		},
		plugins: plugins
	};
	// ---------------------
}

module.exports = createConfig(true);
module.exports.create = createConfig;