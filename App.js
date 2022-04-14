import React, { useEffect } from 'react';
import Routes from './src/navigation/Routes';
import {
  SafeAreaView,
  StatusBar
} from 'react-native';

import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { getItem } from './src/utils/utils';
import types from './src/redux/types';


const {dispatch} = store;

const App = () => {

  useEffect(() => {
    getItem().then((res) => {
      console.log("GetItemValue", res);
      if (!!res) {
        dispatch({
          type: types.SUBMIT_TO_DO,
          payload: res
        })
      }
    })
  }, [])


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
