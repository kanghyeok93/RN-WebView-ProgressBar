import {SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {WebView} from 'react-native-webview';

const App = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setLoaded] = useState(false);

  return (
    <SafeAreaView style={{height: '100%'}}>
      <Progress.Bar
        progress={progress}
        width={null}
        borderWidth={0}
        borderRadius={0}
        color="#27D6FF"
        unfilledColor="#E7E7E7"
      />
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
