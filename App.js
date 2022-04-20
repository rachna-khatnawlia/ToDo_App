import React, { useEffect } from 'react';
import Routes from './src/navigation/Routes';
import {
  SafeAreaView,
  StatusBar
} from 'react-native';

import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { getItem, getLoginLocally } from './src/utils/utils';
import types from './src/redux/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import strings from './src/constants/lang';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import actions from './src/redux/actions';
import { requestUserPermission, notificationListener } from './src/utils/notificationServices';

const { dispatch } = store;

export const googleLogin = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const data = userInfo?.user;
    console.log("console after google Login---",data);
    actions.loginFunction(data);
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
      console.log(error);
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
      console.log(error);
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
      console.log(error);
    } else {
      // some other error happened
      console.log(error);
    }
  }
};

const App = () => {

  useEffect(() => {
    requestUserPermission();
    notificationListener();
    GoogleSignin.configure();
    getLang();
    getLoginLocally().then((res) => {
      console.log("GetLoginValue", res);
      dispatch({
        type: types.LOGIN,
        payload: res
      })
    })

    getItem().then((res) => {
      console.log("GetItemValue", res);
      dispatch({
        type: types.SUBMIT_TO_DO,
        payload: res
      })
    })
  }, [])

  const getLang = async () => {
    try {
      const lang = await AsyncStorage.getItem('language')
      console.log("Language", lang);
      if (!!lang) {
        strings.setLanguage(lang);
      } else {
        strings.setLanguage('en');
      }
    } catch (error) {
      console.log("error raised in changing language.")
    }
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      {/* <Text>Hello</Text> */}

      <Provider store={store}>

        <Routes />
      </Provider>


    </SafeAreaView>
  );
};

export default App;