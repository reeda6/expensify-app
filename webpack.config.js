//entry -> output
//__dirname

const path=require('path');
const ExtractTextPlugin=require('extract-text-webpack-plugin');
module.exports=(env)=>{
console.log(env);
const isProduction=env==='production';
const CSSExtract= new ExtractTextPlugin('styles.css');
console.log(path.join(__dirname,'public'));
return{
  entry: './src/app.js',
  output:{
    path:path.join(__dirname,'public'),//abs path
    filename:'bundle.js'
  },
  module:{
    rules:[{
      loader:'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },{
      test: /\.s?css$/,
       use:CSSExtract.extract({
         use:[
           {
             loader:'css-loader',
             options:{
               sourceMap:true
             }
           },
           {
             loader:'sass-loader',
             options:{
               sourceMap:true
             }
           }
         ]
       })
       //[
      //   'style-loader',
      //   'css-loader',
      //   'sass-loader'
      // ]
    }]
  },
  plugins:[
    CSSExtract
  ],
  devtool:isProduction?'source-map':'cheap-module-eval-source-map',
  devServer:{
    contentBase:path.join(__dirname,'public'),
    historyApiFallback:true
  }
};
};
