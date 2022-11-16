import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';
import Home from '../pages/Home';
import Explore from '../pages/Explore';
import Tickets from '../pages/Tickets';
import Settings from '../pages/Settings';
import { JamIcon } from '../utils/icons/JamIcon';
import Header from './home/Header';

const Wrapper = () => {
  const Tab = createBottomTabNavigator();

  const options = ({ route }) => ({
    headerShown: true,
    header: ({ route }) => (<Header title={route.name} showUser />),
    tabBarShowLabel: false,
    tabBarIcon: ({ focused, size }) => {
      let iconName;
      const customColor = focused ? '#3e63f4' : '#333333';

      if (route.name === 'home') {
        iconName = focused ? 'home-f' : 'home';
      } else if (route.name === 'explore') {
        iconName = focused ? 'compass-f' : 'compass';
      } else if (route.name === 'tickets') {
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
        <LinearGradient 
          style={styles.gradientContainer} 
          colors={['#ffffff', '#f8f8f8']}
          locations={[0.2, 0.01]}
          >
          <Tab.Navigator sceneContainerStyle={{ backgroundColor: 'transparent' }} screenOptions={options}>
            <Tab.Screen name='home' component={Home} />
            <Tab.Screen name='explore' component={Explore} />
            <Tab.Screen name='tickets' component={Tickets} />
            <Tab.Screen name='settings' component={Settings} />
          </Tab.Navigator>
        </LinearGradient>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gradientContainer: {
    flex: 1
  }
});

export default Wrapper;
