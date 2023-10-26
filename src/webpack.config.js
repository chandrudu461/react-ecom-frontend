module.exports = {
    // Other Webpack configuration settings...
  
    module: {
      rules: [
        {
          test: "/\.(js|jsx)$", 
          exclude: "/node_modules/", // Don't process files in node_modules
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              // Other Babel options if needed
            },
          },
        },
        // Other rules for different types of files...
      ],
    },
  
    // Other Webpack configuration settings...
  };
  