import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home';
import Explore from './src/pages/Explore';
import Tickets from './src/pages/Tickets';
import Settings from './src/pages/Settings';
import { useFonts } from 'expo-font'
import { JamIcon } from './src/utils/icons/JamIcon';

export default function App() {

  const [fontsLoaded] = useFonts({
    IcoMoon: require('./assets/fonts/icomoon.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }


  const Tab = createBottomTabNavigator();

  const options = ({ route }) => ({
    headerShown: false,
    tabBarShowLabel: false,
    tabBarIcon: ({focused, color, size}) => {
      let iconName;
      const customColor = focused ? '#3e63f4' : '#333333';

      if(route.name === 'home') {
        iconName = focused ? 'home-f' : 'home';
      } else if(route.name === 'explore') {
        iconName = focused ? 'compass-f' : 'compass';
      } else if(route.name === 'tickets') {
        iconName = focused ? 'ticket-f' : 'ticket';
      } else {
        iconName = focused ? 'cog-f' : 'cog';
      }
      return <JamIcon name={iconName} color={customColor} size={size} />
    }
  });

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <Tab.Navigator screenOptions={options}>
          <Tab.Screen name='home' component={Home} />
          <Tab.Screen name='explore' component={Explore} />
          <Tab.Screen name='tickets' component={Tickets} />
          <Tab.Screen name='settings' component={Settings} />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
