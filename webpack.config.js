module.exports = {
 entry: "./main.jsx",
 output: {
   filename: "./bundle.js"
 },
 module: {
   loaders: [
     {test: /\.css$/, loader:'style!css'},
     {test: /\.jsx$/, loader: 'jsx-loader?insertPragma=React.DOM&harmony'},
   ]
 },
 resolve: {
    extensions: ['', '.js', '.jsx']
 }
};
