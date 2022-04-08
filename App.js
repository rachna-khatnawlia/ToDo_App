import React from 'react';
import Routes from './src/navigation/Routes';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App = () => {
   return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar/>

      <Provider store={store}>

        <Routes />
      </Provider>
      

    </SafeAreaView>
  );
};

export default App;
