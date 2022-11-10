import { useFonts } from 'expo-font';
import Wrapper from './src/components/Wrapper';

export default function App() {

  const [fontsLoaded] = useFonts({
    IcoMoon: require('./assets/fonts/icomoon.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Wrapper />
  );
}


