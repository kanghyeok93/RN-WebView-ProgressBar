import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <SafeAreaView style={{height: '100%'}}>
      <WebView source={{uri: 'https://www.metavv.com/'}} />
    </SafeAreaView>
  );
};

export default App;
