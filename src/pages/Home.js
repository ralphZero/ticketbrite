import React from 'react';
import { Platform, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import Categories from '../components/categories/Categories';
import EventLists from '../components/event/EventLists';
import Header from '../components/home/Header';
import Scaffold from '../components/Scaffold';
import Searchbar from '../components/Searchbar';
import { values } from '../utils/constants';

const Home = ({ navigation }) => {
    const onEventSelected = (item) => {
        navigation.navigate('event-screen', {...item});
    }

    return (
        <Scaffold>
            <Header title="home" showUser />
            <ScrollView>
                <View style={styles.space}>
                    <Searchbar />
                </View>
                <Categories />
                <EventLists onEventPressed={onEventSelected} />
            </ScrollView>
        </Scaffold>
    );
}

const styles = StyleSheet.create({
    space: {
        marginHorizontal: values.size.MARGIN,
    }
})

export default Home;
