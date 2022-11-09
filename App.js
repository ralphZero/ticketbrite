import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home';
import Explore from './src/pages/Explore';
import Tickets from './src/pages/Tickets';
import Settings from './src/pages/Settings';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container}>
        <Tab.Navigator screenOptions={{
          headerShown: false,
        }}>
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
