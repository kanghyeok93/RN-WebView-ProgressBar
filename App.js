import {SafeAreaView} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';

const App = () => {
  return (
    <SafeAreaView style={{height: '100%'}}>
      <WebView
        source={{uri: 'https://www.metavv.com/'}}
        // loading progress 상태 체크
        onLoadProgress={({nativeEvent}) => {
          console.log('nativeEvent ===> ', nativeEvent.progress);
        }}
        onNavigationStateChange={navState => {
          // Keep track of going back navigation within component
          console.log('navState ===> ', navState);
        }}
      />
    </SafeAreaView>
  );
};

export default App;
