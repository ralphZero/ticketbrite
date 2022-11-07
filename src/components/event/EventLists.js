import React from 'react';
import {View, StyleSheet} from 'react-native';
import EventGroupLabel from './EventGroupLabel';
import EventItem from './EventItem';

const EventLists = () => {
    return (
        <View>
            <EventGroupLabel title='Popular Event' />
            <EventItem />
        </View>
    );
}

const styles = StyleSheet.create({})

export default EventLists;
