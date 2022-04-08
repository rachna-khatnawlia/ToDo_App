import React from 'react';
import {useSelector} from 'react-redux';
import { AddTask } from '../Components/AddTask';
import Home from '../Screens/Home/Home';
import navigationStrings from './navigationStrings';

export default function MainStack(Stack) {
  // const {appData, appStyle} = useSelector(state => state?.initBoot);

  return (
    <>
      {/* <Stack.Screen name={navigationStrings.HOME} component={Home} />*/}
       <Stack.Screen name={navigationStrings.HOME} component={Home} options={{headerShown: false}}/>
       <Stack.Screen name={navigationStrings.ADD_TASK} component={AddTask} options={{headerShown: true}}/>
    </>
  );
}
