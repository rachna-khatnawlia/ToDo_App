import React from 'react';
// import {useSelector} from 'react-redux';
import Login from '../Screens/Login/Login';

import navigationStrings from './navigationStrings';

export default function AuthStack(Stack) {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.LOGIN} component={Login} options={{headerShown: false}}
      />
    </>
  );
}
