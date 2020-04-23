import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import Routes from './src/routes';
import NavigationService from './src/services/navigation';
import store from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#191920" />
      <Routes
        ref={(navigatorRef) => NavigationService.setNavigator(navigatorRef)}
      />
    </Provider>
  );
}
