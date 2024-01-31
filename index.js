/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import CApp from './CApp';
import Applife from './Applife';
import Navigation from './NavigationStack';
import ApiFetch from './ApiFetch';
import AsyncStorageUse from './AsyncStorage';
import ProductWrapper from './ProductWrapper';
import ReduxUse from './ReduxUse';
import { Provider } from 'react-redux';
import store from './component/redux/store';

const AppRedux = () => (
    <Provider store={store}>
        <ReduxUse />
    </Provider>
) //CApp, App, Applife, Navigation, ApiFetch, AsyncStorageUse, ReduxUse, ProductWrapper


AppRegistry.registerComponent(appName, () => AppRedux);