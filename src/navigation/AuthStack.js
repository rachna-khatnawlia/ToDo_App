import React from 'react';
import Login from '../Screens/Login/Login';
import SignUp from '../Screens/SignUp/SignUp';

import navigationStrings from './navigationStrings';

export default function AuthStack(Stack) {
  return (
    <>
      <Stack.Screen name={navigationStrings.LOGIN} component={Login} options={{headerShown: false}}/>
      <Stack.Screen name={navigationStrings.SIGN_UP} component={SignUp} options={{headerShown: false}}/>
    </>
  );
}
