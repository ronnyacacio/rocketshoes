import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/routes';
import Header from './src/components/Header';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#191920" />
      <Header />
      <Routes />
    </>
  );
}
