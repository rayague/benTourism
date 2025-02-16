import 'react-native-gesture-handler';
import 'react-native-url-polyfill/auto';
import {AppRegistry, Platform} from 'react-native';
import App from './App';

AppRegistry.registerComponent('main', () => App);

if (Platform.OS === 'web') {
  const rootTag =
    document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('main', {rootTag});
}
