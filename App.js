import {SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import {WebView} from 'react-native-webview';

const App = () => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setLoaded] = useState(false);

  // 웹뷰 로드 시 로딩 상태바 제거
  const onLoadEnd = () => {
    setLoaded(true);
  };

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
          setProgress(nativeEvent.progress);
        }}
        onNavigationStateChange={navState => {
          // Keep track of going back navigation within component
          console.log('navState ===> ', navState);
        }}
        onLoadEnd={onLoadEnd}
      />
    </SafeAreaView>
  );
};

export default App;
