import React from 'react';
import { StatusBar } from 'react-native';
import colors from './src/styles/colors';

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
      <Routes />
    </>
  );
}
