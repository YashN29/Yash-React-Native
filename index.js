/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Index from './src/Feb27/index';
import RunApp from './src/Feb28/index';



AppRegistry.registerComponent(appName, () => RunApp);
