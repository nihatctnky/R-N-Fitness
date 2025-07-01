import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import RoorNavigation from './src/router/RoorNavigation';
import { FıtnessContext } from './Context';

const App = () => {
  return (
    <FıtnessContext>
      <NavigationContainer>
        <RoorNavigation />
      </NavigationContainer>
    </FıtnessContext>
  );
};

export default App;
