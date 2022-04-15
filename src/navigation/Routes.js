import React from 'react';

import MainStack from './MainStack';
import AuthStack from './AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

export default function Routes() {
  const userData = useSelector(state => state.UserStatus.userLoginState);
  console.log("userData on route page", userData);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* ----------------------------Auth and Main Stack ----------------------------------- */}
        {userData ? MainStack(Stack) : AuthStack(Stack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
