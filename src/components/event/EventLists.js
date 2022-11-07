import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import EventGroupLabel from './EventGroupLabel';
import EventItem from './EventItem';

const EventLists = () => {
    return (
        <View>
            <EventGroupLabel title='Popular Event' />
            <EventItem />
            <EventGroupLabel title='Upcoming Event' />
            <EventItem />
        </View>
    );
}

const styles = StyleSheet.create({})

export default EventLists;
