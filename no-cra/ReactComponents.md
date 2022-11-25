## React Components
* Webpack
  * npm install --save-dev webpack webpack-cli webpack-dev-server
* React
  * npm install react react-dom
* Babel (convert JS to be backwards compatible)
  * npm install --save-dev babel-loader @babel/preset-env @babel/core @babel/plugin-transform-runtime @babel/preset-react babel-eslint @babel/runtime
  * 2 files needed for babel to work properly
    *  .babelrc --> config for babel
    *  webpack.config.js --> config for webpack

## Folders that will include code
* /public/index.html
* /src/index.js
* /src/App.js -- React Entry point, first component
* "main" path in package.json needs to match "entry" in web.config

## commands
* npm run build generates main.js inside /public

