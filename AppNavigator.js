import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext, AuthProvider } from './AuthContext';

import SignInScreen from './screens/SignInScreen';
import ExplorerScreen from './screens/ExplorerScreen';
import AccountScreen from './screens/AccountScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Explorer" component={ExplorerScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);

const AppNavigator = () => {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user ? <MainTabs /> : <Stack.Navigator><Stack.Screen name="SignIn" component={SignInScreen} /></Stack.Navigator>}
    </NavigationContainer>
  );
};

export default () => (
  <AuthProvider>
    <AppNavigator />
  </AuthProvider>
);
