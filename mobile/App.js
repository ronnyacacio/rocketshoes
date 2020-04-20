import React from 'react';
import { StatusBar } from 'react-native';

import colors from './src/styles/colors';
import Routes from './src/routes';
import Header from './src/components/Header';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.dark} />
      <Header />
      <Routes />
    </>
  );
}
