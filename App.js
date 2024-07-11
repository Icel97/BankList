import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BankList from './src/components/BankList';
import BankDetail from './src/components/BankDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="BankList" component={BankList} options={{ headerShown: false }} />
              <Stack.Screen name="BankDetail" component={BankDetail} options={{ title: 'Detalle del Banco' }} />
          </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;