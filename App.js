import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import Wrapper from './src/components/Wrapper';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const init = async () => {
    try {
      await Font.loadAsync({
        IcoMoon: require('./assets/fonts/icomoon.ttf'),
      });
    } catch (e) {
      console.warn(e);
    } finally {
      setAppIsReady(true)
    }
  }

  const onLayout = useCallback(async () => {
    if(appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady])


  useEffect(() => {
    init();
  }, [])

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{flex: 1, backgroundColor: 'red'}} onLayout={onLayout}>
      <Wrapper />
    </View>
  );
}


