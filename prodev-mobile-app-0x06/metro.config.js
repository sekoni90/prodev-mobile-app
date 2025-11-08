const { getDefaultConfig } = require("expo/metro-config");

// Use expo's default Metro config. Do not point the Metro babelTransformerPath
// at NativeWind's babel package — NativeWind should be added as a babel plugin
// in `babel.config.js` (which is already configured). Pointing Metro's
// transformer to a Babel plugin causes `transformer.transform is not a function`.

module.exports = getDefaultConfig(__dirname);