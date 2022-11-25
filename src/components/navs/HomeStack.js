import React from 'react';
import { StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../pages/Home';
import Event from '../../pages/Event';
import FloatingHeader from '../event/FloatingHeader';

const HomeStack = () => {
    const HomeStack = createNativeStackNavigator();
    const options = ({ route }) => ({
        headerShown: route.name === 'event-screen',
        header: (props) => <FloatingHeader {...props} />,
        contentStyle: {
            backgroundColor: 'transparent',
        }
    });

    return (
        <HomeStack.Navigator screenOptions={options}>
            <HomeStack.Screen name='home-screen' component={Home}/>
            <HomeStack.Screen name='event-screen' component={Event}/>
        </HomeStack.Navigator>
    );
}

const styles = StyleSheet.create({})

export default HomeStack;
