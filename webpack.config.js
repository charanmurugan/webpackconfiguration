const path=require('path');
const webpack=require('webpack');
const HtmlWebpackPlugins=require('html-webpack-plugin');
module.exports={
    entry:[path.resolve(__dirname,'src')+'/js/index.js'],
    output:{
        path:path.resolve(__dirname,'dist/js/'),
        filename:'bundle.js'
    },
    devServer:{
        contentBase:'dist',
        publicPath: '/'
    },
    plugins:[
        new HtmlWebpackPlugins({
            template:'./src/index.html',
            filename:"../../dist/index.html"

        })
    ],
    module:{
      rules:[
        {
          test: /\.jsx?$/,
          exclude:/node_modules/,
          loader:'babel-loader',
          options: {
            presets: ['@babel/preset-react']
        }
        
        }
      ]
    }
  
    
};