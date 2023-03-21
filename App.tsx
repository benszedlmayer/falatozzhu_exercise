import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';

import RootRouter from './src/navigation/RootRouter';
import globalStyles from './src/shared/global.style';

export default function App() {
  return (
    <SafeAreaView style={globalStyles.mainContainer}>
      <NavigationContainer>
        <RootRouter />
      </NavigationContainer>
    </SafeAreaView>
  );
}
