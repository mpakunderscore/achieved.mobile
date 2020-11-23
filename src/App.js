/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useRef, useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, Animated, PanResponder,
} from 'react-native';

import {styles} from './js/styles/styles';
import {initAPI} from './js/api';

import Card from './js/card';

let cardPress = function () {
    alert('You tapped the button!');
}

const App: () => React$Node = () => {

    useEffect(() => {
        initAPI()
    })

    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value
                });
            },
            onPanResponderMove: Animated.event(
                [
                    null,
                    { dx: pan.x, dy: pan.y }
                ]
            ),
            onPanResponderRelease: () => {
                pan.flattenOffset();
            }
        })
    ).current;

    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView style={styles.container}>
                <View style={styles.buttons}>
                    <View style={[styles.button, styles.done]} />
                    <View style={[styles.button, styles.like]} />
                    <View style={[styles.button, styles.dislike]} />
                    <View style={[styles.button, styles.skip]} />
                </View>
                {/*<Card/>*/}
                <Animated.View
                    style={[styles.card, {transform: [{ translateX: pan.x }, { translateY: pan.y }]}]}
                    {...panResponder.panHandlers}
                >
                    <View style={styles.box} />
                </Animated.View>
            </SafeAreaView>
        </>
    );
};

export default App;
