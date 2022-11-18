import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Categories from '../components/categories/Categories';
import EventLists from '../components/event/EventLists';
import Searchbar from '../components/Searchbar';

const Home = ({ navigator }) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.space}>
                <Searchbar />
            </View>
            <Categories  />
            <EventLists />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    space: {
        marginHorizontal: 18
    }
})

export default Home;
