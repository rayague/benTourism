// const { getDefaultConfig } = require('@expo/metro-config');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// const defaultConfig = getDefaultConfig(__dirname);
// defaultConfig.resolver.sourceExts.push('cjs');

// module.exports = defaultConfig;

const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
